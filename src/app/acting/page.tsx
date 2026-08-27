import Header from "@/components/Header";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { ACTING } from "@/data/projects";

export default function ActingPage() {
  return (
    <div className="border-t border-[#222121]/12 px-6 pb-[72px] sm:px-14">
      <Header padded={false} />

      <h1 className="mb-7 font-black leading-[0.85] tracking-[-2px] text-[clamp(48px,11vw,120px)] sm:tracking-[-5px]">
        ACTING
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <YouTubeEmbed id={ACTING.dramatic.id} title={ACTING.dramatic.title} />
          <div className="mt-3.5 flex items-baseline justify-between">
            <div className="text-xl font-extrabold tracking-[-0.5px] sm:text-[30px] sm:tracking-[-1px]">
              {ACTING.dramatic.title}
            </div>
            <div className="font-mono text-[11px] font-bold">{ACTING.dramatic.meta}</div>
          </div>
        </div>
        <div>
          <YouTubeEmbed id={ACTING.comedic.id} title={ACTING.comedic.title} />
          <div className="mt-3.5 flex items-baseline justify-between">
            <div className="text-xl font-extrabold tracking-[-0.5px] sm:text-[30px] sm:tracking-[-1px]">
              {ACTING.comedic.title}
            </div>
            <div className="font-mono text-[11px] font-bold">{ACTING.comedic.meta}</div>
          </div>
        </div>
      </div>

      <div className="mt-7 flex flex-wrap gap-8 border-t border-[#222121]/12 pt-7 sm:gap-14">
        <div>
          <div className="text-[10px] font-bold tracking-[1.5px]">REELS</div>
          <div className="text-[15px] font-bold">Dramatic + Comedic</div>
        </div>
        <div>
          <div className="text-[10px] font-bold tracking-[1.5px]">UPDATED</div>
          <div className="text-[15px] font-bold">2026</div>
        </div>
        <div>
          <div className="text-[10px] font-bold tracking-[1.5px]">UNION</div>
          <div className="text-[15px] font-bold">SAG-AFTRA eligible</div>
        </div>
        <div>
          <div className="text-[10px] font-bold tracking-[1.5px]">BASED</div>
          <div className="text-[15px] font-bold">Los Angeles</div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 border-t border-[#222121]/12 pt-7 sm:grid-cols-[auto_1fr] sm:gap-10">
        <div className="pt-1 text-[10px] font-bold tracking-[1.5px]">REPRESENTATION</div>
        <div>
          <div className="text-xl font-extrabold tracking-[-0.4px]">Daniel Hoff Agency</div>
          <div className="mt-1.5 text-[13px] leading-[1.7] font-semibold text-[#222121]/70">
            5455 Wilshire Blvd, Ste 1100 · Los Angeles, CA 90036 · (323) 932-2500 ·
            danielhoffagency.com
          </div>
        </div>
      </div>
    </div>
  );
}
