export default function ReaderPreview() {
  return (
    <section id="collections" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-500/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">A calm, immersive reader</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">
              Distraction-free typography, ambient theming, and buttery-smooth page transitions. Your focus stays on the words.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-700 dark:text-neutral-200">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-500" />Comfortable type scale and spacing</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-500" />Auto dark mode and ambient gradients</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-500" />Progress memory between sessions</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="#" className="inline-flex items-center rounded-md bg-neutral-900 dark:bg-white px-5 py-3 text-white dark:text-neutral-900 hover:opacity-90">Continue reading</a>
              <a href="#about" className="inline-flex items-center rounded-md border border-black/10 dark:border-white/10 px-5 py-3 text-neutral-800 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/5">Learn more</a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 shadow-xl overflow-hidden">
              <div className="px-6 pt-5 pb-3 border-b border-black/5 dark:border-white/5 flex items-center justify-between">
                <div className="text-xs text-neutral-500">Chapter 1</div>
                <div className="text-xs text-neutral-500">4 min read</div>
              </div>
              <div className="p-6 leading-relaxed text-neutral-800 dark:text-neutral-100 text-[15px]">
                <h3 className="text-xl font-semibold mb-3">The Stardust Letter</h3>
                <p>
                  The envelope arrived with the dawn mail, its paper freckled like a small galaxy. I broke the seal and a
                  blush of silver dust bloomed into the air, settling over the kitchen like quiet snow. Inside, a single
                  page: a map written in constellations.
                </p>
                <p className="mt-3">
                  When I held it to the window, the stars rearranged themselves until the kitchen light became a moon, and the
                  refrigerator hum a tidal pull. Somewhere far away, a city was waking; here, the night decided to stay.
                </p>
                <p className="mt-3 text-neutral-600 dark:text-neutral-300">
                  This is a preview. Create an account to unlock the full chapter and track your progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
