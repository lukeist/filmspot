import { SimpleGrid } from "@chakra-ui/react";
import MovieCard from "./MovieCard";

const MovieList = ({
  mainpage,
  movies,
  isBookmarked,
  isWatched,
  onBookmark,
  onRemove,
  columns,
  fontSize,
  transform,
  onMarkAsWatched,
  buttonIcon,
}) => {
  return (
    <SimpleGrid columns={columns} spacing={3} overflow="hidden">
      {movies.map((movie, index) => (
        <MovieCard
          mainpage={mainpage}
          key={movie.imdbID}
          movie={movie}
          index={index}
          isBookmarked={isBookmarked}
          isWatched={isWatched}
          onBookmark={onBookmark}
          onRemove={onRemove}
          fontSize={fontSize}
          transform={transform}
          onMarkAsWatched={onMarkAsWatched}
          buttonIcon={buttonIcon}
        />
      ))}
    </SimpleGrid>
  );
};

export default MovieList;
