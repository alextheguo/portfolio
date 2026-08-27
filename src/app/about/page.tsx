import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <div className="border-t border-[#222121]/12">
      <Header />

      <div className="px-6 py-8 sm:px-14 sm:py-8">
        <h1 className="font-black leading-[0.85] tracking-[-2px] text-[clamp(48px,11vw,120px)] sm:tracking-[-5px]">
          ABOUT
        </h1>
      </div>

      <div className="grid grid-cols-1 items-start gap-10 px-6 pb-16 sm:grid-cols-[420px_1fr] sm:gap-16 sm:px-14">
        <div className="aspect-[4/5] w-full max-w-[420px] overflow-hidden border border-[#222121]/20 bg-[#222121]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/headshot.jpg"
            alt="Alexander Guo"
            className="h-full w-full object-cover object-[50%_25%]"
          />
        </div>

        <div className="flex flex-col gap-9">
          <h2 className="max-w-[760px] text-2xl leading-[1.25] font-extrabold tracking-[-1px] sm:text-[34px]">
            Alexander Guo is a Chinese American filmmaker and actor based in Los Angeles.
          </h2>

          <div className="flex max-w-[680px] flex-col gap-[18px]">
            <p className="text-[15px] leading-[1.75] font-semibold text-[#222121]/75">
              With a background in sketch comedy, his work blends awkward humor and sharp wit
              with grounded sincerity, often living between comedy and drama. As a storyteller,
              he is drawn to deeply human moments within larger-than-life worlds. Whether set in
              the past, a cyberpunk city, or a fantastical world, his work centers on emotional
              truths that ground spectacle in something real. His goal is to tell intimate
              stories on a cinematic scale, where the epic and the human are inseparable.
            </p>
            <p className="text-[15px] leading-[1.75] font-semibold text-[#222121]/75">
              Alexander&apos;s work spans independent short films, national commercials, and VFX
              projects, including collaborations with Warner Bros., Netflix, and creators like
              Zach King. He has directed established talent such as Creed Bratton. He has acted
              in numerous short films and national commercials, including spots for Meta and
              Domino&apos;s, and is represented by the Daniel Hoff Agency.
            </p>
            <p className="text-[15px] leading-[1.75] font-semibold text-[#222121]/75">
              Outside of filmmaking he trains at the gym and previously competed in boxing for
              the University of Southern California. He is currently leading his first
              independent feature film.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-7 justify-start border-t border-[#222121]/12 pt-7 sm:w-fit">
            <div>
              <div className="text-[10px] font-bold tracking-[1.5px] text-[#222121]/50">
                EMAIL
              </div>
              <a
                href="mailto:alextheguo@gmail.com"
                className="mt-1.5 inline-block w-fit border-b-2 border-[#222121]/35 text-[15px] font-bold"
              >
                alextheguo@gmail.com
              </a>
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-[1.5px] text-[#222121]/50">
                INSTAGRAM
              </div>
              <a
                href="https://www.instagram.com/alextheguo/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 inline-block w-fit border-b-2 border-[#222121]/35 text-[15px] font-bold"
              >
                @alextheguo
              </a>
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-[1.5px] text-[#222121]/50">
                BASED
              </div>
              <div className="mt-1.5 text-[15px] font-bold">Los Angeles, CA</div>
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-[1.5px] text-[#222121]/50">
                REPRESENTATION
              </div>
              <div className="mt-1.5 text-[15px] font-bold">Daniel Hoff Agency</div>
              <div className="text-[13px] leading-[1.6] font-semibold text-[#222121]/65">
                5455 Wilshire Blvd, Ste 1100
                <br />
                Los Angeles, CA 90036
                <br />
                (323) 932-2500
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
