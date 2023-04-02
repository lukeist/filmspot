import { useState, useEffect } from "react";
import useBookmarks from "./useBookmarks";
import useWatched from "./useWatched";

export const useMovieActions = () => {
  const [movies, setMovies] = useState([]); // store and update the movies fetched from the API
  const { bookmarkedMovies, addBookmark, removeBookmark } = useBookmarks(); // manage bookmarked movies
  const { watchedMovies, addWatched, removeWatched } = useWatched(); // manage watched movies
  const [showBookmarks, setShowBookmarks] = useState(false); // control the visibility of the bookmarked movies sidebar
  const [showWatched, setShowWatched] = useState(false); // control the visibility of the watched movies sidebar
  const [isVideoPlaying, setIsVideoPlaying] = useState(true); // manage the video playing state
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsVideoPlaying(movies.length === 0);
  }, [movies]);

  const handleSearch = async (searchValue) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/movies?search=${searchValue}`);
      const data = await response.json();
      setMovies(data.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsWatched = (movie) => {
    removeBookmark(movie, true); // Pass true to skip the toast for removing a bookmark
    addWatched(movie);
  };

  const handleRemove = (movieToRemove, listType) => {
    if (listType === "bookmarked") {
      removeBookmark(movieToRemove);
    } else if (listType === "watched") {
      removeWatched(movieToRemove);
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

  return {
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
  };
};
