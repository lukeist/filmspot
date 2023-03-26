import { Box, Heading, VStack, Button, Text, useToast } from "@chakra-ui/react";

const BookmarkedMovies = ({ movies, onRemoveBookmark, onMarkAsWatched }) => {
  const toast = useToast();

  const handleRemoveBookmark = (movie) => {
    onRemoveBookmark(movie);
    toast({
      title: "Bookmark removed.",
      description: `${movie.Title} has been removed from your bookmarks.`,
      status: "warning",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleMarkAsWatched = (movie) => {
    onMarkAsWatched(movie);
    toast({
      title: "Movie marked as watched.",
      description: `${movie.Title} has been marked as watched.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box>
      <Heading as="h2" size="xl" mb={4}>
        Bookmarked Movies
      </Heading>
      <VStack spacing={4}>
        {movies.map((movie) => (
          <Box key={movie.imdbID}>
            <Text fontWeight="semibold" as="h4" lineHeight="tight">
              {movie.Title}
            </Text>
            <Button
              size="sm"
              colorScheme="red"
              onClick={() => handleRemoveBookmark(movie)}
            >
              Remove
            </Button>
            <Button
              size="sm"
              colorScheme="green"
              onClick={() => handleMarkAsWatched(movie)}
            >
              Mark as watched
            </Button>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default BookmarkedMovies;
