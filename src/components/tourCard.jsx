import {
  Card,
  CardBody,
  Stack,
  Heading,
  Image,
  Box,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";

const TourCard = ({ img, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  const MotionCard = motion(Card);
  const MotionImage = motion(Image);
  const MotionBox = motion(Box);

  return (
    <MotionBox
      mb={{ base: "10", md: "12" }}
      mt={{ base: "8", md: "10" }}
      position="relative"
      width="100%"
      maxW={{ base: "280px", md: "320px" }}
      mx="auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      pt={{ base: "4", md: "2" }}
      pb={{ base: "4", md: "2" }}
    >
      <Box
        className="photo-frame"
        borderWidth="8px"
        borderColor="black"
        borderStyle="solid"
        borderRadius="sm"
        bg="white"
        boxShadow="0 10px 25px -5px rgba(0,0,0,0.3)"
        position="relative"
        transform="rotate(-2deg)"
        zIndex="1"
        _before={{
          content: '""',
          position: "absolute",
          top: "-12px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80px",
          height: "15px",
          bg: "#c41e3a",
          borderRadius: "5px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          zIndex: "2",
        }}
        _after={{
          content: '""',
          position: "absolute",
          top: "-10px",
          left: "50%",
          transform: "translateX(-50%) rotate(90deg)",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          border: "2px solid #333",
          bg: "#fff",
          zIndex: "3",
        }}
      >
        <MotionCard
          maxW="100%"
          bg="transparent"
          shadow="none"
          position="relative"
          overflow="hidden"
          borderRadius="0"
          border="none"
          onTouchEnd={() => setTimeout(() => setIsHovered(false), 1000)}
          style={{ transform: "rotate(2deg)" }}
        >
          <CardBody p="0">
            <Box
              overflow="hidden"
              borderRadius="sm"
              boxShadow="inset 0 0 10px rgba(0,0,0,0.2)"
            >
              <MotionImage
                src={img}
                alt={text || "Tour image"}
                borderRadius="0"
                width="100%"
                objectFit="contain"
                minH={{ base: "150px", md: "auto" }}
              />
            </Box>

            <MotionBox mt="4" p="3">
              <Stack spacing="1">
                <motion.div>
                  <Heading
                    size={{ base: "sm", md: "md" }}
                    textAlign="center"
                    fontFamily="cursive, serif"
                    textShadow="0 1px 2px rgba(0,0,0,0.1)"
                  >
                    {text}
                  </Heading>
                </motion.div>

                <MotionBox
                  textAlign="center"
                  transition={{ duration: 0.3 }}
                  mt="1"
                  overflow="hidden"
                >
                  <Text fontSize="xs" color="gray.600" fontStyle="italic">
                    {isHovered ? "Tap to view details" : ""}
                  </Text>
                </MotionBox>
              </Stack>
            </MotionBox>
          </CardBody>
        </MotionCard>
      </Box>

      <Box
        display="block"
        position="absolute"
        top={{ base: "-10px", md: "-15px" }}
        left="10px"
        width={{ base: "40px", md: "60px" }}
        height={{ base: "20px", md: "30px" }}
        bg="rgba(255,215,0,0.7)"
        transform="rotate(-45deg)"
        zIndex="0"
      />

      <Box
        display="block"
        position="absolute"
        bottom={{ base: "-10px", md: "-15px" }}
        right="10px"
        width={{ base: "50px", md: "70px" }}
        height={{ base: "30px", md: "40px" }}
        bg="rgba(173,216,230,0.7)"
        transform="rotate(30deg)"
        zIndex="0"
      />
    </MotionBox>
  );
};

export default TourCard;
