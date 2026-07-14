import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/Button";
import { workAll } from "@/lib/content";

export function generateStaticParams() {
  return workAll.map((p) => ({ id: p.id }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const proj = workAll.find((p) => p.id === id);
  if (!proj) notFound();

  const vimeoSrc = `https://player.vimeo.com/video/${proj.vimeo}?${proj.vimeoHash ? `h=${proj.vimeoHash}&` : ""}title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`;

  return (
    <main>
      <section className="pt-[clamp(48px,6vw,84px)] pb-[clamp(28px,3.4vw,40px)]">
        <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,48px)]">
          <Link
            href="/work"
            className="inline-flex items-center gap-[9px] font-mono font-medium text-[10px] tracking-[0.12em] uppercase text-[var(--text-muted)] hover:text-[var(--brand)] transition-colors mb-[clamp(28px,4vw,44px)]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square">
              <path d="M20 12H5" />
              <path d="M11 18l-6-6 6-6" />
            </svg>
            All work
          </Link>
          <span className="flex items-center gap-[11px] font-mono font-medium text-[11px] tracking-[0.12em] uppercase text-[var(--text-muted)] mb-[clamp(16px,2.2vw,24px)]">
            <span className="w-[4px] h-[1em] bg-[var(--brand)]" />
            {proj.title}, {proj.sector}
          </span>
          <h1 className="font-display font-[var(--kx-dw,700)] text-[clamp(31px,4.5vw,61px)] leading-[0.98] tracking-[-0.04em] max-w-[18ch]">
            {proj.client}
            <span className="text-[var(--brand)]">.</span>
          </h1>
        </div>
      </section>

      <section className="pb-[clamp(40px,5vw,64px)]">
        <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,48px)]">
          <div className="relative w-full aspect-video overflow-hidden bg-black">
            {proj.vimeo ? (
              <iframe
                src={vimeoSrc}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title={proj.client}
                className="absolute inset-0 w-full h-full border-none"
              />
            ) : (
              <video src={proj.video} controls playsInline className="absolute inset-0 w-full h-full object-contain bg-black" />
            )}
          </div>
        </div>
      </section>

      <section className="pb-[clamp(72px,9vw,120px)]">
        <div
          className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,48px)] grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-[clamp(40px,5vw,72px)] items-start"
        >
          <div className="min-w-0">
            <p className="font-display font-[var(--kx-dw,700)] text-[clamp(20px,2.4vw,30px)] leading-[1.16] tracking-[-0.025em]">
              {proj.lead}
            </p>
            <div className="flex flex-wrap gap-2 my-[clamp(28px,3.4vw,40px)]">
              {[...new Set([...proj.cat, proj.sector])].map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center px-[12px] py-[7px] border border-[var(--border-subtle)] font-mono font-medium text-[10px] tracking-[0.1em] uppercase text-[var(--text-secondary)]"
                >
                  {c}
                </span>
              ))}
            </div>
            <ButtonLink href="/contact" variant="primary">
              Start a project like this
            </ButtonLink>
          </div>
          <div className="min-w-0 flex flex-col gap-[22px] text-[clamp(14px,1.32vw,15.5px)] leading-[1.64] text-[var(--text-secondary)]">
            {proj.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
