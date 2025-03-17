import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const DesktopMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Function to check if the current path matches
  const isActive = (path) => location.pathname === path;

  // Check if any events page is active
  const isEventsActive = () => {
    return isActive("/events") || isActive("/dept");
  };

  // Common style for links with improved underline padding
  const linkStyle = (path) => ({
    fontFamily: "Arial",
    fontWeight: "bold",
    textDecoration: isActive(path) ? "underline" : "none",
    textUnderlineOffset: "4px", // Adds space between text and underline
    textDecorationThickness: "2px", // Makes the underline slightly thicker
    padding: "2px 0", // Additional padding for the text itself
  });

  return (
    <div className="col-xl-6 col-lg-6">
      <div className="main-menu d-none d-lg-block">
        <nav>
          <ul id="navigation" style={{ marginTop: "-10px" }}>
            <li style={{ padding: "5px 0" }}>
              <a style={linkStyle("/members")} href="/members">
                Member
              </a>
            </li>
            <li style={{ padding: "5px 0" }}>
              <a style={linkStyle("/pasttour")} href="/pasttour">
                Past Tour
              </a>
            </li>
            <li style={{ padding: "5px 0" }}>
              <a style={linkStyle("/about")} href="/about">
                About
              </a>
            </li>
            <Menu>
              <MenuButton
                as={Button}
                style={{
                  marginTop: "-5px",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                  textDecoration: isEventsActive() ? "underline" : "none",
                  textUnderlineOffset: "4px",
                  textDecorationThickness: "2px",
                  textDecorationColor: "black",
                }}
              >
                Events
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={() => navigate("/events")}
                  style={{
                    fontWeight: isActive("/events") ? "bold" : "normal",
                    backgroundColor: isActive("/events")
                      ? "rgba(0,0,0,0.05)"
                      : "transparent",
                  }}
                >
                  Fest Info
                </MenuItem>
                <MenuItem
                  onClick={() => navigate("/dept")}
                  style={{
                    fontWeight: isActive("/dept") ? "bold" : "normal",
                    backgroundColor: isActive("/dept")
                      ? "rgba(0,0,0,0.05)"
                      : "transparent",
                  }}
                >
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
