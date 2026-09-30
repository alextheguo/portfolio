import Link from "next/link";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <div className="border-t border-[#222121]/12">
      <Header />

      <div className="flex flex-col items-start gap-6 px-6 py-24 sm:px-14">
        <h1 className="font-black leading-[0.85] tracking-[-2px] text-[clamp(48px,11vw,120px)] sm:tracking-[-5px]">
          404
        </h1>
        <p className="max-w-[420px] text-sm font-semibold leading-[1.65] text-[#222121]/70">
          This page doesn&apos;t exist. It might have been moved, or the link might be
          incorrect.
        </p>
        <Link
          href="/"
          className="mt-2 inline-block w-fit border-b-2 border-[#222121]/35 text-[15px] font-bold"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
