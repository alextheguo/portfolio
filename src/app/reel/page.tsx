import YouTubeEmbed from "@/components/YouTubeEmbed";

export default function ReelPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-6 py-12 sm:px-10">
      <div className="w-full max-w-4xl">
        <YouTubeEmbed id="5Rh08FGhyug" title="Alexander Guo 2026 Director Reel" />
        <p className="mt-4 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.15em] opacity-70">
          Alexander Guo 2026 Director Reel
        </p>
      </div>
    </main>
  );
}
