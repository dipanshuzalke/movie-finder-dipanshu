"use client";

import MovieCard from "@/components/ui/movie/MovieCard";
import { useEffect, useState } from "react";

export default function FavoritesPage() {
  const [favorites, setFavorites] =
    useState([]);

  useEffect(() => {
    const stored = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    setFavorites(stored);
  }, []);

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8 px-2">
        Favorites
      </h1>

      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {favorites.map((movie: any) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      )}
    </main>
  );
}