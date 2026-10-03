"use client";

import { useRef } from "react";
import { useRafScroll } from "@/components/useRafScroll";

const PHRASE = "DIRECTOR & ACTOR  /  LOS ANGELES  /  FILM  /  COMMERCIAL  /  ";

export default function ScrollMarquee() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useRafScroll(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;
    const top = wrap.getBoundingClientRect().top;
    track.style.transform = `translate3d(calc(-30% + ${top * 0.4}px), 0, 0)`;
  });

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="overflow-hidden border-y border-[#222121]/12 py-5"
    >
      <div
        ref={trackRef}
        className="flex w-max whitespace-nowrap text-[clamp(36px,6vw,84px)] leading-none font-black tracking-[-2px] text-transparent"
        style={{ WebkitTextStroke: "1.5px #222121", willChange: "transform" }}
      >
        {Array.from({ length: 6 }, (_, i) => (
          <span key={i}>{PHRASE}</span>
        ))}
      </div>
    </div>
  );
}
