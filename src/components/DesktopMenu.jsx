import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

const DesktopMenu = ({ navigate }) => {
  return (
    <div className="col-xl-6 col-lg-6">
      <div className="main-menu d-none d-lg-block">
        <nav>
          <ul id="navigation">
            <li style={{ padding: "0%" }}>
              <a
                style={{
                  fontFamily: "Arial",
                  fontWeight: "bold",
                }}
                href="/members"
              >
                Member
              </a>
            </li>
            <li style={{ padding: "0%" }}>
              <a
                style={{
                  fontFamily: "Arial",
                  fontWeight: "bold",
                }}
                href="/pasttour"
              >
                Past Tour
              </a>
            </li>
            <li style={{ padding: "0%" }}>
              <a
                style={{
                  fontFamily: "Arial",
                  fontWeight: "bold",
                }}
                href="/about"
              >
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
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DesktopMenu;
