import { FC } from "react";
import styles from "./SearchList.module.scss";
import { IMovie } from "@/shared/types/movie.types";
import Link from "next/link";
import Image from "next/image";

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
  return (
    <div className={styles.list}>
      {movies.length ? (
        movies.map((movie) => (
          <Link legacyBehavior key={movie._id} href={`/movie/${movie.slug}`}>
            <a className="flex items-center py-3 px-4 relative">
              <div className="relative w-16 h-16 rounded-layout overflow-hidden">
                <Image
                  src={movie.poster || ""}
                  layout="fill"
                  objectFit="cover"
                  alt={movie.title}
                  draggable={false}
                />
              </div>
              <span className="ml-3 text-white truncate">{movie.title}</span>
            </a>
          </Link>
        ))
      ) : (
        <div className="text-white text-center my-4">Movies not found!</div>
      )}
    </div>
  );
};

export default SearchList;
