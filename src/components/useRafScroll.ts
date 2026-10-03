import { useEffect, useRef } from "react";

// Runs `callback` once on mount and then at most once per animation frame while
// the page scrolls or resizes. Callers write styles directly to refs, so scrolling
// never triggers a React re-render. Skipped entirely for reduced-motion users.
export function useRafScroll(callback: () => void) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    const run = () => {
      ticking = false;
      callbackRef.current();
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(run);
      }
    };

    callbackRef.current();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
}
