import { Header } from "./about/components/Header";
import { MovieCard } from "./components/MovieCard";
import React from "react";
import { MovieCategory } from "./components/MovieCategory";

export type MovieHome = {
  title: string;
  star: string;
  vote_avarage: number;
  poster_path: string;
  description: string;
  backdrop_path: string;
};
<Header />;

export const fetchfromPopuarMovieDB = async (category: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${category}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "applocation/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY}`,
      },
    }
  );
  const data = await response.json();
  return data.results;
};
<MovieCard />;
export default async function Home() {
  const movies: MovieHome[] = await fetchfromPopuarMovieDB("popular");
  const upcomingMovies: MovieHome[] = await fetchfromPopuarMovieDB("upcoming");
  const topRatedMovies: MovieHome[] = await fetchfromPopuarMovieDB("top_rated");
  console.log(movies);
  return (
    <div>
      <MovieCategory movies={movies} title="popular" category="popular" />
      <MovieCategory
        movies={upcomingMovies}
        title="Upcoming"
        category="upcoming"
      />
      <MovieCategory
        movies={topRatedMovies}
        title="top_rated"
        category="top_rated"
      />
    </div>
  );
}
