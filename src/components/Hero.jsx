export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-100/60 via-white to-white dark:from-fuchsia-900/20 dark:via-neutral-950 dark:to-neutral-950 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-full bg-black/5 dark:bg-white/5 px-3 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-300">
            Handcrafted storytelling
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
            Curl up with beautifully crafted stories.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-neutral-600 dark:text-neutral-300">
            A serene reading space for short fiction, chapters, and timeless tales — curated with care, designed for focus.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#stories" className="inline-flex items-center rounded-md bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-5 py-3 text-white shadow-lg shadow-fuchsia-600/20 hover:from-fuchsia-500 hover:to-indigo-500">
              Start reading
            </a>
            <a href="#collections" className="inline-flex items-center rounded-md border border-black/10 dark:border-white/10 px-5 py-3 text-neutral-800 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/5">
              Explore collections
            </a>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {["Whimsical", "Mystery", "Sci‑Fi", "Poetry"].map((chip) => (
            <div
              key={chip}
              className="rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 p-4 shadow-sm"
            >
              <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">{chip}</p>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">Curated picks</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
