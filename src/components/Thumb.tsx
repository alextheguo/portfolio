"use client";

import { handleThumbFallback } from "@/data/projects";

export default function Thumb({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return <img src={src} alt={alt} onError={handleThumbFallback} className={className} />;
}
