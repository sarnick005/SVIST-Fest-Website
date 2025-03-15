import React from "react";

const Logo = ({ isMobile }) => {
  return (
    <div className="logo">
      <a href="/">
        <img
          style={{
            width: isMobile ? "35%" : "50%",
            borderRadius: isMobile ? "50px" : "40px",
          }}
          src="./img/logo.png"
          alt="logo"
        />
      </a>
    </div>
  );
};

export default Logo;
