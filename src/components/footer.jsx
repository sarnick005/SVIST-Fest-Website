// import {
//   Box,
//   Container,
//   Link,
//   SimpleGrid,
//   Stack,
//   Text,
//   useColorModeValue,
//   Heading,
//   HStack,
//   Button,
//   IconButton,
//   Flex,
//   Divider,
//   VStack,
//   Tooltip,
// } from "@chakra-ui/react";
// import { useEffect } from "react";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaTwitter,
//   FaYoutube,
//   FaEnvelope,
//   FaArrowUp,
// } from "react-icons/fa";

// export default function Footer() {
//   useEffect(() => {
//     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
//   };

//   const bgColor = useColorModeValue("gray.50", "gray.900");
//   const textColor = useColorModeValue("gray.700", "gray.200");
//   const borderColor = useColorModeValue("gray.200", "gray.700");

//   return (
//     <Box
//       bg={bgColor}
//       color={textColor}
//       position="relative"
//       boxShadow="0 -4px 6px -1px rgba(0, 0, 0, 0.1)"
//     >
//       {/* Scroll to top button */}
//       <Box textAlign="center" py={4}>
//         <Tooltip label="Scroll to top" placement="top">
//           <IconButton
//             aria-label="Scroll to top"
//             icon={<FaArrowUp />}
//             onClick={scrollToTop}
//             colorScheme="teal"
//             rounded="full"
//             size="md"
//             boxShadow="md"
//             _hover={{ transform: "translateY(-2px)" }}
//             transition="all 0.2s"
//           />
//         </Tooltip>
//       </Box>

//       {/* Map section */}
//       <Box py={4} px={4}>
//         <Heading as="h3" size="md" textAlign="center" mb={4}>
//           Our Location
//         </Heading>
//         <Box
//           borderRadius="lg"
//           overflow="hidden"
//           boxShadow="md"
//           mx="auto"
//           maxW="1000px"
//         >
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.3758532894394!2d88.38775527532887!3d22.452506037361115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027191980537cf%3A0xfe81e9f2a4a9e486!2sJai%20Hind%20Auditorium!5e0!3m2!1sen!2sin!4v1716215430050!5m2!1sen!2sin"
//             style={{
//               border: 0,
//               width: "100%",
//               height: "300px",
//             }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </Box>
//       </Box>

//       <Divider borderColor={borderColor} />

//       {/* Main footer content */}
//       <Container maxW="6xl" py={8}>
//         <SimpleGrid
//           columns={{ base: 1, sm: 2, md: 4 }}
//           spacing={{ base: 8, md: 8 }}
//           py={4}
//         >
//           {/* Logo and copyright */}
//           <VStack spacing={4} align={{ base: "center", md: "flex-start" }}>
//             <Box maxW="200px">
//               <img src="./img/logo1.png" width="100%" alt="SVIST Logo" />
//             </Box>
//             <Text fontSize="sm" textAlign={{ base: "center", md: "left" }}>
//               © SVIST, Gobindapur, 2025. All rights reserved
//             </Text>
//           </VStack>

//           {/* College links */}
//           <VStack spacing={3} align={{ base: "center", md: "flex-start" }}>
//             <Heading as="h3" size="sm" mb={2}>
//               College
//             </Heading>
//             <Link href="/about" _hover={{ color: "teal.500" }}>
//               About us
//             </Link>
//             <Link href="/pasttour" _hover={{ color: "teal.500" }}>
//               Past Tour
//             </Link>
//           </VStack>

//           {/* Support links */}
//           <VStack spacing={3} align={{ base: "center", md: "flex-start" }}>
//             <Heading as="h3" size="sm" mb={2}>
//               Support
//             </Heading>
//             <Link href="/members" _hover={{ color: "teal.500" }}>
//               Members
//             </Link>
//             <Link href="/contact" _hover={{ color: "teal.500" }}>
//               Contact Us
//             </Link>
//           </VStack>

//           {/* Social media */}
//           <VStack spacing={4} align={{ base: "center", md: "flex-start" }}>
//             <Heading as="h3" size="sm" mb={2}>
//               Connect With Us
//             </Heading>
//             <Flex
//               justifyContent={{ base: "center", md: "flex-start" }}
//               flexWrap="wrap"
//               gap={2}
//             >
//               <IconButton
//                 as={Link}
//                 href="https://www.facebook.com/official4svist"
//                 aria-label="Facebook"
//                 icon={<FaFacebook />}
//                 colorScheme="facebook"
//                 variant="ghost"
//                 isRound
//                 size="lg"
//               />
//               <IconButton
//                 as={Link}
//                 href="https://www.youtube.com/@missioncareer3104"
//                 aria-label="YouTube"
//                 icon={<FaYoutube />}
//                 colorScheme="red"
//                 variant="ghost"
//                 isRound
//                 size="lg"
//               />
//               <IconButton
//                 as={Link}
//                 href="https://www.instagram.com/swami_vivekananda_group"
//                 aria-label="Instagram"
//                 icon={<FaInstagram />}
//                 colorScheme="pink"
//                 variant="ghost"
//                 isRound
//                 size="lg"
//               />
//               <IconButton
//                 as={Link}
//                 href="mailto:website.svist@gmail.com"
//                 aria-label="Email"
//                 icon={<FaEnvelope />}
//                 colorScheme="teal"
//                 variant="ghost"
//                 isRound
//                 size="lg"
//               />
//             </Flex>
//           </VStack>
//         </SimpleGrid>
//       </Container>

//       <Box bg={useColorModeValue("gray.100", "gray.800")} py={4}>
//         <Text textAlign="center" fontSize="sm">
//           Designed with ❤️ by SVIST Team
//         </Text>
//       </Box>
//     </Box>
//   );
// }
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Heading,
  HStack,
  Button,
  IconButton,
  Flex,
  Divider,
  VStack,
  Tooltip,
} from "@chakra-ui/react";
import { useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // Black theme colors
  const bgColor = "black";
  const textColor = "gray.300";
  const borderColor = "gray.800";
  const accentColor = "teal.400";

  return (
    <Box
      bg={bgColor}
      color={textColor}
      position="relative"
      boxShadow="0 -4px 6px -1px rgba(0, 0, 0, 0.3)"
    >
      {/* Scroll to top button */}
      <Box textAlign="center" py={4}>
        <Tooltip label="Scroll to top" placement="top">
          <IconButton
            aria-label="Scroll to top"
            icon={<FaArrowUp />}
            onClick={scrollToTop}
            colorScheme="teal"
            rounded="full"
            size="md"
            boxShadow="0 0 10px teal"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "0 0 15px teal",
            }}
            transition="all 0.2s"
          />
        </Tooltip>
      </Box>

      {/* Map section */}
      <Box py={4} px={4}>
        <Heading
          as="h3"
          size="md"
          textAlign="center"
          mb={4}
          color={accentColor}
        >
          Our Location
        </Heading>
        <Box
          borderRadius="lg"
          overflow="hidden"
          boxShadow="0 0 10px rgba(0, 206, 209, 0.3)"
          mx="auto"
          maxW="1000px"
          border="1px solid"
          borderColor="gray.800"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.3758532894394!2d88.38775527532887!3d22.452506037361115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027191980537cf%3A0xfe81e9f2a4a9e486!2sJai%20Hind%20Auditorium!5e0!3m2!1sen!2sin!4v1716215430050!5m2!1sen!2sin"
            style={{
              border: 0,
              width: "100%",
              height: "300px",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>

      <Divider borderColor={borderColor} />

      {/* Main footer content */}
      <Container maxW="6xl" py={8}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          spacing={{ base: 8, md: 8 }}
          py={4}
        >
          {/* Logo and copyright */}
          <VStack spacing={4} align={{ base: "center", md: "flex-start" }}>
            <Box maxW="200px" bg="white" p={2} borderRadius="md">
              <img src="./img/logo1.png" width="100%" alt="SVIST Logo" />
            </Box>
            <Text
              fontSize="sm"
              textAlign={{ base: "center", md: "left" }}
              color="gray.400"
            >
              © SVIST, Gobindapur, 2025. All rights reserved
            </Text>
          </VStack>

          {/* College links */}
          <VStack spacing={3} align={{ base: "center", md: "flex-start" }}>
            <Heading as="h3" size="sm" mb={2} color={accentColor}>
              College
            </Heading>
            <Link
              href="/about"
              _hover={{ color: accentColor }}
              transition="all 0.2s"
            >
              About us
            </Link>
            <Link
              href="/pasttour"
              _hover={{ color: accentColor }}
              transition="all 0.2s"
            >
              Past Tour
            </Link>
          </VStack>

          {/* Support links */}
          <VStack spacing={3} align={{ base: "center", md: "flex-start" }}>
            <Heading as="h3" size="sm" mb={2} color={accentColor}>
              Support
            </Heading>
            <Link
              href="/members"
              _hover={{ color: accentColor }}
              transition="all 0.2s"
            >
              Members
            </Link>
            <Link
              href="/contact"
              _hover={{ color: accentColor }}
              transition="all 0.2s"
            >
              Contact Us
            </Link>
          </VStack>

          {/* Social media */}
          <VStack spacing={4} align={{ base: "center", md: "flex-start" }}>
            <Heading as="h3" size="sm" mb={2} color={accentColor}>
              Connect With Us
            </Heading>
            <Flex
              justifyContent={{ base: "center", md: "flex-start" }}
              flexWrap="wrap"
              gap={2}
            >
              <IconButton
                as={Link}
                href="https://www.facebook.com/official4svist"
                aria-label="Facebook"
                icon={<FaFacebook />}
                colorScheme="facebook"
                variant="ghost"
                isRound
                size="lg"
                _hover={{
                  bg: "rgba(66, 103, 178, 0.2)",
                  transform: "scale(1.1)",
                }}
                transition="all 0.2s"
              />
              <IconButton
                as={Link}
                href="https://www.youtube.com/@missioncareer3104"
                aria-label="YouTube"
                icon={<FaYoutube />}
                colorScheme="red"
                variant="ghost"
                isRound
                size="lg"
                _hover={{ bg: "rgba(255, 0, 0, 0.2)", transform: "scale(1.1)" }}
                transition="all 0.2s"
              />
              <IconButton
                as={Link}
                href="https://www.instagram.com/swami_vivekananda_group"
                aria-label="Instagram"
                icon={<FaInstagram />}
                colorScheme="pink"
                variant="ghost"
                isRound
                size="lg"
                _hover={{
                  bg: "rgba(225, 48, 108, 0.2)",
                  transform: "scale(1.1)",
                }}
                transition="all 0.2s"
              />
              <IconButton
                as={Link}
                href="mailto:website.svist@gmail.com"
                aria-label="Email"
                icon={<FaEnvelope />}
                colorScheme="teal"
                variant="ghost"
                isRound
                size="lg"
                _hover={{
                  bg: "rgba(0, 206, 209, 0.2)",
                  transform: "scale(1.1)",
                }}
                transition="all 0.2s"
              />
            </Flex>
          </VStack>
        </SimpleGrid>
      </Container>

      <Box bg="rgba(20, 20, 20, 0.8)" py={4}>
        <Text textAlign="center" fontSize="sm" color="gray.400">
          Designed with{" "}
          <Text as="span" color={accentColor}>
            ❤️
          </Text>{" "}
          by SVIST Team
        </Text>
      </Box>
    </Box>
  );
}