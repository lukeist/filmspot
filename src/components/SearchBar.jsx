import {
  Box,
  Input,
  IconButton,
  FormControl,
  FormLabel,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = ({ onSearch, movies }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchValue);
    setSearchValue("");
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      position="absolute"
      top={`${movies ? "16%" : "42%"}`}
      left="50%"
      transform="translate(-50%, -50%)"
      w="600px"
      maxW="90%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      transition="top 0.8s ease"
    >
      <Heading
        as="h1"
        size="2xl"
        mb={2}
        fontWeight="light"
        letterSpacing="10px"
      >
        FLIKDEX
      </Heading>

      <Text fontSize="xs" mb={2} color="gray.500">
        Watch smarter, not harder.
      </Text>

      <Text fontSize="md" mb={8} color="gray.500">
        🍿
      </Text>

      <Box
        position="relative"
        display="flex"
        alignItems="center"
        // bg="black"
        color="white"
        opacity="0.7"
        w="100%"
        bg="linear-gradient(to right, purple, red)"
      >
        <FormControl id="search" w="100%">
          <Input
            type="text"
            value={searchValue}
            placeholder="Search for movies..."
            onChange={(e) => setSearchValue(e.target.value)}
            boxShadow="0px 0px 30px rgba(0, 0, 0, 0.15)"
            border="2px solid transparent"
            borderRadius="0"
            _hover={{
              borderImageSource:
                "linear-gradient(to right,  rgba(160, 30, 240, 0.5), rgba(255, 0, 0, 0.5))",
              borderWidth: "2px",
              borderImageSlice: 1,
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.15)",
            }}
            _focus={{
              borderImageSource: "linear-gradient(to right, purple, red )",
              // boxShadow: "none",
              outline: "none",
            }}
          />
        </FormControl>
        <IconButton
          type="submit"
          aria-label="Search"
          icon={<SearchIcon color="white" />}
          bg="linear-gradient(to bottom right, red, red, purple)"
          opacity="0.8"
          borderRadius="0"
          position="absolute"
          right="0"
          _hover={{
            opacity: 1,
            filter: "brightness(1.5)",
          }}
        />
      </Box>
    </Box>
  );
};

export default SearchBar;
