import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

const AnimatedSection = ({ children }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Box bg="black">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        {children}
      </motion.div>
    </Box>
  );
};

export default AnimatedSection;
