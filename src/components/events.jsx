import NewCard from "./eventCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Stack } from "@chakra-ui/react";
import Footer from "./footer";
import Header from "./header";
import { useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";

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

  return (
    <>
      <Header />
      <div style={{ backgroundColor: "black", paddingBottom: "5%" }}>
     
        <Stack  direction={["column", "row"]} spacing="40px">
          <center>
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{ display: "block", marginTop:"6rem" }}
              src="img/ENTHUZEA 2024/poster2.jpg"
            />
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              style={{ display: "inline" }}
              src="img/assets/ananyaxbohemianbaul.jpg"
            />
            <motion.img
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              style={{ display: "inline" }}
              src="img/assets/lokoexpress.jpg"
            />
          </center>
        </Stack>
      </div>
      <Footer />
    </>
  );
};

export default UpdatedEvents;
