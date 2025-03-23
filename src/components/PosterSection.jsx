import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
const MotionBox = motion(Box);
const MotionImage = motion.img;

const PosterSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <MotionBox
      bg="black"
      py={8}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      <Box maxW="1200px" mx="auto" px={4}>
        <MotionImage
          style={{
            width: "100%",
            maxHeight: "500px",
            objectFit: "contain",
            borderRadius: "10px",
          }}
          src="/img/Enthuzea 2025/banner/BANNER.jpg"
          alt="ENTHUZEA 2025 Poster"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          viewport={{ once: true }}
        />
      </Box>
    </MotionBox>
  );
};

export default PosterSection;
