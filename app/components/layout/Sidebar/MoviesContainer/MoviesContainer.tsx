import { FC } from "react";
import PopularMovieList from "./PopularMovies";
import FavoriteMovieList from "./FavoriteMovieList/FavoriteMovies";

const MoviesContainer: FC = () => {
  return (
    <div>
      <PopularMovieList />
      <FavoriteMovieList />
    </div>
  );
};

export default MoviesContainer;
