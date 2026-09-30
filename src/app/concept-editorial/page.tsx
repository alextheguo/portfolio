import type { Metadata } from "next";
import Link from "next/link";
import VideoThumb from "@/components/VideoThumb";
import DarkHero from "@/components/DarkHero";
import { ACTING, COMMERCIAL, NARRATIVE } from "@/data/projects";

export const metadata: Metadata = {
  title: "Concept: Dark Mode | Alexander Guo",
  robots: { index: false, follow: false },
};

export default function ConceptEditorialPage() {
  const commercialFeatured = COMMERCIAL.slice(0, 3);
  const narrativeFeatured = NARRATIVE.slice(0, 3);

  return (
    <div className="bg-[#111110] text-[#f2f0ea]">
      <div className="fixed top-4 left-1/2 z-50 -translate-x-1/2 rounded-full bg-[#ffd964] px-4 py-1.5 text-[11px] font-bold tracking-[1px] text-[#111110] shadow-lg">
        DESIGN CONCEPT, NOT LIVE &middot;{" "}
        <Link href="/" className="underline underline-offset-2">
          Back to site
        </Link>
      </div>

      <DarkHero />

      <section className="px-6 pt-12 pb-16 sm:px-14">
        <div className="mb-[22px] flex items-baseline justify-between border-b border-[#f2f0ea]/12 pb-[14px]">
          <h2 className="text-2xl font-extrabold tracking-[-1px] sm:text-[34px]">Commercial</h2>
          <Link
            href="/commercial"
            className="text-[11px] font-bold tracking-[1.5px] text-[#ffd964] hover:opacity-70"
          >
            VIEW ALL ({COMMERCIAL.length}) →
          </Link>
        </div>
        <div className="mb-[52px] grid grid-cols-1 gap-5 sm:grid-cols-3">
          {commercialFeatured.map((p) => (
            <div key={p.id}>
              <VideoThumb id={p.id} title={p.title} />
              <div className="mt-3 text-xl font-extrabold tracking-[-0.5px]">{p.title}</div>
            </div>
          ))}
        </div>

        <div className="mb-[22px] flex items-baseline justify-between border-b border-[#f2f0ea]/12 pb-[14px]">
          <h2 className="text-2xl font-extrabold tracking-[-1px] sm:text-[34px]">Narrative</h2>
          <Link
            href="/narrative"
            className="text-[11px] font-bold tracking-[1.5px] text-[#ffd964] hover:opacity-70"
          >
            VIEW ALL ({NARRATIVE.length}) →
          </Link>
        </div>
        <div className="mb-[52px] grid grid-cols-1 gap-5 sm:grid-cols-3">
          {narrativeFeatured.map((p) => (
            <div key={p.id}>
              <VideoThumb id={p.id} title={p.title} />
              <div className="mt-3 text-xl font-extrabold tracking-[-0.5px]">{p.title}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 items-center gap-8 border-t border-[#f2f0ea]/12 pt-7 sm:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-3.5">
            <h2 className="text-2xl font-extrabold tracking-[-1px] sm:text-[34px]">Acting</h2>
            <Link
              href="/acting"
              className="text-[11px] font-bold tracking-[1.5px] text-[#ffd964] hover:opacity-70"
            >
              WATCH ACTING REELS →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <VideoThumb id={ACTING.dramatic.id} title={ACTING.dramatic.title} />
              <div className="mt-3 text-lg font-extrabold tracking-[-0.5px]">
                {ACTING.dramatic.title}
              </div>
            </div>
            <div>
              <VideoThumb id={ACTING.comedic.id} title={ACTING.comedic.title} />
              <div className="mt-3 text-lg font-extrabold tracking-[-0.5px]">
                {ACTING.comedic.title}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
