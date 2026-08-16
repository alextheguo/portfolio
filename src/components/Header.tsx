"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/reel", label: "Reel" },
  { href: "/narrative", label: "Narrative" },
  { href: "/commercial", label: "Commercial" },
  { href: "/acting", label: "Acting" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 sm:px-10 bg-[var(--background)]/90 backdrop-blur-sm">
      <Link href="/" className="relative h-8 w-32 shrink-0" onClick={() => setOpen(false)}>
        <Image
          src="/logo.png"
          alt="Alexander Guo"
          fill
          className="object-contain object-left"
          priority
        />
      </Link>

      <nav className="hidden md:flex items-center gap-8 font-[family-name:var(--font-body)] text-xs tracking-[0.15em] uppercase">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`transition-opacity hover:opacity-60 ${
              pathname === link.href ? "opacity-100" : "opacity-70"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <button
        className="md:hidden text-xs uppercase tracking-[0.15em]"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close Menu" : "Open Menu"}
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && (
        <nav className="absolute top-full left-0 right-0 flex flex-col items-center gap-6 bg-[var(--background)] py-8 md:hidden font-[family-name:var(--font-body)] text-sm tracking-[0.15em] uppercase">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
