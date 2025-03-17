import React from "react";

const Logo = ({ isMobile }) => {
  return (
    <div className="logo">
      <a href="/">
        <img
          style={{
            width: isMobile ? "70%" : "50%",
            borderRadius: isMobile ? "50px" : "40px",
            paddingLeft: isMobile ? "10px" : "0",
            marginTop: isMobile ? "-15px" : "-25px",
          }}
          src="./img/logo.png"
          alt="logo"
        />
      </a>
    </div>
  );
};

export default Logo;
