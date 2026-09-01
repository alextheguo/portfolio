"use client";

import { useVideoLightbox } from "@/components/VideoLightboxProvider";

export default function PlayLabel({ id, title }: { id: string; title: string }) {
  const { openVideo } = useVideoLightbox();

  return (
    <button
      type="button"
      onClick={() => openVideo({ src: id, title, type: "youtube" })}
      className="font-mono text-xs font-bold hover:opacity-70 sm:text-right"
    >
      PLAY →
    </button>
  );
}
