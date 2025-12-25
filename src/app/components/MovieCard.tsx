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
  const response2 = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MY_API_KEY}`,
      },
    }
  );
  const data = await response.json();
  return data;
};
export const MovieCard = async () => {
  const { results }: { results: Movie[] } = await movieAPI();
  console.log(results);
  return (
    <div className="flex w-359.25 flex-wrap  justify-center space-x-8">
      <div className="flex flex-wrap">
        <div className="flex">
          <p>Upcoming</p>
          <button>see more</button>
        </div>
        {results.map((info) => {
          return (
            <div
              key={info.title}
              className="w-[229.73px] h-109.75 bg-gray-50 space-y-1 "
            >
              <img
                src={`https://image.tmdb.org/t/p/original${info.poster_path}`}
                alt=""
                className="h-85"
              />
              <p className="flex items-center">
                <img src={info.od} alt="" className="w-4 h-4.5 pr-1 pd-1.25" />
                ⭐{info.rating}/10
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap">
        <div className="flex">
          <p>Upcoming</p>
          <button>see more</button>
        </div>
        {results.map((info) => {
          return (
            <div
              key={info.title}
              className="w-[229.73px] h-109.75 bg-gray-50 space-y-1 "
            >
              <img
                src={`https://image.tmdb.org/t/p/original${info.poster_path}`}
                alt=""
                className="h-85"
              />
              <p className="flex items-center">
                <img src={info.od} alt="" className="w-4 h-4.5 pr-1 pd-1.25" />
                {info.rating}/10
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
