import { Box, Heading, VStack, Button, Text, useToast } from "@chakra-ui/react";

const WatchedMovies = ({ movies, onRemove }) => {
  const toast = useToast();

  const handleRemove = (movie) => {
    onRemove(movie);
    toast({
      title: "Movie removed.",
      description: `${movie.Title} has been removed from watched movies.`,
      status: "warning",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box>
      <Heading as="h2" size="xl" mb={4}>
        Watched Movies
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
              onClick={() => handleRemove(movie)}
            >
              Remove
            </Button>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default WatchedMovies;
