"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/lib/content";

const themes = [
  { bg: "#E4E2DE", text: "#1A1A1A", sub: "rgba(26,26,26,0.55)", ctrl: "#1A1A1A", ctrlIdle: "rgba(26,26,26,0.25)" },
  { bg: "#1A1A1A", text: "#FFFFFF", sub: "rgba(255,255,255,0.55)", ctrl: "#FFFFFF", ctrlIdle: "rgba(255,255,255,0.3)" },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), 5500);
    return () => clearInterval(timer);
  }, [count]);

  const goto = (i: number) => setIndex(((i % count) + count) % count);
  const theme = themes[index % themes.length];

  return (
    <section className="relative overflow-hidden">
      <div
        className="flex w-full transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)]"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {testimonials.map((t, i) => {
          const th = themes[i % themes.length];
          return (
            <div
              key={i}
              className="flex-none w-full box-border pt-[clamp(48px,8vw,112px)] px-[clamp(20px,5vw,48px)] pb-[clamp(72px,11vw,148px)]"
              style={{ background: th.bg }}
            >
              <div className="max-w-[1080px] mx-auto">
                <span
                  className="inline-flex items-center gap-[11px] font-mono font-medium text-[11px] tracking-[0.12em] uppercase mb-[clamp(32px,4vw,52px)]"
                  style={{ color: th.sub }}
                >
                  <span className="w-[4px] h-[1em]" style={{ background: th.text }} />
                  What they say
                </span>
                <p
                  className="m-0 font-display font-[var(--kx-dw,700)] text-[clamp(23px,2.7vw,34px)] leading-[1.12] tracking-[-0.03em]"
                  style={{ color: th.text, textWrap: "balance" }}
                >
                  {t.quote}
                </p>
                <div className="flex flex-col gap-[5px] mt-[clamp(36px,4.5vw,60px)]">
                  <span className="font-mono font-medium text-[11px] tracking-[0.12em] uppercase" style={{ color: th.text }}>
                    {t.name}
                  </span>
                  <span className="font-mono font-medium text-[11px] tracking-[0.12em] uppercase" style={{ color: th.sub }}>
                    {t.role}
                  </span>
                  <span className="font-mono font-medium text-[11px] tracking-[0.12em] uppercase" style={{ color: th.sub }}>
                    {t.source}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute left-0 right-0 bottom-[clamp(28px,4vw,48px)] z-10 max-w-[1080px] mx-auto px-[clamp(20px,5vw,48px)] flex items-center gap-5">
        <div className="flex gap-[10px]">
          <button
            aria-label="Previous review"
            onClick={() => goto(index - 1)}
            className="w-[46px] h-[46px] inline-flex items-center justify-center border cursor-pointer transition-colors"
            style={{ borderColor: theme.ctrlIdle, color: theme.ctrl }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square">
              <path d="M20 12H5" />
              <path d="M11 6l-6 6 6 6" />
            </svg>
          </button>
          <button
            aria-label="Next review"
            onClick={() => goto(index + 1)}
            className="w-[46px] h-[46px] inline-flex items-center justify-center border cursor-pointer transition-colors"
            style={{ borderColor: theme.ctrlIdle, color: theme.ctrl }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square">
              <path d="M4 12h15" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
        <div className="flex gap-[9px]">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label="Go to review"
              onClick={() => goto(i)}
              className="h-[7px] p-0 border-0 cursor-pointer transition-all duration-200"
              style={{
                width: i === index ? 28 : 7,
                background: i === index ? theme.ctrl : theme.ctrlIdle,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
