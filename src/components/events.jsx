import NewCard from "./eventCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Stack, Box, Container, Heading, Text } from "@chakra-ui/react";
import Footer from "./footer";
import Header from "./header";
import { useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const UpdatedEvents = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const allEvents = async () => {
      try {
        const new_data = [
          {
            pic: "./img/enthuzea_logo.jpg",
            name: "Enthuzea 2025",
            title: "Summer Event",
            date: 1684454400000,
            price: "Enthuzea is Awesome!",
          },
        ];
        setEvents(new_data);
      } catch (err) {
        console.log(err);
      }
    };
    allEvents();
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const posterVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const leftImageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  };

  const rightImageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <Header />
      <Box
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        backgroundColor="black"
        minHeight="100vh"
        paddingBottom="5%"
        paddingTop={isMobile ? "4rem" : "8rem"}
      >
        <Container maxW="container.xl">
          <MotionBox
            variants={itemVariants}
            textAlign="center"
            marginBottom="3rem"
          >
            <Heading
              as="h1"
              color="white"
              marginBottom="1rem"
              fontSize={["2xl", "3xl", "4xl"]}
            >
              Enthuzea 2025
            </Heading>
            <Text color="gray.300" fontSize={["md", "lg"]}>
              Experience the magic of our annual celebration
            </Text>
          </MotionBox>

          <Stack
            direction="column"
            spacing={isMobile ? "4" : "8"}
            align="center"
          >
            <MotionBox
              variants={posterVariants}
              width={isMobile ? "90%" : "auto"}
              maxWidth="600px"
              marginBottom={isMobile ? "2rem" : "4rem"}
              boxShadow="0 10px 30px -10px rgba(255,0,0,0.3)"
              borderRadius="md"
              overflow="hidden"
            >
              <img
                src="img/ENTHUZEA 2024/poster2.jpg"
                alt="Enthuzea 2025 Poster"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </MotionBox>

            <Stack
              direction={isMobile ? "column" : "row"}
              spacing={isMobile ? "4" : "8"}
              width="100%"
              justifyContent="center"
              align="center"
            >
              <MotionBox
                variants={leftImageVariants}
                width={isMobile ? "90%" : "45%"}
                maxWidth="400px"
                boxShadow="0 10px 30px -10px rgba(0,0,255,0.3)"
                borderRadius="md"
                overflow="hidden"
                transform={isMobile ? "none" : "rotate(-2deg)"}
              >
                <img
                  src="/img/Enthuzea 2025/band 2025/bullet b1.jpg"
                  alt="Bullet and Bohemian"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </MotionBox>

              <MotionBox
                variants={rightImageVariants}
                width={isMobile ? "90%" : "45%"}
                maxWidth="400px"
                boxShadow="0 10px 30px -10px rgba(0,0,255,0.3)"
                borderRadius="md"
                overflow="hidden"
                transform={isMobile ? "none" : "rotate(2deg)"}
              >
                <img
                  src="/img/Enthuzea 2025/band 2025/trap.jpg"
                  alt="Trap"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </MotionBox>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default UpdatedEvents;
