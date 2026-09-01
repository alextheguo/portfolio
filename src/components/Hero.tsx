"use client";

import Header from "@/components/Header";
import DustParticles from "@/components/DustParticles";
import { useVideoLightbox } from "@/components/VideoLightboxProvider";

const HERO_VIDEO_SRC = "/hero-reel.mp4";

export default function Hero() {
  const { openVideo } = useVideoLightbox();

  return (
    <section className="relative flex h-[900px] max-h-[100vh] flex-col overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: "blur(7px)", transform: "scale(1.05)" }}
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
            "linear-gradient(180deg, rgba(255,217,100,.6) 0%, rgba(255,217,100,.4) 45%, rgba(255,217,100,.95) 100%)",
        }}
      />
      <div
        className="animate-film-grain pointer-events-none absolute inset-0 opacity-[0.28] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.35' numOctaves='2' stitchTiles='stitch' result='t'/%3E%3CfeColorMatrix in='t' type='saturate' values='0' result='g'/%3E%3CfeComponentTransfer in='g'%3E%3CfeFuncR type='linear' slope='2.2' intercept='-0.6'/%3E%3CfeFuncG type='linear' slope='2.2' intercept='-0.6'/%3E%3CfeFuncB type='linear' slope='2.2' intercept='-0.6'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "340px 340px",
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
          <p className="text-[13px] font-bold tracking-[2px] text-[#222121]/55 sm:text-[15px] sm:tracking-[3px]">
            DIRECTOR &amp; ACTOR
          </p>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-14 sm:py-10">
        <button
          type="button"
          onClick={() =>
            openVideo({
              src: HERO_VIDEO_SRC,
              title: "Alexander Guo 2026 Director Reel",
              type: "local",
            })
          }
          className="flex items-center gap-4 text-left"
        >
          <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#222121] text-[#ffd964]">
            <span className="text-[13px] font-black">▶</span>
          </span>
          <span className="text-xs font-bold tracking-[2px] text-[#222121]/70">
            PLAY REEL WITH SOUND
          </span>
        </button>
        <div className="hidden font-mono text-[10px] font-semibold tracking-[1px] text-[#222121]/40 sm:block">
          SCROLL FOR SELECTED WORK ↓
        </div>
      </div>
    </section>
  );
}
