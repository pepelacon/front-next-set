import { FC } from "react";

// import { useFavorites } from '@/components/screens/favorites/useFavorites'

// import { useAuth } from '@/hooks/useAuth'

import MovieList from "../MovieList";

import NotAuthFavorites from "./NotAuthFavorites";
import SkeletonLoader from "@/components/ui/SkeletonLoader";

const FavoriteMovieList: FC = () => {
  // const { isLoading, favoritesMovies } = useFavorites()
  // const { user } = useAuth()

  // if (!user) return <NotAuthFavorites />

  // return isLoading ? (
  // 	<div className="mt-11">
  // 		<SkeletonLoader count={3} className="h-28 mb-4" />
  // 	</div>
  // ) : (
  // 	<MovieList
  // 		list={{
  // 			link: '/favorites',
  // 			movies: favoritesMovies?.slice(0, 3) || [],
  // 			title: 'Favorites',
  // 		}}
  // 	/>
  // )
  return <div>Favotite movies</div>;
};

export default FavoriteMovieList;
