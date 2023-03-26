import { CloseIcon, StarIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Box, Container, useMediaQuery, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MovieList from "@/components/MovieList";
import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/NameCard";
import NameCard from "@/components/NameCard";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [showWatched, setShowWatched] = useState(false);
  const [isLargerThanMobile] = useMediaQuery("(min-width: 480px)");
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  // update the isVideoPlaying state when the movies array changes
  useEffect(() => {
    setIsVideoPlaying(movies.length === 0);
  }, [movies]);

  useEffect(() => {
    const storedBookmarkedMovies = localStorage.getItem("bookmarkedMovies");
    if (storedBookmarkedMovies) {
      setBookmarkedMovies(JSON.parse(storedBookmarkedMovies));
    }

    const storedWatchedMovies = localStorage.getItem("watchedMovies");
    if (storedWatchedMovies) {
      setWatchedMovies(JSON.parse(storedWatchedMovies));
    }
  }, []);

  const handleSearch = async (searchValue) => {
    const response = await fetch(`/api/movies?search=${searchValue}`);
    const data = await response.json();
    setMovies(data.Search || []);
  };

  const handleBookmark = (movie) => {
    const newMovie = JSON.parse(JSON.stringify(movie));
    setBookmarkedMovies((prevBookmarkedMovies) => {
      const updatedBookmarkedMovies = [...prevBookmarkedMovies, newMovie];
      localStorage.setItem(
        "bookmarkedMovies",
        JSON.stringify(updatedBookmarkedMovies)
      );
      return updatedBookmarkedMovies;
    });
  };

  const handleMarkAsWatched = (movie) => {
    const newMovie = JSON.parse(JSON.stringify(movie));
    setBookmarkedMovies((prevBookmarkedMovies) => {
      const updatedBookmarkedMovies = prevBookmarkedMovies.filter(
        (m) => m.imdbID !== movie.imdbID
      );
      localStorage.setItem(
        "bookmarkedMovies",
        JSON.stringify(updatedBookmarkedMovies)
      );
      return updatedBookmarkedMovies;
    });

    setWatchedMovies((prevWatchedMovies) => {
      const updatedWatchedMovies = [...prevWatchedMovies, newMovie];
      localStorage.setItem(
        "watchedMovies",
        JSON.stringify(updatedWatchedMovies)
      );
      return updatedWatchedMovies;
    });
  };

  const handleRemoveBookmark = (movieToRemove) => {
    setBookmarkedMovies((prevBookmarkedMovies) => {
      const updatedBookmarkedMovies = prevBookmarkedMovies.filter(
        (movie) => movie.imdbID !== movieToRemove.imdbID
      );
      localStorage.setItem(
        "bookmarkedMovies",
        JSON.stringify(updatedBookmarkedMovies)
      );
      return updatedBookmarkedMovies;
    });
  };

  const handleRemoveWatched = (movieToRemove) => {
    setWatchedMovies((prevWatchedMovies) => {
      const updatedWatchedMovies = prevWatchedMovies.filter(
        (movie) => movie.imdbID !== movieToRemove.imdbID
      );
      localStorage.setItem(
        "watchedMovies",
        JSON.stringify(updatedWatchedMovies)
      );
      return updatedWatchedMovies;
    });
  };

  const handleRemove = (movieToRemove, listType) => {
    if (listType === "bookmarked") {
      handleRemoveBookmark(movieToRemove);
    } else if (listType === "watched") {
      handleRemoveWatched(movieToRemove);
    }
  };

  const handleOpenBookmarks = () => {
    setShowBookmarks(true);
  };

  const handleCloseBookmarks = () => {
    setShowBookmarks(false);
  };

  const handleOpenWatched = () => {
    setShowWatched(true);
  };

  const handleCloseWatched = () => {
    setShowWatched(false);
  };

  const isBookmarked = (movie) =>
    bookmarkedMovies.some((m) => m.imdbID === movie.imdbID);

  const isWatched = (movie) =>
    watchedMovies.some((m) => m.imdbID === movie.imdbID);

  return (
    <Container
      maxW="container.xl"
      pt="80px"
      minH="100vh"
      overflowX="hidden"
      position="relative"
    >
      {isVideoPlaying && (
        <Box
          position="fixed"
          as="div"
          top="0"
          left="0"
          zIndex="-99"
          w="100%"
          h="100%"
          overflow="hidden"
          transform="scale(1.35)"
          id="trailers"
        >
          <iframe
            title="Trailers"
            src="https://www.youtube.com/embed/7NUZ_SDiG2o&t=6?autoplay=1&mute=1&controls=0&loop=1&playlist=7NUZ_SDiG2o"
            // frameBorder="0"
            allowFullScreen
            allow="autoplay; encrypted-media"
            style={{
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              position: "absolute",
              pointerEvents: "none",
              objectFit: "cover",
            }}
            playsInline
          />
        </Box>
      )}

      <Navbar
        onOpenBookmarks={handleOpenBookmarks}
        onOpenWatched={handleOpenWatched}
        setMovies={setMovies}
      />
      <VStack spacing={8} mt="25vh" mb="8vh">
        <SearchBar onSearch={handleSearch} movies={Boolean(movies.length)} />
        <Box width={isLargerThanMobile ? "90%" : "100%"}>
          <MovieList
            mainpage={true}
            movies={movies}
            isBookmarked={isBookmarked}
            isWatched={isWatched}
            onBookmark={handleBookmark}
            onRemove={handleRemove}
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
        <Sidebar
          isOpen={showBookmarks}
          onClose={handleCloseBookmarks}
          title="Bookmarked Movies"
        >
          <MovieList
            movies={bookmarkedMovies}
            isBookmarked={isBookmarked}
            isWatched={isWatched}
            onBookmark={handleBookmark}
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
            onBookmark={handleBookmark}
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
