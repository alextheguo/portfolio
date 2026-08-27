import Header from "@/components/Header";
import ThumbPlayer from "@/components/ThumbPlayer";
import { COMMERCIAL } from "@/data/projects";

export default function CommercialPage() {
  const [latest, ...rest] = COMMERCIAL;

  return (
    <div className="border-t border-[#222121]/12 pb-16">
      <Header />

      <div className="flex flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-end sm:px-14 sm:py-8">
        <h1 className="font-black leading-[0.85] tracking-[-2px] text-[clamp(48px,11vw,120px)] sm:tracking-[-5px]">
          COMMERCIAL
        </h1>
        <p className="max-w-[420px] text-sm font-semibold leading-[1.65] text-[#222121]/70 sm:text-right">
          I treat every commercial like a short film. Even in thirty seconds there&apos;s room
          for a character, a turn, and a reason to keep watching, so I build each spot around a
          story people actually want to follow, not just a product on screen.
        </p>
      </div>

      <div className="px-6 sm:px-14">
        <div className="mb-4">
          <ThumbPlayer id={latest.id} title={latest.title} playing />
        </div>
        <div className="mb-6 flex items-baseline justify-between border-b border-[#222121]/12 pb-5">
          <h2 className="text-2xl font-extrabold tracking-[-1px] sm:text-[44px] sm:tracking-[-1.5px]">
            {latest.title}
          </h2>
          <div className="font-mono text-[11px] font-bold">LATEST</div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((p) => (
            <div key={p.id}>
              <ThumbPlayer id={p.id} title={p.title} />
              <div className="mt-3 text-[17px] font-extrabold tracking-[-0.5px]">{p.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
