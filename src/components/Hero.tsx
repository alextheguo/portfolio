"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import DustParticles from "@/components/DustParticles";
import { HOME_REEL_ID } from "@/data/projects";

const VIDEO_RATIO = 16 / 9;

export default function Hero() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoSize, setVideoSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateSize = () => {
      const { width: cw, height: ch } = el.getBoundingClientRect();
      if (!cw || !ch) return;
      const containerRatio = cw / ch;
      if (containerRatio > VIDEO_RATIO) {
        setVideoSize({ width: cw, height: cw / VIDEO_RATIO });
      } else {
        setVideoSize({ width: ch * VIDEO_RATIO, height: ch });
      }
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!lightboxOpen) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxOpen]);

  const backgroundSrc = `https://www.youtube.com/embed/${HOME_REEL_ID}?autoplay=1&mute=1&loop=1&playlist=${HOME_REEL_ID}&controls=0&modestbranding=1&rel=0&playsinline=1`;

  return (
    <section className="relative flex h-[900px] max-h-[100vh] flex-col overflow-hidden">
      <div ref={containerRef} className="absolute inset-0 overflow-hidden">
        {videoSize.width > 0 && (
          <iframe
            src={backgroundSrc}
            className="absolute top-1/2 left-1/2 border-0"
            style={{
              width: videoSize.width,
              height: videoSize.height,
              transform: "translate(-50%, -50%) scale(1.1)",
              filter: "blur(7px)",
              pointerEvents: "none",
            }}
            allow="autoplay; encrypted-media"
            title="Directing reel (background)"
          />
        )}
      </div>
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
          onClick={() => setLightboxOpen(true)}
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

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-10"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
            className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl leading-none text-white transition-colors hover:bg-white/20 sm:top-8 sm:right-8"
          >
            ×
          </button>
          <div
            className="aspect-video w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${HOME_REEL_ID}?autoplay=1&controls=1&rel=0&modestbranding=1&playsinline=1`}
              className="h-full w-full border-0"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              title="Alexander Guo 2026 Director Reel"
            />
          </div>
        </div>
      )}
    </section>
  );
}
