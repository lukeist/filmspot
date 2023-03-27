import { useState, useEffect } from "react";
// import { Box, Text, useToast } from "@chakra-ui/react";

// This hook manages the state of bookmarked movies.
// It stores the list of bookmarked movies in the bookmarkedMovies state and synchronizes it with the local storage.
// The hook provides functions addBookmark and removeBookmark to add and remove movies from the bookmarked list, respectively. It also displays toasts to notify users when a movie is added or removed from the bookmarks.
const useBookmarks = () => {
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]); // store and update the list of watched movies
  // const toast = useToast();

  useEffect(() => {
    const storedBookmarkedMovies = localStorage.getItem("bookmarkedMovies");
    if (storedBookmarkedMovies) {
      setBookmarkedMovies(JSON.parse(storedBookmarkedMovies));
    }
  }, []);

  // add a movie to the bookmarked list and update local storage.
  const addBookmark = (movie) => {
    const newMovie = JSON.parse(JSON.stringify(movie));
    setBookmarkedMovies((prevBookmarkedMovies) => {
      const updatedBookmarkedMovies = [...prevBookmarkedMovies, newMovie];
      localStorage.setItem(
        "bookmarkedMovies",
        JSON.stringify(updatedBookmarkedMovies)
      );
      // toast({
      //   title: "Movie bookmarked.",
      //   // description: `${movie.Title} has been added to your bookmarks.`,
      //   status: "success",
      //   duration: 3000,
      //   isClosable: true,
      //   render: () => (
      //     <Box color="white" p={3} bg="black">
      //       <Text fontWeight="bold" textAlign="center">
      //         {movie.Title}
      //       </Text>{" "}
      //       has been added to your bookmarks.
      //     </Box>
      //   ),

      //   style: {
      //     backgroundColor: "black",
      //     color: "white",
      //     border: "2px solid white",
      //     borderRadius: "8px",
      //     bottom: "50px",
      //     left: "50%",
      //     transform: "translateX(-50%)",
      //   },
      // });
      return updatedBookmarkedMovies;
    });
  };

  // remove a movie from the bookmarked list and update local storage
  const removeBookmark = (movieToRemove) => {
    setBookmarkedMovies((prevBookmarkedMovies) => {
      const updatedBookmarkedMovies = prevBookmarkedMovies.filter(
        (movie) => movie.imdbID !== movieToRemove.imdbID
      );
      localStorage.setItem(
        "bookmarkedMovies",
        JSON.stringify(updatedBookmarkedMovies)
      );
      // toast({
      //   title: "Bookmark removed.",
      //   description: `${movieToRemove.Title} has been removed from your bookmarks.`,
      //   status: "info",
      //   duration: 3000,
      //   isClosable: true,
      // });
      return updatedBookmarkedMovies;
    });
  };

  return { bookmarkedMovies, addBookmark, removeBookmark };
};

export default useBookmarks;
