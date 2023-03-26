import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Box,
} from "@chakra-ui/react";

const Sidebar = ({ isOpen, onClose, title, children }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="md">
      <DrawerOverlay backdropFilter="blur(10px)" />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">{title}</DrawerHeader>
        <DrawerBody>
          <Box>{children}</Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
