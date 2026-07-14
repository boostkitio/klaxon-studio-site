"use client";

import { useIsPresentationTool } from "next-sanity/hooks";

export default function DisableDraftMode() {
  const isPresentationTool = useIsPresentationTool();
  // Inside the Presentation tool the Studio manages draft mode itself.
  if (isPresentationTool) return null;

  return (
    <a
      href="/api/draft-mode/disable"
      className="fixed bottom-4 right-4 z-[9999] bg-[#1A1A1A] text-white font-mono text-[11px] tracking-[0.1em] uppercase px-4 py-2 no-underline"
    >
      Exit Preview
    </a>
  );
}
