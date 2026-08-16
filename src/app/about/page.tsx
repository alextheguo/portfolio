import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col items-center px-6 py-12 sm:px-10">
      <div className="w-full max-w-3xl">
        <h1 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl mb-8">
          About Me
        </h1>

        <div className="relative w-full max-w-xs aspect-[4/5] mb-8 overflow-hidden">
          <Image
            src="/headshot.jpg"
            alt="Alexander Guo"
            fill
            className="object-cover"
            priority
          />
        </div>

        <blockquote className="font-[family-name:var(--font-display)] text-lg sm:text-xl italic mb-8">
          &ldquo;Within every grand, sweeping tale lies an intimate, untold story waiting to be
          discovered.&rdquo;
        </blockquote>

        <div className="flex flex-col gap-4 font-[family-name:var(--font-body)] text-sm sm:text-base leading-relaxed opacity-90">
          <p>
            Alexander Guo is a Chinese American filmmaker and actor based in Los Angeles. With a
            background in sketch comedy, his work blends awkward humor and sharp wit with
            grounded sincerity, often living between comedy and drama.
          </p>
          <p>
            As a storyteller, he is drawn to deeply human moments within larger-than-life worlds.
            Whether set in the past, a cyberpunk city, or a fantastical world, his work centers on
            emotional truths that ground spectacle in something real. His goal is to tell intimate
            stories on a cinematic scale, where the epic and the human are inseparable.
          </p>
          <p>
            Alexander&apos;s work spans independent short films, national commercials, and VFX
            projects, including collaborations with Warner Bros., Netflix, and creators like Zach
            King. His VFX work has appeared at festivals such as the National Film Festival for
            Talented Youth and on platforms like ALTER, and he has directed established talent
            such as Creed Bratton.
          </p>
          <p>
            He has acted in numerous short films and national commercials, and is represented by
            the Daniel Hoff Agency. Outside of filmmaking, he trains at the gym and previously
            competed in boxing for the University of Southern California. He is currently leading
            his first independent feature film.
          </p>
        </div>
      </div>
    </main>
  );
}
