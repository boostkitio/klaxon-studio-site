import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import SiteChrome from "@/components/SiteChrome";

// Unmatched URLs render against the root layout, which is bare, so the 404
// page opts into the site chrome itself.
export default function NotFound() {
  return (
    <SiteChrome>
      <main>
        <section className="bg-[var(--brand)] text-white pt-[clamp(96px,12vw,160px)] pb-[clamp(80px,10vw,140px)]">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,48px)]">
            <span className="inline-flex items-center gap-[11px] font-mono font-medium text-[12px] tracking-[0.12em] uppercase text-white mb-[clamp(28px,4vw,44px)]">
              <span className="w-[4px] h-[1em] bg-white" />
              404
            </span>
            <h1 className="font-display font-[var(--kx-dw,700)] text-[clamp(31px,4.5vw,61px)] leading-[0.98] tracking-[-0.04em] max-w-[18ch] text-white">
              This scene didn&apos;t make the final cut.
            </h1>
            <p className="mt-[clamp(22px,3vw,30px)] max-w-[50ch] text-[clamp(14px,1.3vw,15px)] leading-[1.6] text-white/85">
              The page you&apos;re looking for has been moved, renamed or never existed. Try the homepage, or have a
              look at the work instead.
            </p>
            <div className="flex flex-wrap gap-[14px] mt-[clamp(28px,4vw,40px)]">
              <ButtonLink href="/" variant="light">
                Back to the homepage
              </ButtonLink>
              <ButtonLink href="/work" variant="ghost-light">
                See the work
              </ButtonLink>
            </div>
            <p className="mt-[clamp(28px,4vw,40px)] text-[13px] text-white/70">
              Still stuck?{" "}
              <Link href="/contact" className="underline text-white">
                Get in touch
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
