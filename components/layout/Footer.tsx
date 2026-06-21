import { Film } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-800 bg-black">
      <div className="container mx-auto flex flex-col items-center justify-center gap-3 px-4 py-8 text-center">
        
        <div className="flex items-center gap-2">
          <Film className="h-5 w-5 text-red-600" />
          <span className="text-lg font-semibold text-white">
            MovieTime
          </span>
        </div>

        <p className="text-sm text-zinc-400">
          Discover, search, and save your favorite movies.
        </p>

        <p className="text-sm font-medium text-zinc-300">
          Built for Jeevan — Dipanshu Zalke
        </p>

      </div>
    </footer>
  );
}