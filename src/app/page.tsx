import Image from "next/image";
import Link from "next/link";

const NAV = [
  { href: "/reel", label: "REEL" },
  { href: "/narrative", label: "NARRATIVE" },
  { href: "/commercial", label: "COMMERCIAL" },
  { href: "/acting", label: "ACTING" },
  { href: "/about", label: "ABOUT" },
];

const WORK = [
  { title: "USB", category: "NARRATIVE", youtubeId: "7AV_8Ull09g" },
  { title: "Veins", category: "NARRATIVE", youtubeId: "R-of3WR9EVg" },
  { title: "Criterion", category: "NARRATIVE", youtubeId: "XAHEjHXXmYo" },
  {
    title: "Orange County Film Festival Nomination Film",
    category: "NARRATIVE",
    youtubeId: "UratXCFXYGw",
  },
  { title: "Best of Three", category: "NARRATIVE", youtubeId: "tQun-GQBrXk" },
  { title: "Free Ice Cream", category: "NARRATIVE", youtubeId: "aw1uku7Yz9c" },
  { title: "Dear Anxiety", category: "NARRATIVE", youtubeId: "UohfebzTJLs" },
  { title: "A Little Nudge — Blinkko", category: "COMMERCIAL", youtubeId: "aIQLkbTeDBg" },
  {
    title: "TARS' First Day — Hypercard Expense",
    category: "COMMERCIAL",
    youtubeId: "MNLG_Ar2ujQ",
  },
  {
    title: "All the Time in the World — Truffle Pig",
    category: "COMMERCIAL",
    youtubeId: "_Sr9eyDxCcM",
  },
  { title: "Hot Nerd — Ditto AI", category: "COMMERCIAL", youtubeId: "QVqXPH-w6Zk" },
  {
    title: "Find Your Pair — Raincheck",
    category: "COMMERCIAL",
    youtubeId: "FzzhmVvXbpA",
  },
  {
    title: "Maruchan Flamin' Hot — Commercial Spot",
    category: "COMMERCIAL",
    youtubeId: "Opp97cZHprc",
  },
  {
    title: "Find Your Pair — Sublimity",
    category: "COMMERCIAL",
    youtubeId: "QQAs6t2i9LM",
  },
  { title: "Find Your Pair — Records", category: "COMMERCIAL", youtubeId: "f2MCBnZUSPc" },
];

export default function Home() {
  return (
    <div className="bg-[#222121] text-white">
      {/* HERO */}
      <section className="flex min-h-[900px] flex-col">
        <header className="flex items-center justify-between px-6 py-8 sm:px-14 sm:py-10">
          <Link href="/" className="font-[family-name:var(--font-body)] text-[15px] font-black tracking-[1px]">
            AG
          </Link>
          <nav className="hidden gap-9 sm:flex">
            {NAV.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-body)] text-xs font-bold tracking-[1.5px] text-white/60 transition-colors duration-150 hover:text-[#ffd964]"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/contact-1"
              className="font-[family-name:var(--font-body)] text-xs font-bold tracking-[1.5px] text-white/60 transition-colors duration-150 hover:text-[#ffd964]"
            >
              CONTACT
            </a>
          </nav>
        </header>

        <div className="flex flex-1 flex-col justify-center gap-6 px-6 sm:px-14">
          <h1 className="font-[family-name:var(--font-body)] font-black leading-[0.82] tracking-[-4px] text-[clamp(52px,13vw,190px)] sm:tracking-[-8px]">
            <span className="block">ALEXANDER</span>
            <span className="block">GUO</span>
          </h1>
          <div className="flex items-center gap-5">
            <div className="h-1 w-16 bg-[#ffd964]" />
            <p className="font-[family-name:var(--font-body)] text-[13px] font-bold tracking-[2px] text-white/55 sm:text-[15px] sm:tracking-[3px]">
              DIRECTOR — SCI-FI / ACTION / COMEDY / DRAMA
            </p>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="px-6 pb-16 sm:px-14">
        {WORK.map((project) => (
          <a
            key={project.youtubeId}
            href={`https://www.youtube.com/watch?v=${project.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="grid grid-cols-[100px_1fr_auto] items-center gap-4 border-t border-white/[0.12] py-4 transition-colors duration-150 hover:bg-white/[0.03] sm:grid-cols-[220px_1fr_90px] sm:gap-8 sm:py-[26px]"
          >
            <div className="relative aspect-video overflow-hidden bg-[#333]">
              <Image
                src={`https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="font-[family-name:var(--font-body)] font-extrabold tracking-[-1.5px] text-[clamp(20px,3.5vw,44px)]">
              {project.title}
            </div>
            <div className="hidden font-[family-name:var(--font-body)] text-xs font-bold tracking-wide text-[#ffd964] sm:block sm:text-right">
              {project.category}
            </div>
          </a>
        ))}
      </section>

      {/* ABOUT / CONTACT */}
      <section className="flex min-h-[700px] flex-col justify-center gap-11 border-t border-white/[0.12] px-6 py-16 sm:px-14">
        <h2 className="max-w-3xl font-[family-name:var(--font-body)] font-extrabold leading-[1.2] tracking-[-1px] text-[clamp(28px,4vw,46px)]">
          Bold stories across genre. Quiet on the page, loud on screen.
        </h2>
        <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
          <div className="flex flex-col gap-2.5">
            <div className="font-[family-name:var(--font-body)] text-sm font-bold">
              hello@alexguofilm.com
            </div>
            <div className="font-[family-name:var(--font-body)] text-xs font-semibold text-white/50">
              Represented by — Daniel Hoff Agency
            </div>
            <div className="font-[family-name:var(--font-body)] text-xs font-semibold text-white/50">
              Instagram — @alexguofilm
            </div>
          </div>
          <div className="relative aspect-[4/5] w-[220px] overflow-hidden bg-[#333]">
            <Image src="/headshot.jpg" alt="Alexander Guo" fill className="object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
