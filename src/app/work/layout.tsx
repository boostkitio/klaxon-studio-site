import { ogFor } from "@/lib/site";

export const metadata = {
  ...ogFor(
    "Our Work",
    "Selected work from Klaxon Studio: commercials, branded content, documentaries and corporate film for BMW, Aston Martin, BOSS, Dove, Shell and more.",
    "/work"
  ),
  // Re-declare the template: a segment that sets its own title stops
  // inheriting the root layout's, so child pages would lose the suffix.
  title: { default: "Our Work", template: "%s | Klaxon Studio" },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
