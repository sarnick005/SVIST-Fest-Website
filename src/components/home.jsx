import Header from "./Header.jsx";
import Footer from "./footer.jsx";
import { useEffect, useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useDisclosure,
} from "@chakra-ui/react";
import ProgramCard from "../adminPanel/Detailsnew.jsx";
import { Center, Box, Heading, Flex, Image, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import Timer from "./Timer.jsx";
import { motion, AnimatePresence } from "framer-motion";

// Convert Chakra components to motion components
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionImage = motion(Image);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);

// New updated Timer component
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
        // Timer has expired
        setIsExpired(true);
        return;
      }

      // Convert time difference to days, hours, minutes, and seconds
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    // Calculate time remaining initially
    calculateTimeRemaining();

    // Update time remaining every second
    const interval = setInterval(calculateTimeRemaining, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [selectedDateTime]);

  // Styling for timer digits
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

  // Animation variants for timer
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
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
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
      ) : (
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
            <MotionBox textAlign="center" variants={itemVariants}>
              <AnimatePresence mode="wait">
                <MotionBox
                  key={timeRemaining.days}
                  style={digitStyle}
                  color="white"
                  variants={digitVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {timeRemaining.days}
                </MotionBox>
              </AnimatePresence>
              <Text color="gray.400" fontSize="sm" mt={1}>
                Days
              </Text>
            </MotionBox>

            <Text color="white" fontSize={isMobile ? "xl" : "2xl"} mx={1}>
              :
            </Text>

            <MotionBox textAlign="center" variants={itemVariants}>
              <AnimatePresence mode="wait">
                <MotionBox
                  key={timeRemaining.hours}
                  style={digitStyle}
                  color="white"
                  variants={digitVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {timeRemaining.hours < 10
                    ? `0${timeRemaining.hours}`
                    : timeRemaining.hours}
                </MotionBox>
              </AnimatePresence>
              <Text color="gray.400" fontSize="sm" mt={1}>
                Hours
              </Text>
            </MotionBox>

            <Text color="white" fontSize={isMobile ? "xl" : "2xl"} mx={1}>
              :
            </Text>

            <MotionBox textAlign="center" variants={itemVariants}>
              <AnimatePresence mode="wait">
                <MotionBox
                  key={timeRemaining.minutes}
                  style={digitStyle}
                  color="white"
                  variants={digitVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {timeRemaining.minutes < 10
                    ? `0${timeRemaining.minutes}`
                    : timeRemaining.minutes}
                </MotionBox>
              </AnimatePresence>
              <Text color="gray.400" fontSize="sm" mt={1}>
                Minutes
              </Text>
            </MotionBox>

            <Text color="white" fontSize={isMobile ? "xl" : "2xl"} mx={1}>
              :
            </Text>

            <MotionBox textAlign="center" variants={itemVariants}>
              <AnimatePresence mode="wait">
                <MotionBox
                  key={timeRemaining.seconds}
                  style={digitStyle}
                  color="white"
                  variants={digitVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {timeRemaining.seconds < 10
                    ? `0${timeRemaining.seconds}`
                    : timeRemaining.seconds}
                </MotionBox>
              </AnimatePresence>
              <Text color="gray.400" fontSize="sm" mt={1}>
                Seconds
              </Text>
            </MotionBox>
          </MotionFlex>
        </MotionBox>
      )}
    </MotionBox>
  );
};

const Home = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [tabIndex, setTabIndex] = useState(0);
  const sponsorImages = [
    { src: "img/assets/riq.jpeg", alt: "Sponsor 1" },
    { src: "img/assets/tea.jpeg", alt: "Sponsor 2" },
    { src: "img/assets/zill.JPEG", alt: "Sponsor 3" },
    { src: "img/assets/avisek.png", alt: "Sponsor 4", height: "190px" },
    { src: "img/enthuzea 2022/sponsor5.jpg", alt: "Sponsor 5" },
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  // Auto-rotate sponsors
  useEffect(() => {
    const interval = setInterval(() => {
      setTabIndex((prevIndex) => (prevIndex + 1) % sponsorImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sponsorImages.length]);

  const handleSliderChange = (event) => {
    setTabIndex(parseInt(event.target.value, 10));
  };

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  return (
    <>
      <Header />
      <div className="slider_area">
        <div className="single_slider d-flex align-items-center slider_bg_1 overlay">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-12">
                <div className="slider_text text-center">
                  <motion.div
                    className="shape_1 wow fadeInUp"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                  >
                    <img src="img/shape/shape_1.svg" alt=""></img>
                  </motion.div>
                  <motion.div
                    className="shape_2 wow fadeInDown"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  >
                    <img src="img/shape/shape_2.svg" alt=""></img>
                  </motion.div>
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{
                      fontSize: isMobile ? "150%" : "250%",
                      fontFamily: "cursive",
                      color: "white",
                      display: "inline-block",
                    }}
                  >
                    Swami Vivekananda Institute Of Science & Technology
                  </motion.span>
                  <br></br>
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{
                      fontSize: isMobile ? "150%" : "250%",
                      fontFamily: "cursive",
                      display: "inline-block",
                    }}
                  >
                    welcomes you to
                  </motion.span>
                  <motion.h3
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        delay: 0.9,
                      },
                    }}
                    style={{ paddingBottom: isMobile ? "55px" : "0px" }}
                  >
                    ENTHUZEA 2025
                  </motion.h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TimerUpdated selectedDateTime={new Date(2025, 2, 26)} />

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
            w="100%"
            maxH="500px"
            objectFit="contain"
            borderRadius="10px"
            src="img/ENTHUZEA 2024/poster.jpg"
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

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <ProgramCard />
      </motion.div>

      <MotionBox
        maxW="800px"
        mx="auto"
        p={4}
        borderRadius="md"
        bg="rgba(0,0,0,0.3)"
        boxShadow="0 4px 20px rgba(0,0,0,0.2)"
        variants={scaleUp}
      >
        <Tabs
          index={tabIndex}
          onChange={handleTabsChange}
          variant="unstyled"
          isFitted
        >
          <TabList mb={4} display="flex" justifyContent="center">
            {sponsorImages.map((_, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Tab
                  _selected={{ color: "white", bg: "red.500" }}
                  borderRadius="full"
                  size="sm"
                  mx={1}
                  p={1}
                  minW="10px"
                  height="10px"
                  bg="gray.600"
                />
              </motion.div>
            ))}
          </TabList>

          <TabPanels>
            {sponsorImages.map((sponsor, idx) => (
              <TabPanel key={idx} p={0}>
                <Center>
                  <AnimatePresence mode="wait">
                    <MotionImage
                      key={idx}
                      src={sponsor.src}
                      alt={sponsor.alt}
                      maxWidth={isMobile ? "80%" : "50%"}
                      height={sponsor.height || "auto"}
                      objectFit="contain"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                    />
                  </AnimatePresence>
                </Center>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </MotionBox>
      <Footer/>
    </>
  );
};
export default Home;
