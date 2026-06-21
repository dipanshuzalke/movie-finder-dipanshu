import MovieCard from "@/components/movie/MovieCard";
import { searchMovies } from "@/services/movieApi";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
  }>;
}) {
  const params = await searchParams;
  const query = params.q?.trim() || "";

  const data = query
    ? await searchMovies(query)
    : { results: [] };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold">
        Search Results
      </h1>

      {query ? (
        <p className="mb-8 text-muted-foreground">
          Results for "{query}"
        </p>
      ) : (
        <p className="mb-8 text-muted-foreground">
          Search for a movie title
        </p>
      )}

      {query && data.results.length === 0 ? (
        <div className="flex min-h-[40vh] flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold">
            No movies found
          </h2>

          <p className="mt-2 text-muted-foreground">
            Try another movie title.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
          {data.results.map((movie: any) => (
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