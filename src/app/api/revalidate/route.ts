import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

type WebhookPayload = { tags?: string[] };

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
      true // delay so the Sanity CDN has updated before pages refetch
    );

    if (!isValidSignature) {
      return new Response("Invalid signature", { status: 401 });
    }
    // clientLogo documents have no slug, so the webhook projection emits a
    // null alongside the type tag — keep only real tag strings.
    const tags = (body?.tags ?? []).filter((t): t is string => typeof t === "string" && t.length > 0);
    if (!tags.length) {
      return new Response("Missing tags", { status: 400 });
    }

    tags.forEach((tag) => revalidateTag(tag, "max"));
    return NextResponse.json({ revalidated: tags });
  } catch (err) {
    return new Response((err as Error).message, { status: 500 });
  }
}
