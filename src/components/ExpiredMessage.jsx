import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const ExpiredMessage = ({ isMobile }) => {
  return (
    <MotionBox
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <MotionHeading
        color="white"
        fontSize={isMobile ? "3xl" : "6xl"}
        mb={4}
        fontWeight="800"
        textTransform="uppercase"
        initial={{ y: -30 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        Day 1
      </MotionHeading>
      <MotionText
        color="red"
        fontSize={isMobile ? "xl" : "3xl"}
        fontWeight="600"
        animate={{
          opacity: [0.7, 1, 0.7],
          scale: [0.98, 1.02, 0.98],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
      >
        We Are Live
      </MotionText>
    </MotionBox>
  );
};

export default ExpiredMessage;
