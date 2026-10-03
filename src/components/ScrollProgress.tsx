"use client";

import { useRef } from "react";
import { useRafScroll } from "@/components/useRafScroll";

export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useRafScroll(() => {
    const el = ref.current;
    if (!el) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? window.scrollY / max : 0;
    el.style.transform = `scaleX(${progress})`;
  });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[60] h-[3px] w-full origin-left bg-[#222121]"
      style={{ transform: "scaleX(0)" }}
    />
  );
}
