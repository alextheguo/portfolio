"use client";

import { useRef } from "react";
import { useRafScroll } from "@/components/useRafScroll";

export default function Parallax({
  children,
  className,
  speed = 0.2,
  fade = false,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  fade?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useRafScroll(() => {
    const el = ref.current;
    if (!el) return;
    const y = window.scrollY;
    el.style.transform = `translate3d(0, ${y * speed}px, 0)`;
    if (fade) {
      el.style.opacity = String(Math.max(0, 1 - y / (window.innerHeight * 0.7)));
    }
  });

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
