import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import TimerDigit from "./TimerDigit";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);

const TimerDisplay = ({
  timeRemaining,
  containerVariants,
  itemVariants,
  digitVariants,
  digitStyle,
  isMobile,
}) => {
  return (
    <MotionBox variants={containerVariants} initial="hidden" animate="show">
      <MotionHeading
        color="red"
        mb={6}
        fontSize={isMobile ? "2xl" : "4xl"}
        variants={itemVariants}
      >
        ENTHUZEA 2025 Starts In
      </MotionHeading>

      <MotionFlex
        justifyContent="center"
        alignItems="center"
        mb={4}
        flexWrap="wrap"
        gap={isMobile ? 2 : 4}
        variants={containerVariants}
      >
        <TimerDigit
          value={timeRemaining.days}
          label="Days"
          variants={itemVariants}
          digitVariants={digitVariants}
          digitStyle={digitStyle}
        />

        <Text color="white" fontSize={isMobile ? "xl" : "2xl"} mx={1}>
          :
        </Text>

        <TimerDigit
          value={timeRemaining.hours}
          label="Hours"
          variants={itemVariants}
          digitVariants={digitVariants}
          digitStyle={digitStyle}
          padZero={true}
        />

        <Text color="white" fontSize={isMobile ? "xl" : "2xl"} mx={1}>
          :
        </Text>

        <TimerDigit
          value={timeRemaining.minutes}
          label="Minutes"
          variants={itemVariants}
          digitVariants={digitVariants}
          digitStyle={digitStyle}
          padZero={true}
        />

        <Text color="white" fontSize={isMobile ? "xl" : "2xl"} mx={1}>
          :
        </Text>

        <TimerDigit
          value={timeRemaining.seconds}
          label="Seconds"
          variants={itemVariants}
          digitVariants={digitVariants}
          digitStyle={digitStyle}
          padZero={true}
        />
      </MotionFlex>
    </MotionBox>
  );
};

export default TimerDisplay;
