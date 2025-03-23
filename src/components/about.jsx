import Footer from "./footer";
import Header from "./header";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <Header />
      <div className="about_area black_bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <motion.div
                className="section_title text-center mb-80"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h3 style={{ color: "red", marginTop: "8rem" }}>
                  About Program
                </h3>
                <p>
                  This event occurs in mid-May every year. It is a stage to
                  bring out the talents of our students, filled with delight,
                  fun, and energy.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <motion.div
                className="about_thumb"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <img src="/img/Enthuzea 2025/invitation card/Invitation letter.jpg" alt="Invitation" />
              </motion.div>
            </div>

            <div className="col-lg-5 col-md-6">
              <motion.div
                className="about_info pl-68"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <h4>ENTHUZEA is awesome!</h4>
                <p style={{ color: "white" }}>
                  ENTHUZEA happens every mid-summer. This event brings energy,
                  entertainment, and joy that everyone looks forward to.
                </p>
                <a href="/body" className="boxed-btn3">
                  Know More
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
