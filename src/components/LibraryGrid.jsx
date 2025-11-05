function StoryCard({ title, author, tag, colorFrom, colorTo }) {
  return (
    <article className="group rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden bg-white dark:bg-neutral-900 hover:shadow-lg transition-shadow">
      <div className="h-36 bg-gradient-to-br" style={{ backgroundImage: `linear-gradient(135deg, ${colorFrom}, ${colorTo})` }} />
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
          <span className="inline-flex items-center rounded-full bg-black/5 dark:bg-white/5 px-2 py-0.5">{tag}</span>
        </div>
        <h3 className="mt-2 text-lg font-semibold text-neutral-900 dark:text-white group-hover:underline">
          {title}
        </h3>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">by {author}</p>
      </div>
    </article>
  );
}

export default function LibraryGrid() {
  const stories = [
    { title: "The Stardust Letter", author: "Mara Quinn", tag: "Sci‑Fi", from: "#A78BFA", to: "#60A5FA" },
    { title: "Tea at Dusk", author: "Noah Vale", tag: "Slice of Life", from: "#F0ABFC", to: "#FDE68A" },
    { title: "Footsteps in Amber", author: "Rui Park", tag: "Mystery", from: "#F472B6", to: "#A7F3D0" },
    { title: "Paper Lanterns", author: "Yun Liu", tag: "Poetry", from: "#FDBA74", to: "#F9A8D4" },
    { title: "Quiet Maps", author: "Ira Finch", tag: "Travel", from: "#93C5FD", to: "#6EE7B7" },
    { title: "Silver River", author: "Lena Ortiz", tag: "Fantasy", from: "#C4B5FD", to: "#FCA5A5" },
  ];

  return (
    <section id="stories" className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">Featured stories</h2>
          <p className="mt-1 text-neutral-600 dark:text-neutral-300">A rotating shelf of reader favorites.</p>
        </div>
        <a href="#" className="text-sm text-fuchsia-600 hover:underline">View all</a>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((s) => (
          <StoryCard key={s.title} title={s.title} author={s.author} tag={s.tag} colorFrom={s.from} colorTo={s.to} />
        ))}
      </div>
    </section>
  );
}
