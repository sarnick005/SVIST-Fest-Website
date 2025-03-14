import Header from "./header";
import Footer from "./footer";
import { useEffect, useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useDisclosure,
} from "@chakra-ui/react";
import ProgramCard from "../adminPanel/Detailsnew";
import { Center, Box, Heading, Flex, Image, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import Timer from "./Timer.jsx"; // We'll create a new version of the Timer

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

  return (
    <Box bg="black" py={8} textAlign="center" position="relative">
      {isExpired ? (
        <Box>
          <Heading
            color="white"
            fontSize={isMobile ? "3xl" : "6xl"}
            mb={4}
            fontWeight="800"
            textTransform="uppercase"
          >
            Day 1
          </Heading>
          <Text
            color="red"
            fontSize={isMobile ? "xl" : "3xl"}
            fontWeight="600"
            animation="pulse 2s infinite"
            sx={{
              "@keyframes pulse": {
                "0%": { opacity: 0.7 },
                "50%": { opacity: 1 },
                "100%": { opacity: 0.7 },
              },
            }}
          >
            We Are Live
          </Text>
        </Box>
      ) : (
        <Box>
          <Heading color="red" mb={6} fontSize={isMobile ? "2xl" : "4xl"}>
            ENTHUZEA 2025 Starts In
          </Heading>

          <Flex
            justifyContent="center"
            alignItems="center"
            mb={4}
            flexWrap="wrap"
            gap={isMobile ? 2 : 4}
          >
            <Box textAlign="center">
              <Box style={digitStyle} color="white">
                {timeRemaining.days}
              </Box>
              <Text color="gray.400" fontSize="sm" mt={1}>
                Days
              </Text>
            </Box>

            <Text color="white" fontSize={isMobile ? "xl" : "2xl"} mx={1}>
              :
            </Text>

            <Box textAlign="center">
              <Box style={digitStyle} color="white">
                {timeRemaining.hours < 10
                  ? `0${timeRemaining.hours}`
                  : timeRemaining.hours}
              </Box>
              <Text color="gray.400" fontSize="sm" mt={1}>
                Hours
              </Text>
            </Box>

            <Text color="white" fontSize={isMobile ? "xl" : "2xl"} mx={1}>
              :
            </Text>

            <Box textAlign="center">
              <Box style={digitStyle} color="white">
                {timeRemaining.minutes < 10
                  ? `0${timeRemaining.minutes}`
                  : timeRemaining.minutes}
              </Box>
              <Text color="gray.400" fontSize="sm" mt={1}>
                Minutes
              </Text>
            </Box>

            <Text color="white" fontSize={isMobile ? "xl" : "2xl"} mx={1}>
              :
            </Text>

            <Box textAlign="center">
              <Box style={digitStyle} color="white">
                {timeRemaining.seconds < 10
                  ? `0${timeRemaining.seconds}`
                  : timeRemaining.seconds}
              </Box>
              <Text color="gray.400" fontSize="sm" mt={1}>
                Seconds
              </Text>
            </Box>
          </Flex>
        </Box>
      )}
    </Box>
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
                  <div
                    className="shape_1 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".2s"
                  >
                    <img src="img/shape/shape_1.svg" alt=""></img>
                  </div>
                  <div
                    className="shape_2 wow fadeInDown"
                    data-wow-duration="1s"
                    data-wow-delay=".2s"
                  >
                    <img src="img/shape/shape_2.svg" alt=""></img>
                  </div>
                  <span
                    className="wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay=".3s"
                    style={{
                      fontSize: isMobile ? "150%" : "250%",
                      fontFamily: "cursive",
                      color: "white",
                    }}
                  >
                    Swami Vivekananda Institute Of Science & Technology
                  </span>
                  <br></br>
                  <span
                    className="wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay=".3s"
                    style={{
                      fontSize: isMobile ? "150%" : "250%",
                      fontFamily: "cursive",
                    }}
                  >
                    welcomes you to
                  </span>
                  <h3
                    className="wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay=".4s"
                    style={{ paddingBottom: isMobile ? "55px" : "0px" }}
                  >
                    ENTHUZEA 2025
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Timer selectedDateTime={new Date(2025, 2, 26)} />

      <Box bg="black" py={8}>
        <Box maxW="1200px" mx="auto" px={4}>
          <Image
            w="100%"
            maxH="500px"
            objectFit="contain"
            borderRadius="10px"
            src="img/ENTHUZEA 2024/poster.jpg"
            alt="ENTHUZEA 2025 Poster"
          />
        </Box>
      </Box>

      <ProgramCard />

      <Box bg="black" py={10} px={4}>
        <Heading
          textAlign="center"
          color="red"
          fontSize={isMobile ? "2xl" : "3xl"}
          mb={8}
          borderBottom="2px solid red"
          pb={2}
          width="fit-content"
          mx="auto"
        >
          Sponsored By
        </Heading>

        <Box
          maxW="800px"
          mx="auto"
          p={4}
          borderRadius="md"
          bg="rgba(0,0,0,0.3)"
          boxShadow="0 4px 20px rgba(0,0,0,0.2)"
        >
          <Tabs
            index={tabIndex}
            onChange={handleTabsChange}
            variant="unstyled"
            isFitted
          >
            <TabList mb={4} display="flex" justifyContent="center">
              {sponsorImages.map((_, idx) => (
                <Tab
                  key={idx}
                  _selected={{ color: "white", bg: "red.500" }}
                  borderRadius="full"
                  size="sm"
                  mx={1}
                  p={1}
                  minW="10px"
                  height="10px"
                  bg="gray.600"
                />
              ))}
            </TabList>

            <TabPanels>
              {sponsorImages.map((sponsor, idx) => (
                <TabPanel key={idx} p={0}>
                  <Center>
                    <Image
                      src={sponsor.src}
                      alt={sponsor.alt}
                      maxWidth={isMobile ? "80%" : "50%"}
                      height={sponsor.height || "auto"}
                      objectFit="contain"
                      transition="all 0.3s ease"
                      _hover={{ transform: "scale(1.05)" }}
                    />
                  </Center>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default Home;
