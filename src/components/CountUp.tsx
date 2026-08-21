"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts a formatted figure up from zero the first time it scrolls into view.
 *
 * The server render emits the final value, so crawlers, the Offer markup on
 * /pricing and anyone without JS all see the real price; the climb only ever
 * happens after mount. Honours prefers-reduced-motion by not animating.
 */
export default function CountUp({
  value,
  durationMs = 1100,
  className = "",
}: {
  value: string;
  durationMs?: number;
  className?: string;
}) {
  // Split "£4,500" into its prefix, its digits and anything trailing, so the
  // currency symbol and grouping survive the animation.
  const match = value.match(/^(\D*)([\d,.]+)(.*)$/);
  const prefix = match ? match[1] : "";
  const suffix = match ? match[3] : "";
  const target = match ? Number(match[2].replace(/,/g, "")) : NaN;
  const animatable = match !== null && Number.isFinite(target);

  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!animatable) return;
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    const format = (n: number) => prefix + Math.round(n).toLocaleString("en-GB") + suffix;
    let raf = 0;
    let fallback = 0;

    // Whatever happens to the frame loop, the figure ends up on the real
    // price. A stalled or throttled rAF must never strand a visitor on a
    // number that isn't what we charge.
    const settle = () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(fallback);
      setDisplay(value);
    };

    const step = (start: number) => (now: number) => {
      const t = Math.min((now - start) / durationMs, 1);
      if (t >= 1) {
        settle();
        return;
      }
      // easeOutCubic: quick off the mark, settling onto the real number.
      setDisplay(format(target * (1 - Math.pow(1 - t, 3))));
      raf = requestAnimationFrame(step(start));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();
        setDisplay(format(0));
        const started = performance.now();
        raf = requestAnimationFrame(step(started));
        fallback = window.setTimeout(settle, durationMs + 500);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
      window.clearTimeout(fallback);
    };
  }, [animatable, prefix, suffix, target, durationMs, value]);

  // A hidden copy of the final figure holds the width open. Without it the
  // span collapses to "£0" as the climb starts and shoves the adjacent "+"
  // and "exc VAT" across, which is a layout shift on every visit.
  return (
    <span
      ref={ref}
      className={className}
      style={{ display: "inline-grid", fontVariantNumeric: "tabular-nums" }}
    >
      <span aria-hidden style={{ gridArea: "1 / 1", visibility: "hidden" }}>
        {value}
      </span>
      <span style={{ gridArea: "1 / 1" }}>{display}</span>
    </span>
  );
}
