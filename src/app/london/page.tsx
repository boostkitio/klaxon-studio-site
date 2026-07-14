import Image from "next/image";
import Label from "@/components/ui/Label";
import { ButtonLink } from "@/components/ui/Button";
import FaqAccordion from "@/components/FaqAccordion";
import { HighlightSweep } from "@/components/ScrollHighlight";
import { londonData } from "@/lib/content";
import { ogFor } from "@/lib/site";

export const metadata = ogFor("Video Production Company London", "Klaxon Studio is a video production company in Bermondsey, London, producing brand films, corporate video and social content across the city.", "/london");

export default function LondonPage() {
  return (
    <main>
      <section className="relative bg-[#1A1A1A] text-white min-h-[clamp(560px,82vh,820px)] -mt-[84px] flex items-end overflow-hidden">
        <video
          src="/uploads/London-Landing-Loop_2_1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-55"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(180deg, rgba(26,26,26,0.35) 0%, rgba(26,26,26,0.2) 45%, rgba(26,26,26,0.9) 100%)" }}
        />
        <div className="relative max-w-[1280px] mx-auto px-[clamp(20px,5vw,48px)] pt-[clamp(40px,7vw,96px)] pb-[clamp(40px,7vw,96px)] w-full">
          <div className="mb-[clamp(20px,3vw,34px)] text-white/78">
            <Label tone="on-dark">Klaxon Studio, Bermondsey, London</Label>
          </div>
          <h1 className="font-display font-[var(--kx-dw,700)] text-[clamp(31px,5.04vw,65px)] leading-[0.97] tracking-[-0.04em] max-w-[16ch] text-white">
            Video production built for one of the world&apos;s{" "}
            <HighlightSweep bg="var(--brand)" color="#fff" trigger="page">
              most demanding cities.
            </HighlightSweep>
          </h1>
          <p className="mt-[clamp(22px,3vw,30px)] max-w-[52ch] text-[clamp(14px,1.3vw,15px)] leading-[1.55] text-white/82">
            {londonData.lead}
          </p>
          <div className="flex flex-wrap gap-[14px] mt-[clamp(28px,4vw,40px)]">
            <ButtonLink href="/work" variant="light" icon={false}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 4l14 8-14 8z" />
              </svg>
              Play the showreel
            </ButtonLink>
            <ButtonLink href="/work" variant="ghost-light">
              See the work
            </ButtonLink>
            <ButtonLink href="/contact" variant="primary">
              Drop us a line
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="pt-[clamp(64px,8vw,112px)] pb-[clamp(40px,5vw,64px)]">
        <div
          className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,48px)] grid gap-[clamp(40px,5vw,72px)] items-start"
          style={{ gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}
        >
          <div className="relative self-stretch w-full overflow-hidden bg-[#1A1A1A] min-h-[320px]">
            <Image src="/uploads/WhatsApp Image 2026-07-10 at 11.57.29 (1).webp" alt="London production still" fill sizes="50vw" className="object-cover" />
          </div>
          <div className="flex flex-col gap-[22px] text-[clamp(14px,1.32vw,15.5px)] leading-[1.64] text-[var(--text-secondary)]">
            {londonData.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-[clamp(40px,5vw,64px)]">
        <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,48px)]">
          <span className="flex items-center gap-[11px] font-mono font-medium text-[11px] tracking-[0.12em] uppercase text-[var(--text-muted)] mb-[clamp(18px,2.2vw,26px)]">
            <span className="w-[4px] h-[1em] bg-[var(--brand)]" />
            What we make in London
          </span>
          <div className="flex flex-wrap gap-[10px]">
            {londonData.includes.map((inc) => (
              <span
                key={inc}
                className="inline-flex items-center px-[14px] py-[9px] border border-[var(--border-subtle)] font-mono font-medium text-[11px] tracking-[0.06em] uppercase text-[var(--text-secondary)]"
              >
                {inc}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section data-faq-end="1" className="bg-[var(--brand)] text-white pt-[clamp(56px,7vw,96px)] pb-[clamp(64px,8vw,112px)]">
        <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,48px)]">
          <span className="flex items-center gap-[11px] font-mono font-medium text-[11px] tracking-[0.12em] uppercase text-white mb-[clamp(24px,3vw,38px)]">
            <span className="w-[4px] h-[1em] bg-white" />
            London FAQs
          </span>
          <FaqAccordion items={londonData.faqs} />
        </div>
      </section>
    </main>
  );
}
