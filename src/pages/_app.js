import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import "@/styles/globals.css";
import * as React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
