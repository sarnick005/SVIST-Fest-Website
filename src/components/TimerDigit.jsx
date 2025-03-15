import { Box, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);

const TimerDigit = ({
  value,
  label,
  variants,
  digitVariants,
  digitStyle,
  padZero = false,
}) => {
  const displayValue = padZero && value < 10 ? `0${value}` : value;

  return (
    <MotionBox textAlign="center" variants={variants}>
      <AnimatePresence mode="wait">
        <MotionBox
          key={value}
          style={digitStyle}
          color="white"
          variants={digitVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ type: "spring", stiffness: 300 }}
        >
          {displayValue}
        </MotionBox>
      </AnimatePresence>
      <Text color="gray.400" fontSize="sm" mt={1}>
        {label}
      </Text>
    </MotionBox>
  );
};

export default TimerDigit;
