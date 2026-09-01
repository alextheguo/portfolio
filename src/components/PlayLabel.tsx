"use client";

import { useVideoLightbox } from "@/components/VideoLightboxProvider";

export default function PlayLabel({ id, title }: { id: string; title: string }) {
  const { openVideo } = useVideoLightbox();

  return (
    <button
      type="button"
      onClick={() => openVideo(id, title)}
      className="font-mono text-xs font-bold hover:opacity-70 sm:text-right"
    >
      PLAY →
    </button>
  );
}
