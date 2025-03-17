import { useMediaQuery } from "@chakra-ui/react";
import {
  Stack,
  Box,
  Heading,
  Container,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import TourCard from "./tourCard";
import Header from "./header";
import Footer from "./footer";
import { useState, useEffect } from "react";

// Reusable components
const SectionHeading = ({ title }) => {
  const [theme, setTheme] = useState("white");
  const [scrollY, setScrollY] = useState(0);
  const headingBg = useColorModeValue(
    "rgba(220, 20, 60, 0.1)",
    "rgba(220, 20, 60, 0.1)"
  );

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

  return (
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
};

const FeaturedImage = ({ img, text }) => (
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
    <TourCard img={img} text={text} />
  </Box>
);

const ImageGrid = ({ images }) => (
  <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }} mb={16}>
    {images.map((image, index) => (
      <Box
        key={index}
        transition="transform 0.3s"
        _hover={{ transform: "translateY(-8px)" }}
        boxShadow="lg"
        borderRadius="lg"
        overflow="hidden"
      >
        <TourCard img={image.img} text={image.text} />
      </Box>
    ))}
  </SimpleGrid>
);

const Tour = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  // Event data organized by year
  const events = {
    firstFest: {
      featured: { img: "/img/enthu/first.jpeg", text: "First Fest" },
    },
    enthu2024: [
      [
        {
          img: "/img/Enthuzea 2025/fest 2024/DSC_0849.JPG",
          text: "Mr Freshers 2k24",
        },
        {
          img: "/img/Enthuzea 2025/fest 2024/DSC_0856.JPG",
          text: "Miss Freshers 2k24",
        },
        {
          img: "/img/Enthuzea 2025/fest 2024/DSC_0647.JPG",
          text: "Junior Inauguration",
        },
      ],
      [
        {
          img: "/img/Enthuzea 2025/fest 2024/DSC_1134.JPG",
          text: "Students",
        },
        {
          img: "/img/Enthuzea 2025/fest 2024/DSC_0976.JPG",
          text: "Students",
        },
        {
          img: "/img/Enthuzea 2025/fest 2024/DSC_0085.JPG",
          text: "Students",
        },
      ],
      [
        {
          img: "/img/Enthuzea 2025/fest 2024/DSC_1042.JPG",
          text: "Dance Performance",
        },
        {
          img: "/img/Enthuzea 2025/fest 2024/DSC_1167.JPG",
          text: "Folk Song Performance",
        },
        {
          img: "/img/Enthuzea 2025/fest 2024/DSC_0219.JPG",
          text: "Percussionist",
        },
      ],
      [
        {
          img: "/img/Enthuzea 2025/fest 2024/DSC_0766.JPG",
          text: "Freshers Anchor",
        },
        {
          img: "/img/Enthuzea 2025/fest 2024/DSC_0765.JPG",
          text: "Freshers Anchor",
        },
        {
          img: "/img/Enthuzea 2025/fest 2024/DSC_0777.JPG",
          text: "Dance Performance",
        },
      ],
      [
        {
          img: "/img/Enthuzea 2025/fest 2024/DSC_0761.JPG",
          text: "Performance Anchor",
        },
        {
          img: "/img/Enthuzea 2025/fest 2024/DSC_0867.JPG",
          text: "Dance Performance",
        },
        {
          img: "/img/Enthuzea 2025/fest 2024/DSC_1098.JPG",
          text: "Singing",
        },
      ],
      [
        {
          img: "/img/Enthuzea 2025/fest 2024/DSC_1217.JPG",
          text: "Addiction Band",
        },
        {
          img: "/img/Enthuzea 2025/fest 2024/DSC_1253.JPG",
          text: "Guest Performer",
        },
        {
          img: "/img/Enthuzea 2025/fest 2024/DSC_1172.JPG",
          text: "Addiction Band",
        },
      ],
      [
        {
          img: "/img/Enthuzea 2025/fest 2024/DSC_0225.JPG",
          text: "Band Performance",
        },
        {
          img: "/img/Enthuzea 2025/fest 2024/DSC_0218.JPG",
          text: "Annanya Chakraborty",
        },
        {
          img: "/img/Enthuzea 2025/fest 2024/DSC_0269.JPG",
          text: "Band Performance",
        },
      ],
      [
        {
          img: "/img/Enthuzea 2025/fest 2024/DSC_0137.JPG",
          text: "Alumni Performance",
        },
        {
          img: "/img/Enthuzea 2025/fest 2024/DSC_1360.JPG",
          text: "Ramp Walk",
        },
        {
          img: "/img/Enthuzea 2025/fest 2024/DSC_1340.JPG",
          text: "Ramp Walk",
        },
      ],
      [
        {
          img: "/img/Enthuzea 2025/fest 2024/DSC_1327.JPG",
          text: "Ramp Walk",
        },
        {
          img: "/img/Enthuzea 2025/fest 2024/DSC_1298.JPG",
          text: "Ramp Walk",
        },
        {
          img: "/img/Enthuzea 2025/fest 2024/DSC_0002.JPG",
          text: "Ramp Walk",
        },
      ],
      [
        {
          img: "/img/Enthuzea 2025/fest 2024/DSC_1301.JPG",
          text: "Ramp Walk",
        },
        {
          img: "/img/Enthuzea 2025/fest 2024/DSC_1308.JPG",
          text: "Ramp Walk",
        },
        {
          img: "/img/Enthuzea 2025/fest 2024/DSC_1406.JPG",
          text: "Ramp Walk",
        },
      ],
    ],
    enthu2023: [
      [
        { img: "/img/assets/dance_past_tour1.JPG", text: "Dance Performance" },
        { img: "/img/assets/fresher.JPG", text: "Freshers" },
        {
          img: "/img/assets/prizeDistribution.JPG",
          text: "Prize Distribution",
        },
      ],
      [
        { img: "/img/assets/singingTour.JPG", text: "Cultural Show" },
        { img: "/img/assets/riddles1.JPG", text: "Riddle Band" },
        { img: "/img/assets/SINGING2.JPG", text: "Addiction Band" },
      ],
      [
        { img: "/img/assets/fakira1.JPG", text: "Fakira Performance" },
        { img: "/img/assets/fakira2.JPG", text: "Fakira Performance" },
        { img: "/img/assets/dance2.JPG", text: "Dance Performance" },
      ],
      [
        { img: "/img/assets/rampwalk_1.JPG", text: "Ramp Walk" },
        { img: "/img/assets/ramp2.JPG", text: "Ramp Walk" },
        { img: "/img/assets/memory.JPG", text: "Memories" },
      ],
    ],
    enthu2022: [
      [
        { img: "/img/enthuzea 2022/1.jpg", text: "All Performers" },
        { img: "/img/enthuzea 2022/2.jpg", text: "Miss Freshers" },
        { img: "/img/enthuzea 2022/3.jpg", text: "Drama" },
      ],
      [
        { img: "/img/enthuzea 2022/4.jpg", text: "Cultural Show" },
        { img: "/img/enthuzea 2022/5.jpg", text: "Musical Bands" },
        { img: "/img/enthuzea 2022/6.jpg", text: "Classical Drama" },
      ],
      [
        { img: "/img/enthuzea 2022/7.jpg", text: "Event Moments" },
        { img: "/img/enthuzea 2022/8.jpg", text: "Event Moments" },
        { img: "/img/enthuzea 2022/9.jpg", text: "Event Moments" },
      ],
      [
        { img: "/img/enthuzea 2022/13.jpg", text: "Event Highlights" },
        { img: "/img/enthuzea 2022/15.jpg", text: "Event Highlights" },
        { img: "/img/enthuzea 2022/14.jpg", text: "Event Highlights" },
      ],
      [
        { img: "/img/enthuzea 2022/11.jpg", text: "Event Memories" },
        { img: "/img/enthuzea 2022/18.jpg", text: "Event Memories" },
        { img: "/img/enthuzea 2022/10.jpg", text: "Event Memories" },
      ],
    ],
  };

  return (
    <Box bg="black" minH="100vh" overflowX="hidden">
      <Header color="black" />

      <Box pt={{ base: "120px", md: "160px" }} pb={10}>
        <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
          {/* First Fest Section */}
          <SectionHeading title="Our First Fest" />
          <Box textAlign="center" mb={16}>
            <FeaturedImage
              img={events.firstFest.featured.img}
              text={events.firstFest.featured.text}
            />
          </Box>

          {/* Enthuzea 2K24 Section */}
          <SectionHeading title="Enthuzea 2K24" />
          {events.enthu2024.map((grid, index) => (
            <ImageGrid key={`2024-${index}`} images={grid} />
          ))}

          {/* Enthuzea 2K23 Section */}
          <SectionHeading title="Enthuzea 2K23" />
          {events.enthu2023.map((grid, index) => (
            <ImageGrid key={`2023-${index}`} images={grid} />
          ))}

          {/* Enthuzea 2K22 Section */}
          <SectionHeading title="Enthuzea 2K22" />
          {events.enthu2022.map((grid, index) => (
            <ImageGrid key={`2022-${index}`} images={grid} />
          ))}
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default Tour;
