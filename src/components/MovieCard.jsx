import { ViewOffIcon } from "@chakra-ui/icons";
import { Box, Image, Text, Button, useMediaQuery } from "@chakra-ui/react";
import styles from "@/styles/styles.module.css";
import { useState } from "react";

const MovieCard = ({
  mainpage,
  movie,
  index,
  isBookmarked,
  isWatched,
  onBookmark,
  onRemove,
  fontSize,
  transform,
  onMarkAsWatched,
  buttonIcon,
}) => {
  // const animationDelay = `${index * 100}ms`;
  const [removing, setRemoving] = useState(false); // Add a new state for handling the removal animation

  const handleButtonClick = async (movie) => {
    if (isWatched(movie) || isBookmarked(movie)) {
      setRemoving(true); // Start the removal animation
      await new Promise((resolve) => setTimeout(resolve, 400)); // Wait for the animation to complete
    }

    if (isWatched(movie)) {
      onRemove(movie, "watched");
    } else if (isBookmarked(movie)) {
      onRemove(movie, "bookmarked");
    } else {
      onBookmark(movie);
    }
  };

  const handleMarkAsWatchedClick = (movie) => {
    onMarkAsWatched(movie);
  };

  const posterImage =
    movie.Poster === "N/A"
      ? "https://i.ibb.co/yqMXJz9/image-not-available.jpg?text=Image+Unavailable"
      : movie.Poster;

  return (
    <Box
      overflow="hidden"
      position="relative"
      _hover={{
        shadow: "none",
        ".movieImage": {
          filter: "brightness(1.2)",
        },
      }}
      className={`${styles.fadeIn} ${
        removing ? (mainpage ? "" : styles.exitAnimation) : ""
      }`} // Add the exitAnimation class when removing
      // style={{ animationDelay }} // Set the animation delay
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="85%"
        backgroundColor="black"
        opacity={isWatched(movie) ? 0.7 : 0}
        transition="all ease 0.3s"
        zIndex={1}
      />

      <Image
        className="movieImage"
        src={posterImage}
        alt={movie.Title}
        width="100%"
        height="85%"
        objectFit="cover"
        transition="ease 0.3s"
      />
      <Text mt={0} fontSize={{ base: "12px", md: fontSize }}>
        {movie.Title}
      </Text>

      <Box
        position="absolute"
        right="3%"
        top="3%"
        display="flex"
        flexDirection="column"
        gap={2}
      >
        <Button
          bg="black"
          color="white"
          _hover={{
            bg: "white",
            color: "black",
          }}
          onClick={() => handleButtonClick(movie)}
          whiteSpace="nowrap"
          width="10px"
          transform={transform}
          opacity={isWatched(movie) || isBookmarked(movie) ? 1 : 0.5}
          zIndex={3}
        >
          {buttonIcon(movie)}
        </Button>

        <Button
          bg="black"
          color="white"
          _hover={{
            bg: "white",
            color: "black",
          }}
          onClick={() => handleMarkAsWatchedClick(movie)}
          whiteSpace="nowrap"
          width="10px"
          transform={
            isBookmarked(movie)
              ? transform
              : isWatched(movie)
              ? "translateY(-100%)"
              : "translateY(0%)"
          }
          opacity={isBookmarked(movie) ? 1 : isWatched(movie) ? 0 : 0.5}
          transition="all ease 0.3s"
          zIndex="2"
          // className={disappearing ? styles.slideUp : styles.slideDown}
        >
          <ViewOffIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default MovieCard;
