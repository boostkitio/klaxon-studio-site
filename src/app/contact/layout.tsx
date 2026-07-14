import { ogFor } from "@/lib/site";

export const metadata = ogFor(
  "Contact Us",
  "Got a brief, a budget or just the bones of an idea? Get in touch with Klaxon Studio, London. We reply within one working day.",
  "/contact"
);

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
