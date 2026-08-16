import YouTubeEmbed from "@/components/YouTubeEmbed";

export default function ActingPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-6 py-12 sm:px-10">
      <div className="w-full max-w-4xl">
        <h1 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl">
          2026 Acting Reel
        </h1>
        <p className="mt-2 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.1em] opacity-70">
          Representation: Daniel Hoff Agency
        </p>
        <div className="mt-6">
          <YouTubeEmbed id="ze6_OeIpSI0" title="Alexander Guo Demo Reel 2026" />
        </div>
      </div>
    </main>
  );
}
