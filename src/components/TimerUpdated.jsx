import { useEffect, useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import TimerDisplay from "./TimerDisplay";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);

const TimerUpdated = ({ selectedDateTime }) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const difference = selectedDateTime - now;

      if (difference <= 0) {
        setIsExpired(true);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, [selectedDateTime]);

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
      {isExpired ? (
        <ExpiredMessage isMobile={isMobile} />
      ) : (
        <TimerDisplay
          timeRemaining={timeRemaining}
          containerVariants={containerVariants}
          itemVariants={itemVariants}
          digitVariants={digitVariants}
          digitStyle={digitStyle}
          isMobile={isMobile}
        />
      )}
    </MotionBox>
  );
};

export default TimerUpdated;
