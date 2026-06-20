import { getPopularMovies } from "@/services/movieApi";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import MovieCard from "@/components/ui/movie/MovieCard";
import HeroSection from "@/components/ui/movie/HeroSection";

interface HomeProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;

  const currentPage = Number(params.page ?? 1);

  const data = await getPopularMovies(currentPage);

  const movies = data.results.slice(0, 12);

  return (
    <main className="container mx-auto py-8 px-4">
      <HeroSection movies={movies} />
      <h1 className="text-3xl font-bold my-8 pl-2">Popular Movies</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <Pagination className="mt-10">
        <PaginationContent>
          <PaginationItem>
            {currentPage > 1 && (
              <PaginationPrevious href={`/?page=${currentPage - 1}`} />
            )}
          </PaginationItem>

          <PaginationItem>
            <span className="px-4 font-medium">Page {currentPage}</span>
          </PaginationItem>

          <PaginationItem>
            {currentPage < data.total_pages && (
              <PaginationNext href={`/?page=${currentPage + 1}`} />
            )}
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  );
}
