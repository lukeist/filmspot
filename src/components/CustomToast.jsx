import { Box } from "@chakra-ui/react";

const CustomToast = ({ title, description, onClose }) => {
  return (
    <Box
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      bg="black"
      color="white"
      p={4}
      borderRadius="md"
      boxShadow="md"
      maxWidth="320px"
      position="relative"
    >
      <Text fontWeight="bold">{title}</Text>
      <Text mt={2}>{description}</Text>
      <CloseButton
        position="absolute"
        top="8px"
        right="8px"
        color="white"
        onClick={onClose}
      />
    </Box>
  );
};

export default CustomToast;
