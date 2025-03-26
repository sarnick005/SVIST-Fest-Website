import { useEffect, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Box, Center, Image, useMediaQuery } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const Sponsor = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [tabIndex, setTabIndex] = useState(0);
  const sponsorImages = [
    // { src: "img/assets/riq.jpeg", alt: "Sponsor 1" },
    // { src: "img/assets/tea.jpeg", alt: "Sponsor 2" },
    // { src: "img/assets/zill.JPEG", alt: "Sponsor 3" },
    { src: "/img/Enthuzea 2025/sponsors/AVISHEK MESS.png", alt: "Sponsor 1", height: "190px" },
    { src: "/img/Enthuzea 2025/sponsors/sp2.png", alt: "Sponsor 2", height: "190px" },
    { src: "/img/Enthuzea 2025/sponsors/sp3.jpg", alt: "Sponsor 3", height: "190px" },
    { src: "/img/Enthuzea 2025/sponsors/sp4.jpg", alt: "Sponsor 4", height: "190px" },
  ];

  const scaleUp = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200 },
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTabIndex((prevIndex) => (prevIndex + 1) % sponsorImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sponsorImages.length]);

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  return (
    <MotionBox
      maxW={{ base: "90%", md: "800px" }}
      mx="auto"
      p={6}
      borderRadius="lg"
      bg="rgba(0,0,0,0.3)"
      boxShadow="lg"
      variants={scaleUp}
      initial="hidden"
      animate="visible"
    >
      <Tabs
        index={tabIndex}
        onChange={handleTabsChange}
        variant="unstyled"
        isFitted
      >
        <TabList mb={4} display="flex" justifyContent="center" gap={2}>
          {sponsorImages.map((_, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Tab
                _selected={{ color: "white", bg: "red.500" }}
                borderRadius="full"
                size="sm"
                mx={1}
                p={2}
                minW="12px"
                height="12px"
                bg="gray.500"
                _hover={{ bg: "gray.400" }}
              />
            </motion.div>
          ))}
        </TabList>

        <TabPanels>
          {sponsorImages.map((sponsor, idx) => (
            <TabPanel key={idx} p={0} display="flex" justifyContent="center">
              <AnimatePresence mode="wait">
                <MotionImage
                  key={idx}
                  src={sponsor.src}
                  alt={sponsor.alt}
                  maxWidth={{ base: "90%", md: "50%" }}
                  height={sponsor.height || "auto"}
                  objectFit="contain"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                />
              </AnimatePresence>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </MotionBox>
  );
};

export default Sponsor;
