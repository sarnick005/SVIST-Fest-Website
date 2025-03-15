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
} from "@chakra-ui/react";

const MobileMenu = ({
  isLoggedIn,
  handleGalleryButton,
  handleLogoutButton,
  navigate,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div className="col-xl-3 col-lg-3 d-lg-block">
      <div className="buy_tkt">
        <div className="book_btn d-lg-block">
          <Button
            style={{
              bottom: "100px",
              fontSize: "200%",
              marginTop: "20px",
              color: "white",
            }}
            ref={btnRef}
            colorScheme="blackAlpha"
            onClick={onOpen}
          >
            ≡
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader
                style={{
                  color: "red",
                  fontFamily: "arial",
                  backgroundColor: "black",
                }}
              >
                ENTHUZEA
              </DrawerHeader>
              <DrawerBody style={{ backgroundColor: "black" }}>
                <div className="main-menu d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li style={{ padding: "1%", color: "white" }}>
                        <a href="/">Home</a>
                      </li>
                      <li style={{ padding: "1%", color: "white" }}>
                        <a href="/members">Member</a>
                      </li>
                      <li style={{ padding: "1%", color: "white" }}>
                        <a href="/pasttour">Past Tour</a>
                      </li>
                      <li style={{ padding: "1%", color: "white" }}>
                        <a href="/about">
                          About <i></i>
                        </a>
                      </li>
                      <Menu>
                        <MenuButton as={Button}>Events</MenuButton>
                        <MenuList>
                          <MenuItem onClick={() => navigate("/events")}>
                            Fest Info
                          </MenuItem>
                          <MenuItem onClick={() => navigate("/dept")}>
                            Dept. Info
                          </MenuItem>
                        </MenuList>
                      </Menu>
                      <br />
                      <Button
                        style={{ marginTop: "5px" }}
                        onClick={handleGalleryButton}
                      >
                        Gallery
                      </Button>
                      <br />
                      {isLoggedIn && (
                        <a
                          style={{ color: "white", marginLeft: "10px" }}
                          href="/publish-post"
                        >
                          Post
                        </a>
                      )}
                    </ul>
                  </nav>
                </div>
              </DrawerBody>
              <DrawerFooter style={{ backgroundColor: "black" }}>
                
                <Button
                  marginLeft={"10px"}
                  variant="outline"
                  mr={3}
                  onClick={onClose}
                  style={{ color: "white" }}
                >
                  Cancel
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
