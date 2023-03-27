import { useState, useEffect } from "react";
// import { useToast } from "@chakra-ui/react";

// This hook manages the state of watched movies.
// It stores the list of watched movies in the watchedMovies state and synchronizes it with the local storage.
// The hook provides functions addWatched and removeWatched to add and remove movies from the watched list, respectively.
const useWatched = () => {
  const [watchedMovies, setWatchedMovies] = useState([]); // store and update the list of watched movies
  // const toast = useToast();

  useEffect(() => {
    const storedWatchedMovies = localStorage.getItem("watchedMovies");
    if (storedWatchedMovies) {
      setWatchedMovies(JSON.parse(storedWatchedMovies));
    }
  }, []);

  // add a movie to the watched list and update local storage
  const addWatched = (movie) => {
    const newMovie = JSON.parse(JSON.stringify(movie));
    setWatchedMovies((prevWatchedMovies) => {
      const updatedWatchedMovies = [...prevWatchedMovies, newMovie];
      localStorage.setItem(
        "watchedMovies",
        JSON.stringify(updatedWatchedMovies)
      );
      // toast({
      //   title: "Movie marked as watched.",
      //   description: `${movie.Title} has been added to your watched list.`,
      //   status: "success",
      //   duration: 3000,
      //   isClosable: true,
      // });
      return updatedWatchedMovies;
    });
  };

  // remove a movie from the watched list and update local storage
  const removeWatched = (movieToRemove) => {
    setWatchedMovies((prevWatchedMovies) => {
      const updatedWatchedMovies = prevWatchedMovies.filter(
        (movie) => movie.imdbID !== movieToRemove.imdbID
      );
      localStorage.setItem(
        "watchedMovies",
        JSON.stringify(updatedWatchedMovies)
      );
      // toast({
      //   title: "Movie removed from watched list.",
      //   description: `${movieToRemove.Title} has been removed from your watched list.`,
      //   status: "info",
      //   duration: 3000,
      //   isClosable: true,
      // });
      return updatedWatchedMovies;
    });
  };

  return { watchedMovies, addWatched, removeWatched };
};

export default useWatched;
