import { useMediaQuery, Box } from "@chakra-ui/react";
import Header from "./header";
import Footer from "./footer";
import ProgramCard from "../adminPanel/Detailsnew";
import Sponsor from "./Sponsor";
import TimerUpdated from "./TimerUpdated";
import HeaderBanner from "./HeaderBanner";
import PosterSection from "./PosterSection";
import AnimatedSection from "./AnimatedSection";

const Home = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box bg="black" minH="100vh">
      <Header />
      <HeaderBanner />
      <TimerUpdated selectedDateTime={new Date(2025, 2, 26)} />
      <PosterSection />
      <AnimatedSection>
        <ProgramCard />
      </AnimatedSection>
      <AnimatedSection>
        <Sponsor />
      </AnimatedSection>
      <Footer />
    </Box>
  );
};

export default Home;
