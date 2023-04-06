import {
  Box,
  Container,
  Spinner,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { useMovieActions } from "@/hooks";
import { CloseIcon } from "@chakra-ui/icons";
import MainMovieList from "@/components/MainMovieList";
import MovieList from "@/components/MovieList";
import SearchBar from "@/components/SearchBar";
import NameCard from "@/components/NameCard";
import Trailers from "@/components/Trailers";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function Home() {
  const {
    movies,
    setMovies,
    addBookmark,
    bookmarkedMovies,
    watchedMovies,
    showBookmarks,
    showWatched,
    isVideoPlaying,
    handleSearch,
    handleMarkAsWatched,
    handleRemove,
    handleOpenBookmarks,
    handleCloseBookmarks,
    handleOpenWatched,
    handleCloseWatched,
    isBookmarked,
    isWatched,
    loading,
  } = useMovieActions();

  // Check if screen size is larger than mobile
  const [isLargerThanMobile] = useMediaQuery("(min-width: 480px)");

  return (
    <Container
      maxW="container.xl"
      pt="80px"
      minH="100vh"
      overflowX="hidden"
      position="relative"
    >
      {isVideoPlaying && <Trailers />}
      <Navbar
        onOpenBookmarks={handleOpenBookmarks}
        onOpenWatched={handleOpenWatched}
        setMovies={setMovies}
      />
      <VStack spacing={8} mt="25vh" mb="8vh">
        <SearchBar onSearch={handleSearch} movies={Boolean(movies.length)} />

        {loading ? (
          <Box transform="scale(3)">
            <Spinner />
          </Box>
        ) : (
          // <Text>Loading...</Text>
          <MainMovieList
            movies={movies}
            isBookmarked={isBookmarked}
            isWatched={isWatched}
            onBookmark={addBookmark}
            onRemove={handleRemove}
            onMarkAsWatched={handleMarkAsWatched}
          />
        )}

        <Sidebar
          isOpen={showBookmarks}
          onClose={handleCloseBookmarks}
          title="Bookmarked Movies"
        >
          <MovieList
            movies={bookmarkedMovies}
            isBookmarked={isBookmarked}
            isWatched={isWatched}
            onBookmark={addBookmark}
            onRemove={handleRemove}
            onMarkAsWatched={handleMarkAsWatched}
            showMarkAsWatched
            columns={[2, 3]}
            fontSize={isLargerThanMobile ? 10 : 8}
            transform="scale(0.8)"
            buttonIcon={() => <CloseIcon />}
          />
        </Sidebar>

        <Sidebar
          isOpen={showWatched}
          onClose={handleCloseWatched}
          title="Watched Movies"
        >
          <MovieList
            movies={watchedMovies}
            isBookmarked={isBookmarked}
            isWatched={isWatched}
            onBookmark={addBookmark}
            onRemove={handleRemove}
            columns={[2, 3]}
            fontSize={isLargerThanMobile ? 10 : 8}
            transform="scale(0.8)"
            buttonIcon={() => <CloseIcon />}
          />
        </Sidebar>
      </VStack>
      <NameCard />
    </Container>
  );
}
