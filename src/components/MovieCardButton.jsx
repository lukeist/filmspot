import React from "react";
import { Button } from "@chakra-ui/react";

const MovieCardButton = ({
  movie,
  isWatched,
  isBookmarked,
  handleClick,
  icon,
}) => {
  const buttonOpacity = () => {
    if (isWatched && isWatched(movie)) return 1;
    if (isBookmarked && isBookmarked(movie)) return 1;
    return 0.5;
  };

  return (
    <Button
      bg="black"
      color="white"
      _hover={{
        bg: "white",
        color: "black",
      }}
      onClick={() => handleClick(movie)}
      position="absolute"
      right="10px"
      top={isWatched ? "3%" : "25%"}
      whiteSpace="nowrap"
      width="20px"
      borderRadius="50%"
      opacity={buttonOpacity()}
      zIndex="3"
    >
      {icon}
    </Button>
  );
};

export default MovieCardButton;
