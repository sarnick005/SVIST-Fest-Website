import { useEffect, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Box, Center, Image, useMediaQuery } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

// Convert Chakra components to motion components
const MotionBox = motion(Box);
const MotionImage = motion(Image);

const Sponsor = () => {
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

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  return (
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
  );
};

export default Sponsor;
