import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

const Trailers = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobile = /Android|iPhone|iPod/i.test(userAgent);

    setIsDesktop(!isMobile);
  }, []);

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
      transform={isDesktop ? "scale(1.35)" : "translateX(30%)"}
      id="trailers"
    >
      {isDesktop ? (
        <iframe
          title="Trailers"
          src="https://www.youtube.com/embed/TZ_EndudJ8k&t=6?autoplay=1&mute=1&controls=0&loop=1&playlist=TZ_EndudJ8k"
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
          muted
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
