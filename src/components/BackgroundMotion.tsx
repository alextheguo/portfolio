"use client";

import { useRef } from "react";
import { useRafScroll } from "@/components/useRafScroll";

// A few large, very faint shapes that drift on their own (CSS) and shift with
// scroll (JS). Fixed behind all content, so they read as ambient depth.
export default function BackgroundMotion() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dashedRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useRafScroll(() => {
    const y = window.scrollY;
    if (ringRef.current) {
      ringRef.current.style.transform = `translate3d(0, ${y * -0.12}px, 0) rotate(${y * 0.04}deg)`;
    }
    if (dashedRef.current) {
      dashedRef.current.style.transform = `translate3d(0, ${y * -0.2}px, 0) rotate(${y * -0.05}deg)`;
    }
    if (dotRef.current) {
      dotRef.current.style.transform = `translate3d(0, ${y * -0.08}px, 0)`;
    }
  });

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        ref={ringRef}
        className="absolute top-[18vh] -right-[12vw] h-[56vw] max-h-[720px] w-[56vw] max-w-[720px]"
      >
        <div className="bg-float h-full w-full rounded-full border-[1.5px] border-[#222121]/10" />
      </div>

      <div
        ref={dashedRef}
        className="absolute top-[62vh] -left-[10vw] h-[32vw] max-h-[420px] w-[32vw] max-w-[420px]"
      >
        <div className="bg-float h-full w-full rounded-full border-[1.5px] border-dashed border-[#222121]/12 [animation-delay:-6s] [animation-duration:24s]" />
      </div>

      <div
        ref={dotRef}
        className="absolute top-[28vh] left-[46vw] h-[10vw] max-h-[120px] w-[10vw] max-w-[120px]"
      >
        <div className="bg-float h-full w-full rounded-full bg-[#222121]/[0.05] [animation-delay:-11s] [animation-duration:20s]" />
      </div>
    </div>
  );
}
