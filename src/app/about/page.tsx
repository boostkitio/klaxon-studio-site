"use client";

import { useState } from "react";
import Label from "@/components/ui/Label";
import ImageSlot from "@/components/ImageSlot";
import { HighlightSweep, HighlightWipe } from "@/components/ScrollHighlight";
import { founders } from "@/lib/content";

export default function AboutPage() {
  const [open, setOpen] = useState(-1);
  const cols = founders.map((_, i) => (open === -1 ? "1fr" : open === i ? "4fr" : "1fr")).join(" ");

  return (
    <main>
      <section className="bg-[var(--brand)] pt-[clamp(64px,8vw,112px)] pb-[clamp(28px,3.5vw,48px)]">
        <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,48px)]">
          <div className="mb-[clamp(24px,3vw,32px)] text-white">
            <Label tone="on-brand">About Klaxon</Label>
          </div>
          <h1 className="font-display font-[var(--kx-dw,700)] text-[clamp(31px,4.5vw,61px)] leading-[0.97] tracking-[-0.04em] text-white">
            London based.
            <br />
            <span className="hidden lg:inline">
              <HighlightWipe from="#fff" to="var(--brand)" trigger="page">
                Internationally experienced.
              </HighlightWipe>
            </span>
            <span className="lg:hidden">Internationally experienced.</span>
          </h1>
        </div>
      </section>

      {/* STORY */}
      <section className="pt-[clamp(48px,6vw,80px)] pb-[clamp(32px,4vw,56px)]">
        <div
          className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,48px)] grid gap-[clamp(40px,5vw,72px)] items-start"
          style={{ gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}
        >
          <div className="self-stretch">
            <div className="relative h-full min-h-[360px] bg-[var(--surface-sunken)]">
              <ImageSlot
                src="/uploads/four-founders.webp"
                alt="The four Klaxon Studio founders"
                placeholder="Drop a studio / team photo"
                objectPosition="center 25%"
                sizes="(min-width: 680px) 50vw, 100vw"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[22px] text-[clamp(13px,1.26vw,14px)] leading-[1.62] text-[var(--text-secondary)]">
            <p className="font-display font-[var(--kx-dw,700)] text-[clamp(20px,2.16vw,27px)] leading-[1.18] tracking-[-0.02em] text-[var(--text-primary)]">
              Klaxon Studio didn&apos;t start from zero<span className="text-[var(--brand)]">.</span>
            </p>
            <p>
              Charlie and Jake had been building Punch Media for years, shooting commercials, documentaries,
              corporate video and branded content across 23 countries. Matt and James had been doing the same
              through End Frame, with a focus on post-production, directing, and creative development. Two London
              video production companies, four specialists, and a growing list of shared clients that kept pulling
              us into the same rooms.
            </p>
            <p>
              By early 2024, the question wasn&apos;t whether to join forces. It was why we hadn&apos;t done it
              sooner. In May 2024, Klaxon Studio launched as a full-service video production company in London,
              based in Bermondsey, London, with decades of combined experience and a shared belief that most video
              content isn&apos;t nearly good enough.
            </p>
            <p>As a video production agency, we work across corporate films, social content, branded content, and documentary.</p>
            <p>
              Since launching, the team has made films for Goldman Sachs, Aston Martin, Jamie Oliver, Historic
              England, The Telegraph and a growing roster of brands who feel the same way about quality that we do.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="pt-[clamp(2px,1vw,14px)] pb-[clamp(64px,8vw,112px)]">
        <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,48px)]">
          {/* Mobile: simple stacked cards, tap to expand bio below the portrait.
              The desktop width-animating tile grid below doesn't translate to
              a narrow viewport (4 columns of a 2.5:1 box would be tiny slivers). */}
          <div className="lg:hidden flex flex-col gap-[1px] bg-[var(--border-subtle)]">
            {founders.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.id} className="bg-[var(--kx-page,#ECEBE9)]">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full relative overflow-hidden bg-[#1A1A1A] block text-left border-0 p-0 cursor-pointer transition-[aspect-ratio] duration-300 ease-[cubic-bezier(.16,1,.3,1)]"
                    style={{ aspectRatio: isOpen ? "4 / 5" : "4 / 3" }}
                  >
                    <ImageSlot src={`/${f.img}`} alt={f.name} placeholder="Portrait to come" objectPosition={`center ${f.imgPositionY ?? "20%"}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/74 to-black/4 pointer-events-none" />
                    <div className="absolute left-0 right-0 bottom-0 p-[18px]">
                      <span className="block font-display font-bold text-[21px] leading-none tracking-[-0.02em] text-white">
                        {f.name}
                      </span>
                      <span className="block mt-[6px] font-mono font-medium text-[10px] tracking-[0.12em] uppercase text-white/72">
                        {f.role}
                      </span>
                    </div>
                    <span
                      className="absolute top-[16px] right-[16px] inline-flex items-center justify-center w-[30px] h-[30px] bg-white/10 text-white transition-transform duration-200"
                      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square">
                        <path d="M12 4v16" />
                        <path d="M4 12h16" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(.16,1,.3,1)]"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <div className="p-[20px] flex flex-col gap-[12px] text-[14px] leading-[1.55] text-[var(--text-secondary)]">
                        {f.bio.map((para, j) => (
                          <p key={j}>{para}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="hidden lg:grid gap-0 w-full aspect-[2.5/1] min-h-[440px] transition-[grid-template-columns] duration-[400ms] ease-[cubic-bezier(.16,1,.3,1)]"
            style={{ gridTemplateColumns: cols }}
          >
            {founders.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={f.id}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="group relative overflow-hidden min-w-0 bg-[#1A1A1A] cursor-pointer"
                  style={{ boxShadow: "1px 0 0 var(--kx-page,#ECEBE9)" }}
                >
                  {/* Expanding a tile changes its own box from tall-and-narrow to
                      short-and-wide (4fr vs 1fr of the row), which is a completely
                      different crop shape — imgPositionYDesktop is calibrated for the
                      closed shape, imgPositionY for the open one. Using the closed
                      value here while open is why it used to land on the center of
                      the photo instead of the face. */}
                  <ImageSlot
                    src={`/${f.img}`}
                    alt={f.name}
                    placeholder="Portrait to come"
                    objectPosition={`center ${(isOpen ? f.imgPositionY : f.imgPositionYDesktop) ?? "20%"}`}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  {!isOpen ? (
                    <>
                      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-t from-black/74 to-black/4" />
                      <div className="absolute inset-0 z-[2] pointer-events-none bg-[var(--brand)] opacity-0 group-hover:opacity-90 transition-opacity duration-200" />
                      <div className="absolute left-0 right-0 bottom-0 z-[3] p-[clamp(16px,1.6vw,22px)]">
                        <span className="block font-display font-bold text-[clamp(16px,1.5vw,21px)] leading-none tracking-[-0.02em] text-white">
                          {f.name}
                        </span>
                        <span className="block mt-[6px] font-mono font-medium text-[9px] tracking-[0.12em] uppercase text-white/72">
                          {f.role}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-black/88 to-black/60" />
                      <div className="absolute inset-0 z-[3] p-[clamp(22px,2.4vw,34px)] flex flex-col justify-start gap-[14px] overflow-y-auto">
                        <div className="flex items-baseline gap-[14px] flex-wrap">
                          <h3 className="font-display font-bold text-[clamp(22px,2.4vw,32px)] leading-none tracking-[-0.03em] text-white">
                            {f.name}
                          </h3>
                          <span className="font-mono font-medium text-[10px] tracking-[0.12em] uppercase text-[var(--brand)]">
                            {f.role}
                          </span>
                        </div>
                        <div className="flex flex-col gap-[11px] max-w-[64ch] text-[clamp(12px,1.05vw,14px)] leading-[1.5] text-white/86">
                          {f.bio.map((para, j) => (
                            <p key={j}>{para}</p>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                  <span
                    aria-label={isOpen ? `Close ${f.name}'s bio` : `Open ${f.name}'s bio`}
                    className="absolute top-[16px] right-[16px] z-[4] inline-flex items-center justify-center w-[30px] h-[30px] bg-white/10 text-white transition-transform duration-200 pointer-events-none"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square">
                      <path d="M12 4v16" />
                      <path d="M4 12h16" />
                    </svg>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WIDER TEAM */}
      <section className="bg-[var(--brand)] text-white py-[clamp(64px,8vw,112px)]">
        <div
          className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,48px)] grid gap-[clamp(40px,5vw,72px)] items-start"
          style={{ gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}
        >
          <div>
            <span className="flex items-center gap-[11px] font-mono font-medium text-[11px] tracking-[0.12em] uppercase text-white/70">
              <span className="w-[4px] h-[1em] bg-white" />
              The wider team
            </span>
            <h2 className="font-display font-[var(--kx-dw,700)] text-[clamp(23px,2.7vw,34px)] leading-[1.04] tracking-[-0.03em] mt-4 text-white">
              The team scales to meet the brief<span className="text-white">.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-[22px] text-[clamp(13px,1.26vw,14px)] leading-[1.6] text-white/85">
            <p>
              The four founders are supported by a talented team of production specialists. From experienced camera
              crews and producers to editors, colourists, motion graphics artists and sound designers, we have the
              expertise to deliver any video production brief in London and beyond.
            </p>
            <p>
              Whether it&apos;s a fast turnaround social media video, a multi-day corporate video production, or a
              documentary shoot on the other side of the world, the team scales to meet the brief. One location or
              ten, a single shoot day or six weeks in the field, the same standard applies across all of it.
            </p>
          </div>
        </div>
      </section>

      {/* METAPHOR STATEMENT */}
      <section className="bg-[#1A1A1A] text-white py-[clamp(44px,6vw,84px)]">
        <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,48px)]">
          <span className="inline-flex items-center gap-[11px] font-mono font-medium text-[12px] tracking-[0.12em] uppercase text-white/78">
            <span className="w-[4px] h-[1em] bg-white" />
            The name says it all
          </span>
          <p className="mt-[clamp(24px,3vw,36px)] font-display font-[var(--kx-dw,700)] text-[clamp(25px,3.6vw,49px)] leading-[1.02] tracking-[-0.035em] text-white">
            A klaxon cuts through the noise. It stops you in your tracks. That&apos;s what
            we make&hellip;
            <br />
            <br />
            <HighlightSweep bg="var(--brand)" color="#fff" trigger="element" className="whitespace-nowrap">
              Films that demand attention.
            </HighlightSweep>
          </p>
        </div>
      </section>
    </main>
  );
}
