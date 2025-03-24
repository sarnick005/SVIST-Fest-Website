import { useEffect, useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import TimerDisplay from "./TimerDisplay";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);

const EventDayMessage = ({
  dayNumber,
  isMobile,
  containerVariants,
  itemVariants,
}) => {
  const [colorIndex, setColorIndex] = useState(0);

  const vibgyorColors = [
    "#FF5733", 
    "#FFCC00", 
    "#33FF57", 
    "#33CFFF", 
    "#FF33A8", 
    "#8D33FF", 
    "#FF3333", 
    "#00FFCC", 
    "#FFD700", 
    "#FF6600", 
    "#00FF00", 
    "#FF1493", 
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % vibgyorColors.length);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <MotionBox variants={containerVariants} initial="hidden" animate="show">
      <MotionHeading
        color={vibgyorColors[colorIndex]}
        mb={6}
        fontSize={isMobile ? "3xl" : "5xl"}
        variants={itemVariants}
        transition={{ duration: 0.3 }}
      >
        ENTHUZEA 2025 is Live
      </MotionHeading>
      <MotionHeading
        color="white"
        mb={6}
        fontSize={isMobile ? "2xl" : "4xl"}
        variants={itemVariants}
      >
        Day {dayNumber}
      </MotionHeading>
    </MotionBox>
  );
};

const EventEndedMessage = ({ isMobile, containerVariants, itemVariants }) => {
  return (
    <MotionBox variants={containerVariants} initial="hidden" animate="show">
      <MotionHeading
        color="purple.400"
        mb={6}
        fontSize={isMobile ? "3xl" : "5xl"}
        variants={itemVariants}
      >
        ENTHUZEA 2025
      </MotionHeading>
      <MotionHeading
        color="white"
        mb={6}
        fontSize={isMobile ? "2xl" : "4xl"}
        variants={itemVariants}
      >
        See You Next Year!
      </MotionHeading>
    </MotionBox>
  );
};

const TimerUpdated = ({ selectedDateTime, eventDuration = 2 }) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [eventStatus, setEventStatus] = useState("countdown");
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [currentDay, setCurrentDay] = useState(0);

  useEffect(() => {
    const calculateTimeStatus = () => {
      const now = new Date();
      const eventStart = new Date(selectedDateTime);
      const difference = eventStart - now;

      const msPerDay = 24 * 60 * 60 * 1000;
      const daysSinceStart = Math.floor((now - eventStart) / msPerDay) + 1;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
        setEventStatus("countdown");
      } else if (daysSinceStart <= eventDuration) {
        setCurrentDay(daysSinceStart);
        setEventStatus("inProgress");
      } else {
        setEventStatus("ended");
      }
    };

    calculateTimeStatus();
    const interval = setInterval(calculateTimeStatus, 1000);

    return () => clearInterval(interval);
  }, [selectedDateTime, eventDuration]);

  const digitStyle = {
    display: "inline-block",
    background: "rgba(255, 255, 255, 0.1)",
    padding: isMobile ? "10px 15px" : "15px 20px",
    borderRadius: "8px",
    fontWeight: "bold",
    minWidth: isMobile ? "45px" : "60px",
    textAlign: "center",
    margin: "0 2px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300 } },
  };

  const digitVariants = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    exit: { opacity: 1 },
  };

  return (
    <MotionBox
      bg="black"
      py={8}
      textAlign="center"
      position="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <AnimatePresence mode="wait">
        {eventStatus === "countdown" && (
          <TimerDisplay
            key="countdown"
            timeRemaining={timeRemaining}
            containerVariants={containerVariants}
            itemVariants={itemVariants}
            digitVariants={digitVariants}
            digitStyle={digitStyle}
            isMobile={isMobile}
          />
        )}

        {eventStatus === "inProgress" && (
          <EventDayMessage
            key="event-day"
            dayNumber={currentDay}
            isMobile={isMobile}
            containerVariants={containerVariants}
            itemVariants={itemVariants}
          />
        )}

        {eventStatus === "ended" && (
          <EventEndedMessage
            key="event-ended"
            isMobile={isMobile}
            containerVariants={containerVariants}
            itemVariants={itemVariants}
          />
        )}
      </AnimatePresence>
    </MotionBox>
  );
};

export default TimerUpdated;
