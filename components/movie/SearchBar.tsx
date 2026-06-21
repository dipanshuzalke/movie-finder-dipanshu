"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
} from "react";

import { Movie } from "@/types/movie";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const searchRef =
    useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(
      event: MouseEvent
    ) {
      if (
        searchRef.current &&
        !searchRef.current.contains(
          event.target as Node
        )
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // Search movies
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!query.trim()) {
        setMovies([]);
        setError("");
        setIsOpen(false);
        return;
      }

      try {
        setLoading(true);
        setError("");
        setIsOpen(true);

        const res = await fetch(
          `/api/search?q=${encodeURIComponent(
            query
          )}`
        );

        if (!res.ok) {
          throw new Error(
            "Failed to search movies"
          );
        }

        const data: Movie[] =
          await res.json();

        setMovies(data.slice(0, 6));
      } catch (err) {
        console.error(err);

        setError(
          "Failed to search movies"
        );

        setMovies([]);
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div
      ref={searchRef}
      className="relative w-82"
    >
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />

      <input
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
        onFocus={() => {
          if (
            query &&
            (movies.length > 0 ||
              error)
          ) {
            setIsOpen(true);
          }
        }}
        placeholder="Search movies..."
        className="w-full rounded-full border border-zinc-700 bg-zinc-900 py-2 pl-10 pr-4 text-sm text-white outline-none transition focus:border-red-500"
      />

      {isOpen && (
        <div className="absolute top-12 z-50 w-full overflow-hidden rounded-xl border border-zinc-800 bg-black shadow-xl">

          {/* Loading */}
          {loading && (
            <div className="p-4 text-center text-sm text-zinc-400">
              Searching...
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="p-4 text-center text-sm text-red-500">
              {error}
            </div>
          )}

          {/* Movies */}
          {!loading &&
            !error &&
            movies.map((movie) => (
              <Link
                key={movie.id}
                href={`/movie/${movie.id}`}
                onClick={() =>
                  setIsOpen(false)
                }
                className="flex items-center gap-3 border-b border-zinc-800 p-3 transition hover:bg-zinc-900"
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
                    {movie.release_date?.split(
                      "-"
                    )[0]}
                  </p>
                </div>
              </Link>
            ))}

          {/* Empty State */}
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