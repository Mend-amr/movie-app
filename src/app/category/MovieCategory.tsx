import Link from "next/link";

import { MovieHome } from "../page";
import { MovieCard } from "../components/MovieCard";

interface MovieCategoryProps {
  movies: MovieHome[];

  title: string;

  category: string;
}
export const MovieCategory = ({
  movies,

  title,

  category,
}: MovieCategoryProps) => {
  return (
    <div>
      <div className="flex justify-between items-center m-auto px-6">
        <h1>{title}</h1>
        <Link href={`/category/${category}`}>
          <button>See more</button>
        </Link>
      </div>

      <div className="grid grid-cols-5 gap-2 max-w-[1440px] m-auto">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};
