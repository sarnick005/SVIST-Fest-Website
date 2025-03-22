import { useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";

const HeaderBanner = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
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
                  Swami Vivekananda Institute of Science & Technology
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
                 ~ welcomes you to ~
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
  );
};

export default HeaderBanner;
