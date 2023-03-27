export const handleSearch = async (searchValue, setMovies) => {
  const response = await fetch(`/api/movies?search=${searchValue}`);
  const data = await response.json();
  setMovies(data.Search || []);
};

export const handleMarkAsWatched = (movie, removeBookmark, addWatched) => {
  removeBookmark(movie, true); // Pass true to skip the toast for removing a bookmark
  addWatched(movie);
};

export const handleRemove = (
  movieToRemove,
  listType,
  removeBookmark,
  removeWatched
) => {
  if (listType === "bookmarked") {
    removeBookmark(movieToRemove);
  } else if (listType === "watched") {
    removeWatched(movieToRemove);
  }
};
