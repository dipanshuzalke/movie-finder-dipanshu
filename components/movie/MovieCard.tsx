import Link from "next/link";
import { Movie } from "@/types/movie";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <Card className="relative mx-auto w-full max-w-sm bg-black text-white cursor-pointer transition-all hover:scale-105 hover:shadow-lg">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-100 rounded-md object-cover"
        />

        <CardHeader>
          <CardTitle>{movie.title}</CardTitle>
          <CardDescription>
            {movie.release_date}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}