import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Box,
  Flex,
  Text,
  Divider,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const MobileMenu = ({
  handleGalleryButton,
  handleLogoutButton,
  navigate: propsNavigate,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const location = useLocation();
  const navigate = propsNavigate || useNavigate();

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Member", href: "/members" },
    { label: "Past Tour", href: "/pasttour" },
    { label: "About", href: "/about" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="d-flex justify-content-end">
      <Button
        style={{
          color: "white",
          fontSize: "30px",
          padding: "0.5rem",
          background: "transparent",
        }}
        ref={btnRef}
        onClick={onOpen}
        aria-label="Open menu"
      >
        ≡
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay bg="rgba(0,0,0,0.4)" backdropFilter="blur(8px)" />
        <DrawerContent bg="black" boxShadow="0 0 20px rgba(255,0,0,0.2)">
          <DrawerCloseButton color="white" size="lg" m={2} />
          <DrawerHeader
            bg="black"
            borderBottomWidth="1px"
            borderColor="rgba(255,0,0,0.3)"
          >
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color="red.500"
              letterSpacing="wider"
              textTransform="uppercase"
              textShadow="0 0 10px rgba(255,0,0,0.5)"
            >
              ENTHUZEA
            </Text>
          </DrawerHeader>

          <DrawerBody pt={4} style={{ backgroundColor: "black" }}>
            <Flex direction="column" gap={2}>
              {menuItems.map((item, index) => (
                <Box key={index} transition="all 0.3s ease">
                  <Button
                    as="a"
                    href={item.href}
                    variant="ghost"
                    colorScheme="whiteAlpha"
                    color="white"
                    justifyContent="flex-start"
                    fontWeight="medium"
                    width="100%"
                    py={6}
                    borderRadius="md"
                    sx={{
                      textDecoration: isActive(item.href)
                        ? "underline"
                        : "none",
                      textDecorationThickness: "2px",
                      textUnderlineOffset: "4px",
                      textDecorationColor: "white",
                    }}
                    _hover={{
                      bg: "rgba(255,255,255,0.1)",
                      transform: "translateX(4px)",
                    }}
                  >
                    {item.label}
                  </Button>
                </Box>
              ))}

              <Divider my={2} borderColor="rgba(255,255,255,0.2)" />

              <Menu>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  colorScheme="whiteAlpha"
                  color="white"
                  width="100%"
                  justifyContent="space-between"
                  fontWeight="medium"
                  py={6}
                  borderRadius="md"
                  _hover={{ bg: "rgba(255,255,255,0.1)" }}
                  sx={{
                    textDecoration:
                      isActive("/events") || isActive("/dept")
                        ? "underline"
                        : "none",
                    textDecorationThickness: "2px",
                    textUnderlineOffset: "4px",
                    textDecorationColor: "white",
                  }}
                >
                  Events
                </MenuButton>
                <MenuList bg="gray.800" borderColor="gray.700">
                  <MenuItem
                    onClick={() => navigate("/events")}
                    bg="transparent"
                    color="white"
                    _hover={{ bg: "rgba(255,255,255,0.1)" }}
                  >
                    Fest Info
                  </MenuItem>
                  <MenuItem
                    onClick={() => navigate("/dept")}
                    bg="transparent"
                    color="white"
                    _hover={{ bg: "rgba(255,255,255,0.1)" }}
                  >
                    Dept. Info
                  </MenuItem>
                </MenuList>
              </Menu>

              <Button
                colorScheme="red"
                variant="solid"
                mt={2}
                py={6}
                _hover={{ bg: "red.600" }}
                _active={{ bg: "red.700" }}
                onClick={() => {
                  navigate("/pasttour");
                  onClose(); // Close the drawer after navigation
                }}
                sx={{
                  textDecoration: isActive("/pasttour") ? "underline" : "none",
                  textDecorationThickness: "2px",
                  textUnderlineOffset: "4px",
                  textDecorationColor: "white",
                }}
              >
                Gallery
              </Button>
            </Flex>
          </DrawerBody>

          <DrawerFooter
            style={{ backgroundColor: "black" }}
            borderTopWidth="1px"
            borderColor="rgba(255,0,0,0.3)"
          />
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
