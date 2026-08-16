import YouTubeEmbed from "@/components/YouTubeEmbed";

const PROJECTS = [
  { id: "7AV_8Ull09g", title: "USB", credits: "Director, Editor, VFX Artist" },
  { id: "R-of3WR9EVg", title: "Veins", credits: "Writer, Director, Sound Designer, VFX Artist" },
  {
    id: "XAHEjHXXmYo",
    title: "Criterion",
    credits: "Writer, Director, Editor, VFX Artist",
    note: "(Excerpt from a larger piece of work)",
  },
  {
    id: "UratXCFXYGw",
    title: "Orange County Film Festival Nomination Film",
    credits: "Director, Editor, VFX Artist",
  },
  {
    id: "tQun-GQBrXk",
    title: "Best of Three",
    credits: "Writer, Director, Lead Talent, Editor, VFX, Stunt Coordinator, Sound Design",
  },
  {
    id: "aw1uku7Yz9c",
    title: "Free Ice Cream",
    credits: "Writer, Director, Producer, Editor, Sound, VFX",
  },
  { id: "UohfebzTJLs", title: "Dear Anxiety", credits: "Writer, Director, Editor, Sound" },
];

export default function NarrativePage() {
  return (
    <main className="flex flex-1 flex-col items-center px-6 py-12 sm:px-10">
      <div className="w-full max-w-4xl flex flex-col gap-16">
        {PROJECTS.map((project) => (
          <div key={project.id}>
            <YouTubeEmbed id={project.id} title={project.title} />
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-xl sm:text-2xl">
              {project.title}
            </h2>
            <p className="mt-1 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.1em] opacity-70">
              {project.credits}
            </p>
            {project.note && (
              <p className="mt-1 font-[family-name:var(--font-body)] text-xs italic opacity-60">
                {project.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
