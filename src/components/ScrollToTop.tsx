"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * The App Router doesn't reliably reset scroll on client-side navigation.
 * Jump to the top on every pathname change, except when landing on an
 * in-page anchor.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
