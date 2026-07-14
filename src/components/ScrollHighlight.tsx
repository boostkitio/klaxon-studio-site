"use client";

import { useEffect, useRef, useState } from "react";

function clamp01(n: number) {
  return n < 0 ? 0 : n > 1 ? 1 : n;
}

/**
 * Drives the source's two scroll-highlight mechanics:
 *  - trigger="page": progress = how far you've scrolled from the top of
 *    the page (0 to 15% of viewport height). Used once per page, near a
 *    hero/top heading (the original `highlightRef` / `workHlRef`).
 *  - trigger="element" (default): progress = how far this element has
 *    scrolled into view (72% down the viewport, over a 32%-of-viewport
 *    band). Used for headings further down the page (`data-hl-scroll`).
 */
function useHighlightProgress(trigger: "page" | "element") {
  const ref = useRef<HTMLSpanElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const vh = window.innerHeight || 800;
      if (trigger === "page") {
        const y = window.scrollY || window.pageYOffset || 0;
        setProgress(clamp01(y / (vh * 0.15)));
      } else if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setProgress(clamp01((vh * 0.72 - rect.top) / (vh * 0.32)));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [trigger]);

  return { ref, progress };
}

/** A coral (or custom) highlighter box that sweeps in behind static-coloured text. */
export function HighlightSweep({
  children,
  bg = "var(--brand)",
  color,
  trigger = "element",
  className = "",
}: {
  children: string;
  bg?: string;
  color: string;
  trigger?: "page" | "element";
  className?: string;
}) {
  const { ref, progress } = useHighlightProgress(trigger);
  return (
    <span
      ref={ref}
      className={className}
      style={{
        backgroundImage: `linear-gradient(${bg},${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 50%",
        backgroundSize: `${(progress * 100).toFixed(1)}% 1em`,
        transition: "background-size .14s linear",
        padding: "0 0.04em",
        WebkitBoxDecorationBreak: "clone",
        boxDecorationBreak: "clone",
        color,
      }}
    >
      {children}
    </span>
  );
}

/** A left-to-right colour wipe: `from`-coloured text is progressively replaced by `to`-coloured text.
 *  Optionally sweeps a solid `bg` highlighter box in behind the base text at the same time. */
export function HighlightWipe({
  children,
  from,
  to,
  bg,
  trigger = "element",
  className = "",
}: {
  children: string;
  from: string;
  to: string;
  bg?: string;
  trigger?: "page" | "element";
  className?: string;
}) {
  const { ref, progress } = useHighlightProgress(trigger);
  const pct = `${(progress * 100).toFixed(2)}%`;
  return (
    <span ref={ref} className={`relative inline-block lg:whitespace-nowrap align-baseline ${className}`}>
      <span
        style={{
          display: "inline-block",
          padding: bg ? "0.04em 0.22em 0.04em 0" : "0.08em 0 0.18em",
          color: from,
          backgroundImage: `linear-gradient(${bg ?? from},${bg ?? from})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0 0",
          backgroundSize: `${pct} 100%`,
          transition: "background-size .14s linear",
        }}
      >
        {children}
      </span>
      <span
        aria-hidden
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          padding: bg ? "0.04em 0 0.04em 0" : "0.08em 0 0.18em",
          width: pct,
          overflow: "hidden",
          whiteSpace: "nowrap",
          color: to,
          transition: "width .14s linear",
          pointerEvents: "none",
        }}
      >
        {children}
      </span>
    </span>
  );
}
