import { StarIcon, MoonIcon, SunIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import NavbarItems from "./NavbarItems";
import Image from "next/image";

const Navbar = ({ onOpenBookmarks, onOpenWatched, setMovies }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [scrolled, setScrolled] = useState(false);

  // show NavBar's BG when scroll to a certain point
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const UserIcon = () => {
    return (
      <Box
        as="button"
        width="30px"
        height="30px"
        borderRadius="50%"
        overflow="hidden"
      >
        <Image
          src="https://i.ibb.co/Y85zXSt/user3.jpg"
          alt="User Avatar"
          width="50"
          height="50"
        />
      </Box>
    );
  };
  return (
    <Flex
      as="nav"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      alignItems="center"
      justifyContent="center"
      margin="0 auto"
      px={4}
      py={4}
      overflowX="hidden"
      backgroundColor={
        scrolled
          ? colorMode === "light"
            ? "white"
            : "gray.800"
          : "transparent"
      }
      boxShadow={scrolled ? "lg" : "none"}
      transition="all 0.3s ease-in-out"
    >
      <Box onClick={() => setMovies([])} cursor="pointer">
        <Image src="/logo.png" alt="Flickdex" width={27} height={27} />
      </Box>
      <Spacer flex={0.7} />
      <Flex gap="10">
        <NavbarItems handleClick={onOpenBookmarks} Icon={StarIcon} />
        <NavbarItems handleClick={onOpenWatched} Icon={ViewOffIcon} />
        <NavbarItems
          handleClick={toggleColorMode}
          Icon={colorMode === "light" ? MoonIcon : SunIcon}
        />
        <NavbarItems handleClick={() => null} Icon={UserIcon} profile={true} />
      </Flex>
    </Flex>
  );
};

export default Navbar;
