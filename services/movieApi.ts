import { tmdb } from "@/lib/axios";
import { MoviesResponse } from "@/types/movie";

export async function getPopularMovies(
  page: number = 1
): Promise<MoviesResponse> {
  const { data } = await tmdb.get("/movie/popular", {
    params: { page },
  });

  return data;
}

export async function getMovieDetails(id: string) {
  const { data } = await tmdb.get(`/movie/${id}`);
  return data;
}

export async function getMovieCredits(id: string) {
  const { data } = await tmdb.get(`/movie/${id}/credits`);
  return data;
}

export async function searchMovies(query: string) {
  const { data } = await tmdb.get("/search/movie", {
    params: { query },
  });

  return data;
}