import { FC } from "react";
import PopularMovieList from "./PopularMovies";
import dynamic from "next/dynamic";

const DynamicFavoriteMovies = dynamic(
  () => import("./FavoriteMovieList/FavoriteMovies"),
  {
    ssr: false,
  }
);

const MoviesContainer: FC = () => {
  return (
    <div>
      <PopularMovieList />
      <DynamicFavoriteMovies />
    </div>
  );
};

export default MoviesContainer;
