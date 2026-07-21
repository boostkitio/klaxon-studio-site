import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { checkRateLimit } from "@/lib/rate-limit";

const ContactSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  company: z.string().max(200).optional().or(z.literal("")),
  brief: z.string().min(10).max(5000),
  // Honeypot — should always be empty for real users.
  website: z.string().max(0).optional().or(z.literal("")),
});

function sanitiseHeader(s: string) {
  return s.replace(/[\r\n]/g, "");
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "127.0.0.1";
  const rl = checkRateLimit(`contact:${ip}`);
  if (!rl.ok) {
    const retryAfterSec = Math.max(1, Math.ceil((rl.resetAt - Date.now()) / 1000));
    return NextResponse.json(
      { ok: false, error: "Too many requests" },
      { status: 429, headers: { "Retry-After": String(retryAfterSec) } }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid submission" }, { status: 400 });
  }
  const data = parsed.data;

  if (data.website) return NextResponse.json({ ok: true });

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !from || !to) {
    console.error("[contact] Missing RESEND_API_KEY / RESEND_FROM_EMAIL / CONTACT_TO_EMAIL");
    return NextResponse.json({ ok: false, error: "Email not configured" }, { status: 502 });
  }

  const resend = new Resend(apiKey);
  const subject = `New enquiry from ${sanitiseHeader(data.name)}${data.company ? ` (${sanitiseHeader(data.company)})` : ""}`;

  const result = await resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject,
    text:
      `Name: ${data.name}\n` +
      `Email: ${data.email}\n` +
      (data.company ? `Company: ${data.company}\n` : "") +
      `\n${data.brief}\n\n--\nSent from the klaxon.studio contact form`,
  });

  if (result.error) {
    console.error("[contact] Resend error", result.error);
    return NextResponse.json({ ok: false, error: "Email failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, id: result.data?.id });
}
