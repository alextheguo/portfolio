"use client";

import { useRef } from "react";
import { useRafScroll } from "@/components/useRafScroll";

export default function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useRafScroll(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;
    const rect = wrap.getBoundingClientRect();
    const fromCenter = rect.top + rect.height / 2 - window.innerHeight / 2;
    const shift = Math.max(-34, Math.min(34, fromCenter * -0.08));
    img.style.transform = `translate3d(0, ${shift}px, 0) scale(1.15)`;
  });

  return (
    <div ref={wrapRef} className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={imgClassName}
        style={{ transform: "scale(1.15)", willChange: "transform" }}
      />
    </div>
  );
}
