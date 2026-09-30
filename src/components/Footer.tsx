import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-start justify-between gap-4 border-t border-[#222121]/12 px-6 py-8 sm:flex-row sm:items-center sm:px-14">
      <p className="text-xs font-semibold text-[#222121]/70">
        © {new Date().getFullYear()} Alexander Guo
      </p>
      <div className="flex gap-6">
        <Link href="/privacy" className="text-xs font-bold text-[#222121]/70 hover:text-[#222121]">
          Privacy Policy
        </Link>
        <Link href="/terms" className="text-xs font-bold text-[#222121]/70 hover:text-[#222121]">
          Terms &amp; Conditions
        </Link>
      </div>
    </footer>
  );
}
