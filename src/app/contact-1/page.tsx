export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center sm:px-10">
      <h1 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl mb-8">
        Contact
      </h1>

      <a
        href="mailto:alextheguo@gmail.com"
        className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl font-medium tracking-tight transition-opacity hover:opacity-60"
      >
        alextheguo@gmail.com
      </a>

      <p className="mt-8 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.15em] opacity-70">
        Representation: Daniel Hoff Agency
      </p>
    </main>
  );
}
