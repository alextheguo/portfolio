import type { Metadata } from "next";
import Link from "next/link";
import { COMMERCIAL, NARRATIVE, youtubeThumb } from "@/data/projects";

export const metadata: Metadata = {
  title: "Concept: Dark Editorial | Alexander Guo",
  robots: { index: false, follow: false },
};

const SELECTED = [
  { ...NARRATIVE[0], index: "01", tag: "NARRATIVE" },
  { ...COMMERCIAL[0], index: "02", tag: "COMMERCIAL" },
  { ...NARRATIVE[2], index: "03", tag: "NARRATIVE" },
  { ...COMMERCIAL[3], index: "04", tag: "COMMERCIAL" },
];

export default function ConceptEditorialPage() {
  return (
    <div className="bg-[#0d0d0c] text-[#f2f0ea]">
      <div className="fixed top-4 left-1/2 z-50 -translate-x-1/2 rounded-full bg-[#ffd964] px-4 py-1.5 text-[11px] font-bold tracking-[1px] text-[#0d0d0c] shadow-lg">
        DESIGN CONCEPT, NOT LIVE &middot;{" "}
        <Link href="/" className="underline underline-offset-2">
          Back to site
        </Link>
      </div>

      <header className="flex items-center justify-between px-6 py-8 sm:px-14 sm:py-10">
        <span className="text-sm font-black tracking-[2px] text-[#ffd964]">A. GUO</span>
        <nav className="flex gap-8 text-[11px] font-bold tracking-[1.5px] text-[#f2f0ea]/60">
          <span className="text-[#ffd964]">WORK</span>
          <span>ABOUT</span>
          <span>CONTACT</span>
        </nav>
      </header>

      <section className="grid grid-cols-1 gap-10 px-6 pt-8 pb-24 sm:grid-cols-[1.1fr_0.9fr] sm:gap-6 sm:px-14 sm:pt-16">
        <div className="flex flex-col justify-center gap-8">
          <p className="font-mono text-[11px] tracking-[3px] text-[#ffd964]">
            DIRECTOR &amp; ACTOR / LOS ANGELES
          </p>
          <h1 className="max-w-xl text-[15vw] leading-[0.92] font-black tracking-[-2px] sm:text-[64px]">
            TELLING INTIMATE STORIES ON A CINEMATIC SCALE.
          </h1>
          <p className="max-w-md text-sm leading-[1.8] font-medium text-[#f2f0ea]/60">
            Alexander Guo is a director and actor whose work lives between comedy and drama,
            grounding larger-than-life worlds in emotional truth.
          </p>
          <div className="flex items-center gap-5">
            <div className="h-[3px] w-12 bg-[#ffd964]" />
            <span className="font-mono text-[11px] tracking-[2px] text-[#f2f0ea]/50">
              SCROLL TO EXPLORE
            </span>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#1a1a18] sm:aspect-auto">
          <img
            src="/headshot.jpg"
            alt="Alexander Guo"
            className="h-full w-full object-cover object-[50%_20%] grayscale contrast-[1.15]"
          />
          <div className="absolute inset-0 bg-[#ffd964] mix-blend-color opacity-[0.16]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0c]/70 via-transparent to-transparent" />
        </div>
      </section>

      <section className="border-t border-[#f2f0ea]/10 px-6 py-16 sm:px-14 sm:py-24">
        <div className="mb-14 flex items-end justify-between">
          <h2 className="text-3xl font-black tracking-[-1px] sm:text-5xl">Selected Work</h2>
          <span className="hidden font-mono text-[11px] tracking-[2px] text-[#f2f0ea]/40 sm:block">
            {SELECTED.length} PROJECTS
          </span>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2">
          {SELECTED.map((project) => (
            <div key={project.id} className="group">
              <div className="relative aspect-video w-full overflow-hidden bg-[#1a1a18]">
                <img
                  src={youtubeThumb(project.id)}
                  alt={project.title}
                  className="h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[#ffd964] mix-blend-color opacity-[0.14]" />
              </div>
              <div className="mt-4 flex items-baseline justify-between border-b border-[#f2f0ea]/10 pb-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-[#ffd964]">{project.index}</span>
                  <span className="text-xl font-extrabold tracking-[-0.5px]">
                    {project.title}
                  </span>
                </div>
                <span className="font-mono text-[10px] tracking-[1.5px] text-[#f2f0ea]/40">
                  {project.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-wrap gap-x-16 gap-y-8 border-t border-[#f2f0ea]/10 px-6 py-14 sm:px-14">
        <div>
          <div className="font-mono text-[10px] tracking-[1.5px] text-[#f2f0ea]/40">BASED</div>
          <div className="mt-1 text-sm font-bold">Los Angeles, CA</div>
        </div>
        <div>
          <div className="font-mono text-[10px] tracking-[1.5px] text-[#f2f0ea]/40">
            REPRESENTATION
          </div>
          <div className="mt-1 text-sm font-bold">Daniel Hoff Agency</div>
        </div>
        <div>
          <div className="font-mono text-[10px] tracking-[1.5px] text-[#f2f0ea]/40">CONTACT</div>
          <a
            href="mailto:alextheguo@gmail.com"
            className="mt-1 block w-fit border-b border-[#ffd964]/40 text-sm font-bold text-[#ffd964]"
          >
            alextheguo@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
}
