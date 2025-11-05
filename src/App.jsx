import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LibraryGrid from "./components/LibraryGrid";
import ReaderPreview from "./components/ReaderPreview";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Navbar />
      <main>
        <Hero />
        <LibraryGrid />
        <ReaderPreview />
      </main>
      <footer id="about" className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-500 dark:text-neutral-400">
        <div className="border-t border-black/10 dark:border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Storycraft. Hand‑built for readers.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-800 dark:hover:text-white">Community</a>
            <a href="#" className="hover:text-neutral-800 dark:hover:text-white">Privacy</a>
            <a href="#" className="hover:text-neutral-800 dark:hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
