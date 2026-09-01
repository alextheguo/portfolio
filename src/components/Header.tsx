"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "REEL" },
  { href: "/commercial", label: "COMMERCIAL" },
  { href: "/narrative", label: "NARRATIVE" },
  { href: "/acting", label: "ACTING" },
  { href: "/about", label: "ABOUT" },
];

export default function Header({ padded = true }: { padded?: boolean }) {
  const pathname = usePathname();

  return (
    <div
      className={`relative z-10 flex items-center justify-between ${
        padded ? "px-6 py-8 sm:px-14 sm:py-10" : "py-8 sm:py-10"
      }`}
    >
      <Link href="/" className="block shrink-0">
        <Image src="/logo-mark.png" alt="Alexander Guo" width={44} height={44} priority />
      </Link>
      <nav className="flex gap-5 sm:gap-9">
        {NAV_LINKS.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[11px] sm:text-xs font-bold tracking-[1.5px] transition-colors duration-150 hover:text-[#222121] ${
                active
                  ? "text-[#222121] border-b-2 border-[#222121] pb-[3px]"
                  : "text-[#222121]/60"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
