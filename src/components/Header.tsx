"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "REEL" },
  { href: "/commercial", label: "COMMERCIAL" },
  { href: "/narrative", label: "NARRATIVE" },
  { href: "/acting", label: "ACTING" },
  { href: "/about", label: "ABOUT" },
];

export default function Header({ padded = true }: { padded?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-20">
      <div
        className={`relative z-10 flex items-center justify-between ${
          padded ? "px-6 py-8 sm:px-14 sm:py-10" : "py-8 sm:py-10"
        }`}
      >
        <Link href="/" className="intro-logo block shrink-0" onClick={() => setOpen(false)}>
          <Image src="/logo-mark.png" alt="Alexander Guo" width={44} height={44} priority />
        </Link>

        <nav className="hidden sm:flex sm:gap-9">
          {NAV_LINKS.map((link, i) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{ "--i": i } as React.CSSProperties}
                className={`intro-nav group relative pb-[3px] text-xs font-bold tracking-[1.5px] transition-colors duration-150 hover:text-[#222121] ${
                  active ? "text-[#222121]" : "text-[#222121]/70"
                }`}
              >
                {link.label}
                <span
                  className={`absolute right-0 bottom-0 left-0 h-[2px] origin-left scale-x-0 bg-[#222121] transition-transform duration-300 ease-out group-hover:scale-x-100 ${
                    active ? "scale-x-100" : ""
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="intro-nav flex h-9 w-9 flex-col items-center justify-center gap-[5px] sm:hidden"
        >
          <span
            className={`h-[2px] w-6 bg-[#222121] transition-transform duration-200 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-[#222121] transition-transform duration-200 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="menu-enter fixed inset-0 z-0 flex flex-col justify-center gap-1 bg-[#ffd964]/35 px-6 pt-20 backdrop-blur-xl sm:hidden">
          {NAV_LINKS.map((link, i) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{ "--i": i } as React.CSSProperties}
                className={`menu-link py-2 text-[40px] leading-[1.1] font-black tracking-[-1.5px] ${
                  active ? "text-[#222121]" : "text-[#222121]/75"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </div>
  );
}
