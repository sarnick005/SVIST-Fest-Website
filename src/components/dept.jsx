import { motion } from "framer-motion";
import Header from "./header";
import Footer from "./footer";
import { Button, Box, Heading, Text, Flex, VStack } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

const Dept = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const onButtonClick = (pdf, dept) => {
    fetch(pdf).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = dept;
        alink.click();
      });
    });
  };

  const departments = [
    { name: "CSE Dept.", pdfPath: "img/brochure/CSE.pdf", downloadName: "CSE" },
    { name: "CE Dept.", pdfPath: "img/brochure/CE.pdf", downloadName: "CE" },
    { name: "ECE Dept.", pdfPath: "img/brochure/ECE.pdf", downloadName: "ECE" },
    { name: "EEE Dept.", pdfPath: "img/brochure/EEE.pdf", downloadName: "EEE" },
    { name: "ME Dept.", pdfPath: "img/brochure/ME.pdf", downloadName: "ME" },
    {
      name: "AI & DS Dept.",
      pdfPath: "img/brochure/AI&DS.pdf",
      downloadName: "AI&DS",
    },
  ];

  return (
    <Box bg="black" minH="100vh" overflow="hidden" paddingBottom="2rem">
      <Header color="black" />

      <Box pt={isMobile ? "8rem" : "6rem"} px={4} maxW="1200px" mx="auto">
        <VStack spacing={10}>
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box textAlign="center" w="100%">
              <Heading
                color="red"
                fontFamily="cursive"
                fontSize={isMobile ? "2xl" : "4xl"}
                mb={6}
              >
                Enthuzea is Awesome
              </Heading>

              <Box
                position="relative"
                w={isMobile ? "50%" : "30%"}
                mx="auto"
                mb={6}
              >
                <motion.video
                  autoPlay
                  loop
                  muted
                  style={{
                    width: "100%",
                    borderRadius: "50%",
                    boxShadow: "0 0 15px rgba(255, 0, 0, 0.5)",
                  }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <source src="img/logovideo.mp4" type="video/mp4" />
                </motion.video>
              </Box>

              <Text
                color="white"
                fontSize={isMobile ? "md" : "lg"}
                maxW="800px"
                mx="auto"
                lineHeight="1.7"
                fontWeight="300"
              >
                All the departments come together to celebrate this event making
                it a massive one. This event also brings all the faculty members
                together, thus promoting unity and happiness.
              </Text>
            </Box>
          </motion.div>

          {/* Department Info Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Box w="100%" mt={8}>
              <Heading
                color="red"
                fontSize={isMobile ? "2xl" : "3xl"}
                textAlign="center"
                mb={10}
                borderBottom="2px solid red"
                pb={2}
                width="fit-content"
                mx="auto"
              >
                Department Info
              </Heading>

              <VStack
                spacing={isMobile ? 6 : 8}
                align="stretch"
                w="100%"
                maxW="700px"
                mx="auto"
              >
                {departments.map((dept, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Box
                      p={4}
                      borderRadius="md"
                      bg="rgba(255,255,255,0.05)"
                      transition="all 0.3s"
                      _hover={{ bg: "rgba(255,255,255,0.1)" }}
                    >
                      <Flex
                        direction={isMobile ? "column" : "row"}
                        justify="space-between"
                        align={isMobile ? "center" : "center"}
                        gap={isMobile ? 3 : 0}
                      >
                        <Heading
                          color="white"
                          fontSize={isMobile ? "xl" : "2xl"}
                          fontWeight="500"
                        >
                          {dept.name}
                        </Heading>

                        <Button
                          colorScheme="teal"
                          size={isMobile ? "md" : "lg"}
                          onClick={() => {
                            onButtonClick(dept.pdfPath, dept.downloadName);
                          }}
                          _hover={{ transform: "translateY(-2px)" }}
                          transition="transform 0.2s"
                        >
                          Download Brochure
                        </Button>
                      </Flex>
                    </Box>
                  </motion.div>
                ))}
              </VStack>
            </Box>
          </motion.div>
        </VStack>
      </Box>

      <Footer />
    </Box>
  );
};

export default Dept;
