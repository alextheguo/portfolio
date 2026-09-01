"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

type LightboxVideo = { src: string; title: string; type: "youtube" | "local" };

const VideoLightboxContext = createContext<{
  openVideo: (video: LightboxVideo) => void;
} | null>(null);

export function useVideoLightbox() {
  const ctx = useContext(VideoLightboxContext);
  if (!ctx) throw new Error("useVideoLightbox must be used within VideoLightboxProvider");
  return ctx;
}

export default function VideoLightboxProvider({ children }: { children: React.ReactNode }) {
  const [video, setVideo] = useState<LightboxVideo | null>(null);

  const openVideo = useCallback((v: LightboxVideo) => setVideo(v), []);
  const closeVideo = useCallback(() => setVideo(null), []);

  useEffect(() => {
    if (!video) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeVideo();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [video, closeVideo]);

  return (
    <VideoLightboxContext.Provider value={{ openVideo }}>
      {children}
      {video && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-10"
          onClick={closeVideo}
        >
          <button
            type="button"
            onClick={closeVideo}
            aria-label="Close"
            className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl leading-none text-white transition-colors hover:bg-white/20 sm:top-8 sm:right-8"
          >
            ×
          </button>
          <div className="aspect-video w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            {video.type === "local" ? (
              <video
                src={video.src}
                className="h-full w-full bg-black"
                controls
                autoPlay
                playsInline
                title={video.title}
              />
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${video.src}?autoplay=1&controls=1&rel=0&modestbranding=1&playsinline=1`}
                className="h-full w-full border-0"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                title={video.title}
              />
            )}
          </div>
        </div>
      )}
    </VideoLightboxContext.Provider>
  );
}
