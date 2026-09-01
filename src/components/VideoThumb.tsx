"use client";

import { youtubeThumb, handleThumbFallback } from "@/data/projects";
import { useVideoLightbox } from "@/components/VideoLightboxProvider";

export default function VideoThumb({
  id,
  title,
  className,
}: {
  id: string;
  title: string;
  className?: string;
}) {
  const { openVideo } = useVideoLightbox();

  return (
    <button
      type="button"
      onClick={() => openVideo(id, title)}
      aria-label={`Play ${title}`}
      className={`relative block aspect-video w-full overflow-hidden border border-[#222121]/20 bg-[#222121] ${className ?? ""}`}
    >
      <img
        src={youtubeThumb(id)}
        alt={title}
        onError={handleThumbFallback}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </button>
  );
}
