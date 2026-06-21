"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Movie } from "@/types/movie";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!query.trim()) {
        setMovies([]);
        setError("");
        return;
      }

      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          `/api/search?q=${encodeURIComponent(query)}`
        );

        if (!res.ok) {
          throw new Error("Failed to search movies");
        }

        const data: Movie[] = await res.json();

        setMovies(data.slice(0, 6));
      } catch (err) {
        console.error(err);
        setError("Failed to search movies");
        setMovies([]);
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="relative w-82">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        className="w-full rounded-full border border-zinc-700 bg-zinc-900 py-2 pl-10 pr-4 text-sm text-white outline-none focus:border-red-500"
      />

      {query && (
        <div className="absolute top-12 z-50 w-full overflow-hidden rounded-xl border border-zinc-800 bg-black shadow-xl">
          
          {loading && (
            <div className="p-4 text-center text-sm text-zinc-400">
              Searching...
            </div>
          )}

          {error && (
            <div className="p-4 text-center text-sm text-red-500">
              {error}
            </div>
          )}

          {!loading &&
            !error &&
            movies.map((movie) => (
              <Link
                key={movie.id}
                href={`/movie/${movie.id}`}
                className="flex items-center gap-3 border-b border-zinc-800 p-3 hover:bg-zinc-900"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                  alt={movie.title}
                  className="h-14 w-10 rounded object-cover"
                />

                <div>
                  <p className="font-medium text-white">
                    {movie.title}
                  </p>

                  <p className="text-xs text-zinc-400">
                    {movie.release_date?.split("-")[0]}
                  </p>
                </div>
              </Link>
            ))}

          {!loading &&
            !error &&
            query &&
            movies.length === 0 && (
              <div className="p-4 text-center text-sm text-zinc-400">
                No movies found
              </div>
            )}
        </div>
      )}
    </div>
  );
}