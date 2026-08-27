"use client";

import { useState } from "react";
import { youtubeThumb } from "@/data/projects";

export default function ThumbPlayer({
  id,
  title,
  playing: initiallyPlaying = false,
}: {
  id: string;
  title: string;
  playing?: boolean;
}) {
  const [playing, setPlaying] = useState(initiallyPlaying);

  if (playing) {
    return (
      <div className="relative aspect-video overflow-hidden border border-[#222121]/20 bg-[#222121]">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1${
            initiallyPlaying ? "" : "&autoplay=1"
          }`}
          title={title}
          frameBorder={0}
          allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play ${title}`}
      className="relative block aspect-video w-full overflow-hidden border border-[#222121]/20 bg-[#222121]"
    >
      <img
        src={youtubeThumb(id)}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </button>
  );
}
