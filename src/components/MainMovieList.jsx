import { BsFillBookmarkPlusFill, BsFillBookmarkStarFill } from "react-icons/bs";
import { useMediaQuery } from "@chakra-ui/react";
import { ViewOffIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import MovieList from "@/components/MovieList";

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
            // <StarIcon color="goldenrod" />
            <Box transform="scale(2)" color="goldenrod">
              <BsFillBookmarkStarFill />
            </Box>
          ) : (
            <Box transform="scale(2)">
              <BsFillBookmarkPlusFill />
            </Box>
          )
        }
      />
    </Box>
  );
};

export default MainMovieList;
