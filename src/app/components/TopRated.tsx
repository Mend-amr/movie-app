import Link from "next/link";
export type Movie = {
  title: string;
  rating: number;
  od: string;
  poster_path: string;
};
const movieAPI = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MY_API_KEY}`,
      },
    }
  );
};
