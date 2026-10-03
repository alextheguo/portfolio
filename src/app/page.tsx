import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import VideoThumb from "@/components/VideoThumb";
import Reveal from "@/components/Reveal";
import ScrollMarquee from "@/components/ScrollMarquee";
import { ACTING, COMMERCIAL, NARRATIVE } from "@/data/projects";

export const metadata: Metadata = {
  title: "Alexander Guo | Director & Actor",
  description:
    "Alexander Guo is a director and actor based in Los Angeles working across narrative film, national commercials, and VFX.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const commercialFeatured = COMMERCIAL.slice(0, 3);
  const narrativeFeatured = NARRATIVE.slice(0, 3);

  return (
    <div>
      <Hero />

      <ScrollMarquee />

      <section className="px-6 pt-12 pb-16 sm:px-14">
        <Reveal className="mb-[22px] flex items-baseline justify-between border-b border-[#222121]/12 pb-[14px]">
          <h2 className="text-2xl font-extrabold tracking-[-1px] sm:text-[34px]">
            Commercial
          </h2>
          <Link
            href="/commercial"
            className="text-[11px] font-bold tracking-[1.5px] hover:opacity-70"
          >
            VIEW ALL ({COMMERCIAL.length}) →
          </Link>
        </Reveal>
        <div className="mb-[52px] grid grid-cols-1 gap-5 sm:grid-cols-3">
          {commercialFeatured.map((p, i) => (
            <Reveal key={p.id} delay={i * 120}>
              <VideoThumb id={p.id} title={p.title} />
              <div className="mt-3 text-xl font-extrabold tracking-[-0.5px]">{p.title}</div>
              {p.description && (
                <p className="mt-1.5 text-[13px] leading-[1.55] font-semibold text-[#222121]/75">
                  {p.description}
                </p>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal className="mb-[22px] flex items-baseline justify-between border-b border-[#222121]/12 pb-[14px]">
          <h2 className="text-2xl font-extrabold tracking-[-1px] sm:text-[34px]">
            Narrative
          </h2>
          <Link
            href="/narrative"
            className="text-[11px] font-bold tracking-[1.5px] hover:opacity-70"
          >
            VIEW ALL ({NARRATIVE.length}) →
          </Link>
        </Reveal>
        <div className="mb-[52px] grid grid-cols-1 gap-5 sm:grid-cols-3">
          {narrativeFeatured.map((p, i) => (
            <Reveal key={p.id} delay={i * 120}>
              <VideoThumb id={p.id} title={p.title} />
              <div className="mt-3 text-xl font-extrabold tracking-[-0.5px]">{p.title}</div>
              {p.description && (
                <p className="mt-1.5 text-[13px] leading-[1.55] font-semibold text-[#222121]/75">
                  {p.description}
                </p>
              )}
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 items-center gap-8 border-t border-[#222121]/12 pt-7 sm:grid-cols-[1fr_1.2fr]">
          <Reveal className="flex flex-col gap-3.5">
            <h2 className="text-2xl font-extrabold tracking-[-1px] sm:text-[34px]">Acting</h2>
            <Link
              href="/acting"
              className="text-[11px] font-bold tracking-[1.5px] hover:opacity-70"
            >
              WATCH ACTING REELS →
            </Link>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            <Reveal>
              <VideoThumb id={ACTING.dramatic.id} title={ACTING.dramatic.title} />
              <div className="mt-3 text-lg font-extrabold tracking-[-0.5px]">
                {ACTING.dramatic.title}
              </div>
            </Reveal>
            <Reveal delay={150}>
              <VideoThumb id={ACTING.comedic.id} title={ACTING.comedic.title} />
              <div className="mt-3 text-lg font-extrabold tracking-[-0.5px]">
                {ACTING.comedic.title}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
