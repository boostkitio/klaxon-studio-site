import { ogFor } from "@/lib/site";

export const metadata = ogFor(
  "About Us",
  "Meet the four founders behind Klaxon Studio, a London video production company built on two decades of broadcast, commercial and branded content experience.",
  "/about"
);

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
