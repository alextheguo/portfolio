"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    return <div className="flex-1 flex flex-col">{children}</div>;
  }

  return (
    <>
      <Header />
      <div className="flex-1 flex flex-col pt-20">{children}</div>
    </>
  );
}
