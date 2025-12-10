import axios from "axios";
import type { MoviesResponse } from "../types/movie";

const API_URL = "https://api.themoviedb.org/3/search/movie";

export async function fetchMovies(
  query: string,
  page: number
): Promise<MoviesResponse> {
  const token = import.meta.env.VITE_TMDB_TOKEN;

  const response = await axios.get<MoviesResponse>(API_URL, {
    params: { query, page },
    headers: {
      Authorization: `Bearer ${token}`,
      accept: "application/json",
    },
  });

  return response.data;
}
