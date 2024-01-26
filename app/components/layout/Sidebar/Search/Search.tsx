import { ChangeEvent, FC, useState } from "react";
import { useQuery } from "react-query";

import styles from "./Search.module.scss";
import SearchList from "./SearchList/SearchList";
import { MovieService } from "@/services/movie.service";
import SearchField from "@/components/ui/searchfield/SearchField";
import { useDebounce } from "@/hooks/useDebounce";

const Search: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);

  const { isSuccess, data: movies } = useQuery(
    ["search movie list", debouncedSearch],
    () => MovieService.getMovies(debouncedSearch),
    {
      select: ({ data }) => data,
      enabled: !!debouncedSearch,
    }
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
      {isSuccess && <SearchList movies={movies || []} />}
    </div>
  );
};

export default Search;
