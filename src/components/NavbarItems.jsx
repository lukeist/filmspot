import { Circle } from "@chakra-ui/react";
import React from "react";

const NavbarItems = ({ handleClick, Icon, profile }) => {
  return (
    <Circle
      as={profile ? "" : "button"}
      size="30px"
      boxShadow="0px 0px 15px rgba(0, 0, 0, 0.2)"
      borderRadius="50%"
      _hover={{
        shadow: "none",
        filter: "brightness(1.2)",
        color: "#DAA520",
      }}
      onClick={handleClick}
    >
      <Icon as={Icon} />
    </Circle>
  );
};

export default NavbarItems;
