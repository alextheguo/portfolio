"use client";

import Header from "@/components/Header";
import DustParticles from "@/components/DustParticles";
import { useVideoLightbox } from "@/components/VideoLightboxProvider";
import { HOME_REEL_ID } from "@/data/projects";

const HERO_VIDEO_SRC = "/hero-reel.mp4";

export default function Hero() {
  const { openVideo } = useVideoLightbox();

  return (
    <section className="relative flex h-[900px] max-h-[100vh] flex-col overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: "blur(2px)", transform: "scale(1.02)" }}
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
            "linear-gradient(180deg, rgba(217,217,217,.6) 0%, rgba(217,217,217,.4) 45%, rgba(217,217,217,.95) 100%)",
        }}
      />
      <DustParticles />

      <Header />

      <div className="relative z-10 flex flex-1 flex-col justify-center gap-6 px-6 sm:px-14">
        <h1 className="font-black leading-[0.82] tracking-[-4px] text-[clamp(52px,13vw,190px)] sm:tracking-[-8px]">
          <span className="block">ALEXANDER</span>
          <span className="block">GUO</span>
        </h1>
        <div className="flex items-center gap-5">
          <div className="h-1 w-16 bg-[#222121]" />
          <p className="text-[13px] font-bold tracking-[2px] text-[#222121]/70 sm:text-[15px] sm:tracking-[3px]">
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
          <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#222121] text-[#d9d9d9]">
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
          <span className="text-xs font-bold tracking-[2px] text-[#222121]/70">
            PLAY REEL WITH SOUND
          </span>
        </button>
        <div className="hidden font-mono text-[10px] font-semibold tracking-[1px] text-[#222121]/70 sm:block">
          SCROLL FOR SELECTED WORK ↓
        </div>
      </div>
    </section>
  );
}
