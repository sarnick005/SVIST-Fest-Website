import React, { useState, useEffect } from "react";
import "./Timer.css";
import { useMediaQuery } from "@chakra-ui/react";

const Timer = ({ selectedDateTime }) => {
  const [countdown, setCountdown] = useState(null);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [eventStarted, setEventStarted] = useState(false);
  const [dayCount, setDayCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDateTime = Date.now();
      const difference = selectedDateTime - currentDateTime;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
        setEventStarted(false);
      } else {
        setEventStarted(true);
        const daysSinceStart =
          Math.floor(Math.abs(difference) / (1000 * 60 * 60 * 24)) + 1;

        if (daysSinceStart > 2) {
          setDayCount(-1);
        } else {
          setDayCount(daysSinceStart);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedDateTime]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  if (eventStarted) {
    return (
      <div className="timer-container">
        <div className="countdown-container">
          <div
            className="countdown"
            style={{
              fontSize: isMobile ? "150%" : "200%",
              width: "100%",
              textAlign: "center",
            }}
          >
            {dayCount === -1 ? "See you next year!" : `Day ${dayCount}`}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="timer-container">
      <div className="countdown-container">
        <div className="countdown countdown-days">
          {/* days */}
          <div className="card" style={{ width: "100%" }}>
            <div
              data-days
              className="display days"
              style={{ fontSize: isMobile ? "100%" : "100%" }}
            >
              {countdown && formatTime(countdown.days)}
            </div>
            <div className="front-display"></div>
            <div className="back-display"></div>
          </div>
          <div className="display-heading">Days</div>
        </div>

        {/* hours */}
        <div className="countdown countdown-hours">
          <div className="card" style={{ width: "100%" }}>
            <div
              data-hours
              className="display hours"
              style={{ fontSize: isMobile ? "100%" : "100%" }}
            >
              {countdown && formatTime(countdown.hours)}
            </div>
            <div className="front-display"></div>
            <div className="back-display"></div>
          </div>
          <div className="display-heading">Hours</div>
        </div>
        {/* minutes */}
        <div className="countdown countdown-minutes">
          <div className="card" style={{ width: "100%" }}>
            <div
              data-minutes
              className="display minutes"
              style={{ fontSize: isMobile ? "100%" : "100%" }}
            >
              {countdown && formatTime(countdown.minutes)}
            </div>
            <div className="front-display"></div>
            <div className="back-display"></div>
          </div>
          <div className="display-heading">Minutes</div>
        </div>

        {/* seconds */}
        <div className="countdown countdown-seconds">
          <div className="card" style={{ width: "100%" }}>
            <div
              data-seconds
              className="display seconds"
              style={{ fontSize: isMobile ? "100%" : "100%" }}
            >
              {countdown && formatTime(countdown.seconds)}
            </div>
            <div className="front-display"></div>
            <div className="back-display"></div>
          </div>
          <div className="display-heading">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
