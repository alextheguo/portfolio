"use client";

import Link from "next/link";
import DustParticles from "@/components/DustParticles";
import { useVideoLightbox } from "@/components/VideoLightboxProvider";
import { HOME_REEL_ID } from "@/data/projects";

const HERO_VIDEO_SRC = "/hero-reel.mp4";

const NAV_LINKS = [
  { href: "/", label: "REEL" },
  { href: "/commercial", label: "COMMERCIAL" },
  { href: "/narrative", label: "NARRATIVE" },
  { href: "/acting", label: "ACTING" },
  { href: "/about", label: "ABOUT" },
];

export default function DarkHero() {
  const { openVideo } = useVideoLightbox();

  return (
    <section className="relative flex h-[900px] max-h-[100vh] flex-col overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: "brightness(0.6)" }}
        src={HERO_VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(17,17,16,.55) 0%, rgba(17,17,16,.35) 45%, rgba(17,17,16,.95) 100%)",
        }}
      />
      <DustParticles />

      <div className="relative z-10 flex items-center justify-between px-6 py-8 sm:px-14 sm:py-10">
        <Link href="/" className="text-sm font-black tracking-[2px] text-[#ffd964]">
          A. GUO
        </Link>
        <nav className="hidden gap-9 sm:flex">
          {NAV_LINKS.map((link) => (
            <span
              key={link.href}
              className="text-xs font-bold tracking-[1.5px] text-[#f2f0ea]/60"
            >
              {link.label}
            </span>
          ))}
        </nav>
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-center gap-6 px-6 sm:px-14">
        <h1 className="font-black leading-[0.82] tracking-[-4px] text-[clamp(52px,13vw,190px)] text-[#ffd964] sm:tracking-[-8px]">
          <span className="block">ALEXANDER</span>
          <span className="block">GUO</span>
        </h1>
        <div className="flex items-center gap-5">
          <div className="h-1 w-16 bg-[#ffd964]" />
          <p className="text-[13px] font-bold tracking-[2px] text-[#f2f0ea]/70 sm:text-[15px] sm:tracking-[3px]">
            DIRECTOR &amp; ACTOR
          </p>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-14 sm:py-10">
        <button
          type="button"
          onClick={() =>
            openVideo({
              src: HOME_REEL_ID,
              title: "Alexander Guo 2026 Director Reel",
              type: "youtube",
            })
          }
          className="flex items-center gap-4 text-left"
        >
          <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#ffd964] text-[#111110]">
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="currentColor"
              className="ml-0.5"
              aria-hidden="true"
            >
              <path d="M0 0L14 8L0 16V0Z" />
            </svg>
          </span>
          <span className="text-xs font-bold tracking-[2px] text-[#f2f0ea]/70">
            PLAY REEL WITH SOUND
          </span>
        </button>
        <div className="hidden font-mono text-[10px] font-semibold tracking-[1px] text-[#f2f0ea]/70 sm:block">
          SCROLL FOR SELECTED WORK ↓
        </div>
      </div>
    </section>
  );
}
