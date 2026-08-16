import YouTubeEmbed from "@/components/YouTubeEmbed";

const PROJECTS = [
  { id: "aIQLkbTeDBg", title: "“A Little Nudge” for Blinkko" },
  { id: "MNLG_Ar2ujQ", title: "“TARS' First Day” — for Hypercard Expense" },
  { id: "_Sr9eyDxCcM", title: "“All the Time in the World” — for Truffle Pig" },
  { id: "QVqXPH-w6Zk", title: "“Hot Nerd” | Ditto AI" },
  { id: "FzzhmVvXbpA", title: "Onitsuka Tiger — “Find Your Pair” | Raincheck" },
  {
    id: "Opp97cZHprc",
    title: "Maruchan Instant Lunch Ramen Noodles, Flamin’ Hot® | Commercial Spot",
  },
  { id: "QQAs6t2i9LM", title: "Onitsuka Tiger — “Find Your Pair” | Sublimity" },
  { id: "f2MCBnZUSPc", title: "Onitsuka Tiger — “Find Your Pair” | Records" },
];

export default function CommercialPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-6 py-12 sm:px-10">
      <div className="w-full max-w-4xl flex flex-col gap-16">
        {PROJECTS.map((project) => (
          <div key={project.id}>
            <YouTubeEmbed id={project.id} title={project.title} />
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-lg sm:text-xl">
              {project.title}
            </h2>
          </div>
        ))}
      </div>
    </main>
  );
}
