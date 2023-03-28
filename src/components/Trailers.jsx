import { Box } from "@chakra-ui/react";
import Image from "next/image";

const Trailers = ({ isLargerThanMobile }) => {
  return (
    <Box
      as="div"
      position="fixed"
      top="0"
      left="0"
      zIndex="-99"
      w="100%"
      h="100%"
      overflow="hidden"
      transform={isLargerThanMobile ? "scale(1.35)" : "translateX(24%)"}
      id="trailers"
    >
      {isLargerThanMobile ? (
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
      ) : (
        <Image
          src="/images/filmspot-mobile-bg.gif"
          alt="Mobile BG"
          width={480}
          height={853}
        />
      )}
    </Box>
  );
};

export default Trailers;
