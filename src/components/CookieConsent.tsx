"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Reads a client-only store, so this can't be known during the initial
    // render on either the server or the client before hydration.
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setVisible(true);
      }
    } catch {
      // localStorage unavailable, skip the banner rather than error
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      // ignore, close the banner regardless
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex flex-col items-start gap-4 border-t border-[#222121]/12 bg-[#d9d9d9] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-14">
      <p className="max-w-[560px] text-[13px] leading-[1.6] font-semibold text-[#222121]/75">
        This site uses YouTube video embeds and basic analytics, which may set cookies. See the{" "}
        <Link href="/privacy" className="border-b-2 border-[#222121]/35">
          Privacy Policy
        </Link>{" "}
        for details.
      </p>
      <button
        type="button"
        onClick={accept}
        className="shrink-0 rounded-full bg-[#222121] px-5 py-2.5 text-xs font-bold tracking-[1px] text-[#d9d9d9]"
      >
        GOT IT
      </button>
    </div>
  );
}
