import { useMediaQuery } from "@chakra-ui/react";
import {
  Stack,
  Box,
  Heading,
  Container,
  SimpleGrid,
  Fade,
  useColorModeValue,
} from "@chakra-ui/react";
import TourCard from "./tourCard";
import Header from "./header";
import Footer from "./footer";
import { useState, useEffect } from "react";

const Tour = () => {
  const [theme, setTheme] = useState("white");
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [scrollY, setScrollY] = useState(0);

  // For parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headingBg = useColorModeValue(
    "rgba(220, 20, 60, 0.1)",
    "rgba(220, 20, 60, 0.1)"
  );

  // Section style with improved aesthetics
  const SectionHeading = ({ title }) => (
    <Box py={10} position="relative" overflow="hidden">
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg={headingBg}
        transform={`translateY(${scrollY * 0.1}px)`}
        zIndex={-1}
        opacity={0.8}
        borderRadius="lg"
        mx={4}
      />
      <Heading
        as="h2"
        textAlign="center"
        fontSize={{ base: "3xl", md: "5xl" }}
        fontFamily="verdana"
        fontWeight="bold"
        color={theme}
        textShadow="2px 2px 4px rgba(0,0,0,0.2)"
        transition="all 0.3s ease"
        _hover={{ color: "red", transform: "scale(1.05)" }}
        onMouseOver={() => setTheme("red")}
        onMouseLeave={() => setTheme("white")}
        letterSpacing="wider"
        mb={6}
        px={4}
      >
        {title}
      </Heading>
    </Box>
  );

  return (
    <Box bg="black" minH="100vh" overflowX="hidden">
      <Header color="black" />

      <Box pt={{ base: "120px", md: "160px" }} pb={10}>
        <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
          {/* First Fest Section */}
          <SectionHeading title="Our First Fest" />
          <Box textAlign="center" mb={16}>
            <Box
              maxW={{ base: "100%", md: "70%" }}
              mx="auto"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="xl"
              transform="rotate(-1deg)"
              transition="transform 0.3s ease"
              _hover={{ transform: "rotate(0deg) scale(1.02)" }}
            >
              <TourCard img="/img/enthu/first.jpeg" text="First Fest" />
            </Box>
          </Box>

          {/* Enthuzea 2K24 Section */}
          <SectionHeading title="Enthuzea 2K24" />
         

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 6, md: 8 }}
            mb={16}
          >
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/public/img/Enthuzea 2025/fest 2024/DSC_0849.JPG"
                text="Mr Freshers 2k24"
              />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/public/img/Enthuzea 2025/fest 2024/DSC_0856.JPG"
                text="Miss Freshers 2k24"
              />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/public/img/Enthuzea 2025/fest 2024/DSC_0647.JPG"
                text="Junior Inauguration"
              />
            </Box>
          </SimpleGrid>
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 6, md: 8 }}
            mb={16}
          >
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/public/img/Enthuzea 2025/fest 2024/DSC_1134.JPG"
                text="Students"
              />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/public/img/Enthuzea 2025/fest 2024/DSC_0976.JPG"
                text="Students"
              />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/public/img/Enthuzea 2025/fest 2024/DSC_0085.JPG"
                text="Students"
              />
            </Box>
          </SimpleGrid>
           <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 6, md: 8 }}
            mb={16}
          >
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/public/img/Enthuzea 2025/fest 2024/DSC_1042.JPG"
                text="Dance Performance"
              />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/public/img/Enthuzea 2025/fest 2024/DSC_1167.JPG"
                text="Folk Song Performance"
              />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/public/img/Enthuzea 2025/fest 2024/DSC_0219.JPG"
                text="Percussionist"
              />
            </Box>
          </SimpleGrid>
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 6, md: 8 }}
            mb={16}
          >
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/public/img/Enthuzea 2025/fest 2024/DSC_0766.JPG"
                text="Freshers Anchor"
              />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/public/img/Enthuzea 2025/fest 2024/DSC_0765.JPG"
                text="Freshers Anchor"
              />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/public/img/Enthuzea 2025/fest 2024/DSC_0777.JPG"
                text="Dance Performance"
              />
            </Box>
          </SimpleGrid>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 6, md: 8 }}
            mb={16}
          >
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/public/img/Enthuzea 2025/fest 2024/DSC_0761.JPG"
                text="Performance Anchor"
              />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/public/img/Enthuzea 2025/fest 2024/DSC_0867.JPG"
                text="Dance Performance"
              />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/public/img/Enthuzea 2025/fest 2024/DSC_1098.JPG"
                text="Singing"
              />
            </Box>
          </SimpleGrid>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 6, md: 8 }}
            mb={16}
          >
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/public/img/Enthuzea 2025/fest 2024/DSC_1217.JPG"
                text="Addiction Band"
              />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/public/img/Enthuzea 2025/fest 2024/DSC_1253.JPG"
                text="Guest Performer"
              />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/public/img/Enthuzea 2025/fest 2024/DSC_1172.JPG"
                text="Addiction Band"
              />
            </Box>
          </SimpleGrid>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 6, md: 8 }}
            mb={16}
          >
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/public/img/Enthuzea 2025/fest 2024/DSC_0225.JPG"
                text="Band Performance"
              />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/public/img/Enthuzea 2025/fest 2024/DSC_0218.JPG"
                text="Annanya Chakraborty"
              />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/public/img/Enthuzea 2025/fest 2024/DSC_0269.JPG"
                text="Band Performance"
              />
            </Box>
          </SimpleGrid>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 6, md: 8 }}
            mb={16}
          >
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/public/img/Enthuzea 2025/fest 2024/DSC_0137.JPG"
                text="Alumni Performance"
              />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/public/img/Enthuzea 2025/fest 2024/DSC_1360.JPG"
                text="Ramp Walk"
              />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/public/img/Enthuzea 2025/fest 2024/DSC_1340.JPG"
                text="Ramp Walk"
              />
            </Box>
          </SimpleGrid>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 6, md: 8 }}
            mb={16}
          >
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/public/img/Enthuzea 2025/fest 2024/DSC_1327.JPG"
                text="Ramp Walk"
              />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/public/img/Enthuzea 2025/fest 2024/DSC_1298.JPG"
                text="Ramp Walk"
              />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/public/img/Enthuzea 2025/fest 2024/DSC_0002.JPG"
                text="Ramp Walk"
              />
            </Box>
          </SimpleGrid>
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 6, md: 8 }}
            mb={16}
          >
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/public/img/Enthuzea 2025/fest 2024/DSC_1301.JPG"
                text="Ramp Walk"
              />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/public/img/Enthuzea 2025/fest 2024/DSC_1308.JPG"
                text="Ramp Walk"
              />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/public/img/Enthuzea 2025/fest 2024/DSC_1406.JPG"
                text="Ramp Walk"
              />
            </Box>
          </SimpleGrid>

          {/* Enthuzea 2K23 Section */}
          <SectionHeading title="Enthuzea 2K23" />
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 6, md: 8 }}
            mb={16}
          >
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/img/assets/dance_past_tour1.JPG"
                text="Dance Performance"
              />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard img="/img/assets/fresher.JPG" text="Freshers" />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/img/assets/prizeDistribution.JPG"
                text="Prize Distribution"
              />
            </Box>
          </SimpleGrid>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 6, md: 8 }}
            mb={16}
          >
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/img/assets/singingTour.JPG"
                text="Cultural Show"
              />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard img="/img/assets/riddles1.JPG" text="Riddle Band" />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard img="/img/assets/SINGING2.JPG" text="Addiction Band" />
            </Box>
          </SimpleGrid>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 6, md: 8 }}
            mb={16}
          >
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/img/assets/fakira1.JPG"
                text="Fakira Performance"
              />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/img/assets/fakira2.JPG"
                text="Fakira Performance"
              />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard img="/img/assets/dance2.JPG" text="Dance Performance" />
            </Box>
          </SimpleGrid>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 6, md: 8 }}
            mb={16}
          >
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard img="/img/assets/rampwalk_1.JPG" text="Ramp Walk" />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard img="/img/assets/ramp2.JPG" text="Ramp Walk" />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard img="/img/assets/memory.JPG" text="Memories" />
            </Box>
          </SimpleGrid>

          {/* Enthuzea 2K22 Section */}
          <SectionHeading title="Enthuzea 2K22" />
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 6, md: 8 }}
            mb={16}
          >
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard img="/img/enthuzea 2022/1.jpg" text="All Performers" />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard img="/img/enthuzea 2022/2.jpg" text="Miss Freshers" />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard img="/img/enthuzea 2022/3.jpg" text="Drama" />
            </Box>
          </SimpleGrid>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 6, md: 8 }}
            mb={16}
          >
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard img="/img/enthuzea 2022/4.jpg" text="Cultural Show" />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard img="/img/enthuzea 2022/5.jpg" text="Musical Bands" />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard img="/img/enthuzea 2022/6.jpg" text="Classical Drama" />
            </Box>
          </SimpleGrid>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 6, md: 8 }}
            mb={16}
          >
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard img="/img/enthuzea 2022/7.jpg" text="Event Moments" />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard img="/img/enthuzea 2022/8.jpg" text="Event Moments" />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard img="/img/enthuzea 2022/9.jpg" text="Event Moments" />
            </Box>
          </SimpleGrid>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 6, md: 8 }}
            mb={16}
          >
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/img/enthuzea 2022/13.jpg"
                text="Event Highlights"
              />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/img/enthuzea 2022/15.jpg"
                text="Event Highlights"
              />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard
                img="/img/enthuzea 2022/14.jpg"
                text="Event Highlights"
              />
            </Box>
          </SimpleGrid>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 6, md: 8 }}
            mb={16}
          >
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard img="/img/enthuzea 2022/11.jpg" text="Event Memories" />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard img="/img/enthuzea 2022/18.jpg" text="Event Memories" />
            </Box>
            <Box
              transition="transform 0.3s"
              _hover={{ transform: "translateY(-8px)" }}
              boxShadow="lg"
              borderRadius="lg"
              overflow="hidden"
            >
              <TourCard img="/img/enthuzea 2022/10.jpg" text="Event Memories" />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default Tour;
