import Header from "@/components/Header";
import ThumbPlayer from "@/components/ThumbPlayer";
import { NARRATIVE } from "@/data/projects";

export default function NarrativePage() {
  return (
    <div className="border-t border-[#222121]/12 pb-16">
      <Header />

      <div className="flex flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-end sm:px-14 sm:py-8">
        <h1 className="font-black leading-[0.85] tracking-[-2px] text-[clamp(48px,11vw,120px)] sm:tracking-[-5px]">
          NARRATIVE
        </h1>
        <p className="max-w-[420px] text-sm font-semibold leading-[1.65] text-[#222121]/70 sm:text-right">
          Short films and clips from short films.
        </p>
      </div>

      <div className="px-6 sm:px-14">
        {NARRATIVE.map((p, i) => (
          <div
            key={p.id}
            className="grid grid-cols-[120px_1fr] items-center gap-4 border-t border-[#222121]/12 py-5 sm:grid-cols-[340px_1fr_120px] sm:gap-9 sm:py-[26px]"
          >
            <div className="col-span-2 sm:col-span-1">
              <ThumbPlayer id={p.id} title={p.title} playing={i === 0} />
            </div>
            <div className="text-2xl font-extrabold tracking-[-1px] sm:text-[44px] sm:tracking-[-1.5px]">
              {p.title}
            </div>
            <div className="hidden font-mono text-xs font-bold sm:block sm:text-right">
              {i === 0 ? "LATEST" : "PLAY →"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
