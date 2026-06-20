"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MovieDetails } from "@/types/movie";

interface FavoriteButtonProps {
  movie: MovieDetails;
}

export default function FavoriteButton({ movie }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    const exists = favorites.some((fav: MovieDetails) => fav.id === movie.id);

    setIsFavorite(exists);
  }, [movie.id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (isFavorite) {
      const updated = favorites.filter(
        (fav: MovieDetails) => fav.id !== movie.id,
      );

      localStorage.setItem("favorites", JSON.stringify(updated));

      setIsFavorite(false);
    } else {
      const updated = [...favorites, movie];

      localStorage.setItem("favorites", JSON.stringify(updated));

      setIsFavorite(true);
    }
  };

  return (
    <Button
      size="lg"
      variant={isFavorite ? "default" : "outline"}
      className="rounded-full"
      onClick={toggleFavorite}
    >
      <Heart
        className={`mr-2 h-5 w-5 transition-colors ${
          isFavorite ? "fill-red-500 text-red-500" : "text-muted-foreground"
        }`}
      />

      {isFavorite ? "Remove Favorite" : "Add to Favorites"}
    </Button>
  );
}
