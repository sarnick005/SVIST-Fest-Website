import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const DesktopMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Function to check if the current path matches
  const isActive = (path) => location.pathname === path;

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
                  textDecoration: isActive("/members") ? "underline" : "none",
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
                  textDecoration: isActive("/pasttour") ? "underline" : "none",
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
                  textDecoration: isActive("/about") ? "underline" : "none",
                }}
                href="/about"
              >
                About
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
