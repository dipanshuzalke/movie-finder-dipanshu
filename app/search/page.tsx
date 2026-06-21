import MovieCard from "@/components/ui/movie/MovieCard";
import { searchMovies } from "@/services/movieApi";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
  }>;
}) {
  const params = await searchParams;

  const query = params.q || "";

  const data = query
    ? await searchMovies(query)
    : { results: [] };

  return (
    <main className="container mx-auto py-8">
      <h1 className="mb-8 text-3xl font-bold">
        Search Results
      </h1>

      <p className="mb-6 text-muted-foreground">
        Results for "{query}"
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.results.map((movie: any) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </main>
  );
}