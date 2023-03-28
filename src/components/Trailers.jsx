import { Box } from "@chakra-ui/react";

const Trailers = () => {
  return (
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
  );
};

export default Trailers;
