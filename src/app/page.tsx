import Link from "next/link";

const LINKS = [
  { href: "/reel", label: "Reel" },
  { href: "/narrative", label: "Narrative" },
  { href: "/commercial", label: "Commercial" },
  { href: "/acting", label: "Acting" },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-24 text-center">
      <div>
        <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-6xl font-medium tracking-tight">
          ALEXANDER GUO
        </h1>
        <p className="mt-2 font-[family-name:var(--font-body)] text-sm sm:text-base uppercase tracking-[0.3em] opacity-70">
          Director
        </p>
      </div>

      <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-[family-name:var(--font-body)] text-xs sm:text-sm uppercase tracking-[0.15em]">
        {LINKS.map((link) => (
          <Link key={link.href} href={link.href} className="transition-opacity hover:opacity-60">
            {link.label}
          </Link>
        ))}
      </nav>
    </main>
  );
}
