import React, { useState, useEffect } from "react";
import { Tooltip, Box, Button } from "@chakra-ui/react";

const CountdownTimer = ({ isLoggedIn, handleLogoutButton }) => {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const eventDate = new Date(2025, 2, 26);
      const _second = 1000;
      const _minute = _second * 60;
      const _hour = _minute * 60;
      const _day = _hour * 24;
      const currentDate = new Date();
      const distance = eventDate - currentDate;

      if (distance < 0) {
        const daysSinceStart = Math.floor(Math.abs(distance) / _day) + 1;
        if (daysSinceStart > 2) {
          setCountdown("See you next year!");
        } else {
          setCountdown(`Day ${daysSinceStart}`);
        }
      } else {
        const days = Math.floor(distance / _day);
        const hours = Math.floor((distance % _day) / _hour);
        const minutes = Math.floor((distance % _hour) / _minute);
        const seconds = Math.floor((distance % _minute) / _second);

        const timer = `${days}d ${hours < 10 ? "0" : ""}${hours}h ${
          minutes < 10 ? "0" : ""
        }${minutes}m ${seconds < 10 ? "0" : ""}${seconds}s`;

        setCountdown(timer);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {isLoggedIn && (
        <Tooltip label="Logout" aria-label="A tooltip">
          <Button
            bg="transparent"
            style={{ fontSize: "30px" }}
            _hover={{
              bg: "black.700",
              marginRight: "5px",
              borderRadius: "0px",
            }}
            onClick={handleLogoutButton}
          >
            👋
          </Button>
        </Tooltip>
      )}

      <Box
        as="a"
        style={{
          fontSize: "120%",
          color: "white",
          padding: "5px 15px",
          border: "2px solid red",
          borderRadius: "4px",
          display: "inline-block",
          transition: "all 0.3s ease",
        }}
        _hover={{
          backgroundColor: "rgba(255, 0, 0, 0.1)",
          textDecoration: "none",
        }}
      >
        {countdown}
      </Box>
    </>
  );
};

export default CountdownTimer;
