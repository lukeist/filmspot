import { Box, Divider, Link, Text } from "@chakra-ui/react";
import {
  FaGithub,
  FaLinkedin,
  FaInfoCircle,
  FaFingerprint,
} from "react-icons/fa";

const NameCard = () => {
  const info = [
    {
      href: "https://docs.google.com/document/d/1465-JFPBTugiLQRax7ecH9ygbiHJdI3oSMiisXlbjUo/edit?usp=sharing",
      icon: <FaInfoCircle fontSize="20px" />,
    },
    {
      href: "https://github.com/hiluan/flikdex.git",
      icon: <FaGithub fontSize="20px" />,
    },
    {
      href: "https://www.linkedin.com/in/hiluan/",
      icon: <FaLinkedin fontSize="20px" />,
    },
    {
      href: "https://hiluan.dev/apps",
      icon: <FaFingerprint fontSize="20px" />,
    },
  ];

  return (
    <Box
      position="absolute"
      bottom="20px"
      right="0"
      left="0"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="1"
    >
      <Divider my={3} />
      <Box display="flex" justifyContent="center" gap="3">
        {info.map((i, index) => (
          <Link
            key={index}
            href={i.href}
            cursor="pointer"
            opacity="0.3"
            _hover={{ opacity: 1 }}
          >
            {i.icon}
          </Link>
        ))}
      </Box>
      <Text textAlign="center" fontSize="xs" width="270px" opacity="0.3">
        © 2023 - Luan Pham @ Stonks
      </Text>
    </Box>
  );
};

export default NameCard;
