import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";

const TourCard = ({ img, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Create a Framer Motion component from Chakra UI components
  const MotionCard = motion(Card);
  const MotionImage = motion(Image);

  return (
    <Box
      mb="4"
      position="relative"
      padding="3"
      className="photo-frame"
      borderWidth="8px"
      borderColor="black"
      borderStyle="solid"
      boxShadow="xl"
      bg="white"
      maxW="sm"
    >
      <MotionCard
        maxW="100%"
        bg="white"
        shadow="none"
        position="relative"
        overflow="hidden"
        borderRadius="0"
        border="none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
      >
        <CardBody p="0">
          <Box overflow="hidden">
            <MotionImage
              src={img}
              alt={text || "Tour image"}
              borderRadius="0"
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.4 }}
            />
          </Box>

          <Stack mt="4" spacing="2" p="2">
            <motion.div
              animate={{
                color: isHovered ? "#ff1d58" : "black",
              }}
              transition={{ duration: 0.2 }}
            >
              <Heading size="md" textAlign="center">
                {text}
              </Heading>
            </motion.div>
            <Text></Text>
          </Stack>
        </CardBody>
      </MotionCard>
    </Box>
  );
};

export default TourCard;
