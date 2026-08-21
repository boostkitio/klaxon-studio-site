import { ogFor } from "@/lib/site";

export const metadata = {
  ...ogFor(
    "Services",
    "From ideation and production management through filming, editing, grading and delivery: the full-service video production capabilities of Klaxon Studio, London.",
    "/services"
  ),
  // Re-declare the template: a segment that sets its own title stops
  // inheriting the root layout's, so child pages would lose the suffix.
  title: { default: "Services", template: "%s | Klaxon Studio" },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
