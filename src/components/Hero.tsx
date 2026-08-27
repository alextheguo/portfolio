"use client";

import { useState } from "react";
import Header from "@/components/Header";
import { HOME_REEL_ID } from "@/data/projects";

export default function Hero() {
  const [withSound, setWithSound] = useState(false);

  const src = withSound
    ? `https://www.youtube.com/embed/${HOME_REEL_ID}?autoplay=1&controls=1&rel=0&modestbranding=1&playsinline=1`
    : `https://www.youtube.com/embed/${HOME_REEL_ID}?autoplay=1&mute=1&loop=1&playlist=${HOME_REEL_ID}&controls=0&modestbranding=1&rel=0&playsinline=1`;

  return (
    <section className="relative flex h-[900px] max-h-[100vh] flex-col overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 aspect-video h-full min-h-full w-auto min-w-full -translate-x-1/2 -translate-y-1/2">
          <iframe
            src={src}
            className="block h-full w-full border-0"
            style={{ pointerEvents: withSound ? "auto" : "none" }}
            allow="autoplay; encrypted-media"
            title="Directing reel"
          />
        </div>
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,217,100,.55) 0%, rgba(255,217,100,.15) 45%, rgba(255,217,100,.94) 100%)",
        }}
      />

      <Header />

      <div className="relative z-10 flex flex-1 flex-col justify-center gap-6 px-6 sm:px-14">
        <h1 className="font-black leading-[0.82] tracking-[-4px] text-[clamp(52px,13vw,190px)] sm:tracking-[-8px]">
          <span className="block">ALEXANDER</span>
          <span className="block">GUO</span>
        </h1>
        <div className="flex items-center gap-5">
          <div className="h-1 w-16 bg-[#222121]" />
          <p className="text-[13px] font-bold tracking-[2px] text-[#222121]/55 sm:text-[15px] sm:tracking-[3px]">
            DIRECTOR &amp; ACTOR
          </p>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-14 sm:py-10">
        {withSound ? (
          <div />
        ) : (
          <button type="button" onClick={() => setWithSound(true)} className="flex items-center gap-4 text-left">
            <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#222121] text-[#ffd964]">
              <span className="text-[13px] font-black">▶</span>
            </span>
            <span className="text-xs font-bold tracking-[2px] text-[#222121]/70">
              PLAY REEL WITH SOUND
            </span>
          </button>
        )}
        <div className="hidden font-mono text-[10px] font-semibold tracking-[1px] text-[#222121]/40 sm:block">
          SCROLL FOR SELECTED WORK ↓
        </div>
      </div>
    </section>
  );
}
