import MovieList from "@/components/MovieList";
import { StarIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

const MainMovieList = ({
  movies,
  isBookmarked,
  isWatched,
  onBookmark,
  onRemove,
}) => {
  const [isLargerThanMobile] = useMediaQuery("(min-width: 480px)");

  return (
    <Box
      width={isLargerThanMobile ? "90%" : "100%"}
      pt={isLargerThanMobile ? 0 : "18vh"}
      pb="5vh"
    >
      <MovieList
        mainpage={true}
        movies={movies}
        isBookmarked={isBookmarked}
        isWatched={isWatched}
        onBookmark={onBookmark}
        onRemove={onRemove}
        columns={[2, 3, 4, 5]}
        fontSize={isLargerThanMobile ? 16 : 10}
        transform={isLargerThanMobile ? "scale(1)" : "scale(0.8)"}
        buttonIcon={(movie) =>
          isWatched(movie) ? (
            <ViewOffIcon />
          ) : isBookmarked(movie) ? (
            <StarIcon color="goldenrod" />
          ) : (
            <StarIcon color="goldenrod.500" />
          )
        }
      />
    </Box>
  );
};

export default MainMovieList;
