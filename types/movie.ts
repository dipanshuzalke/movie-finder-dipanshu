export interface Movie {
  [x: string]: any;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
}

export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
}

export interface MovieDetails {
  id: number;
  title: string;
  overview: string;

  poster_path: string | null;
  backdrop_path: string | null;

  release_date: string;

  vote_average: number;
  vote_count: number;
  popularity: number;
  genres: Genre[];

  production_companies: ProductionCompany[];
}