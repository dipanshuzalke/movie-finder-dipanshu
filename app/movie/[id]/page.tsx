import Image from "next/image";

import { getMovieCredits, getMovieDetails } from "@/services/movieApi";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { ProductionCompany } from "@/types/movie";
import FavoriteButton from "@/components/ui/movie/FavoriteButton";

export default async function MovieDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const movie = await getMovieDetails(id);

  const credits = await getMovieCredits(id);

  const director = credits.crew.find(
    (person: any) => person.job === "Director",
  );

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Side */}
        <div className="flex justify-center">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>

        <div className="space-y-8 flex flex-col justify-center h-full pb-20">
          {/* Title */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
              {movie.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span>{movie.release_date?.split("-")[0]}</span>

              <span>•</span>

              <span>{movie.runtime} min</span>

              <span>•</span>

              <span>
                {movie.genres.map((genre: any) => genre.name).join(", ")}
              </span>
            </div>
          </div>

          {/* Rating + Favorite */}
          <div className="flex items-center gap-4">
            <div className="rounded-full border px-4 py-2 font-medium">
              ⭐ {movie.vote_average.toFixed(1)}
            </div>

            <div className="rounded-full border px-4 py-2">
              {movie.vote_count.toLocaleString()} votes
            </div>

            <FavoriteButton movie={movie} />
          </div>

          {/* Overview */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Overview</h2>

            <p className="text-lg leading-8 text-muted-foreground max-w-3xl">
              {movie.overview}
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm uppercase tracking-wide text-muted-foreground">
              Director
            </p>

            <p className="text-lg font-medium">
              {director?.name || "Not Available"}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
