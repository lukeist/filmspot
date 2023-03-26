import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  bg: "black",
};

const theme = extendTheme({ config });

export default theme;
