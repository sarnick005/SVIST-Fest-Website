import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { useAuth } from "./utils/AuthContext";
import { useMediaQuery } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import CountdownTimer from "./CountdownTimer";
import Logo from "./Logo";

const Header = ({ color }) => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [colorChange, setColorchange] = useState(false);
  const navigate = useNavigate();

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  const handleLogoutButton = async () => {
    try {
      await axios.post("");
      setIsLoggedIn(false);
      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const handleGalleryButton = async () => {
    try {
      navigate("/gallery");
    } catch (error) {
      console.error("Navigation failed", error);
    }
  };

  return (
    <>
      <header>
        <div
          style={{
            backgroundColor: colorChange ? "black" : color,
            backgroundAttachment: "fixed",
            position: "fixed",
            height: isMobile ? "15%" : "",
            transition: "background-color 0.3s ease-in-out", 
          }}
          className="header-area"
        >
          <div
            style={{
              height: "150px",
            }}
            id="sticky-header"
            className="main-header-area"
          >
            <div className="container">
              <div className="header_bottom_border">
                <div className="row align-items-center">
                  <div
                    className="col-xl-3 col-lg-3"
                    style={{ display: "inline" }}
                  >
                    <Logo isMobile={isMobile} />
                  </div>

                  {isMobile ? (
                    <MobileMenu
                      isLoggedIn={isLoggedIn}
                      handleGalleryButton={handleGalleryButton}
                      handleLogoutButton={handleLogoutButton}
                      navigate={navigate}
                    />
                  ) : (
                    <DesktopMenu navigate={navigate} />
                  )}

                  <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                    <div className="buy_tkt">
                      <div
                        className="book_btn d-none d-lg-block"
                        style={{ display: isMobile ? "" : "" }}
                      >
                        <CountdownTimer
                          isLoggedIn={isLoggedIn}
                          handleLogoutButton={handleLogoutButton}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="mobile_menu d-block d-lg-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </header>
    </>
  );
};

export default Header;
