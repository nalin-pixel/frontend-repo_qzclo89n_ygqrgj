import { BookOpen, Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/60 dark:bg-neutral-950/60 border-b border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2 font-semibold text-neutral-800 dark:text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-rose-500 via-fuchsia-500 to-indigo-500 text-white">
            <BookOpen size={18} />
          </span>
          <span className="text-lg">Storycraft</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
          <a className="hover:text-neutral-900 dark:hover:text-white" href="#stories">Stories</a>
          <a className="hover:text-neutral-900 dark:hover:text-white" href="#collections">Collections</a>
          <a className="hover:text-neutral-900 dark:hover:text-white" href="#about">About</a>
        </nav>

        <div className="flex items-center gap-3 w-64 max-w-[50vw]">
          <div className="relative hidden sm:block flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search stories, authors..."
              className="w-full rounded-md border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-fuchsia-500/40 focus:border-fuchsia-500/60"
            />
          </div>
          <button className="inline-flex items-center gap-2 rounded-md border border-black/10 dark:border-white/10 px-3 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/5">
            <User size={16} />
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
