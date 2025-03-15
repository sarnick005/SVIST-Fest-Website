import React from "react";
import { motion } from "framer-motion";

// Reusable components
const SectionTitle = ({ title }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="section_title text-center mb-80"
  >
    <h3 style={{ fontFamily: "Arial", fontWeight: "bold" }}>{title}</h3>
  </motion.div>
);

const ProgramItem = ({
  align = "left",
  title,
  date,
  mediaType,
  mediaSrc,
  description,
}) => {
  const animationDirection = align === "left" ? { x: -50 } : { x: 50 };

  return (
    <div className="single_propram">
      <div className="inner_wrap">
        <div className="circle_img"></div>
        <div className="porgram_top">
          <motion.span
            initial={{ opacity: 0, ...animationDirection }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ fontFamily: "Arial", fontWeight: "bold" }}
          >
            {title}
          </motion.span>
        </div>

        <motion.div
          className="thumb"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {mediaType === "video" ? (
            <video controls loop>
              <source src={mediaSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={mediaSrc} alt={title} />
          )}
        </motion.div>

        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ fontFamily: "Arial", fontWeight: "bold" }}
        >
          {description}
        </motion.h4>
      </div>
    </div>
  );
};

const Details = () => {
  const programItems = [
    {
      align: "left",
      title: "Enthuzea 2k25",
      mediaType: "video",
      mediaSrc: "/img/Enthuzea 2025/fest 2024/fest video.mp4",
      description: "Mark the date: March 26",
    },
    {
      align: "left",
      title: "Enthuzea 2k25",
      mediaType: "video",
      mediaSrc: "/img/Enthuzea 2025/fest 2024/fest video 2.mp4",
      description: "Mark the date: March 27",
    },
    {
      align: "right",
      title: "Dancing Program",
      mediaType: "image",
      mediaSrc: "/img/Enthuzea 2025/fest 2024/DSC_0805.JPG",
      description: "First year dance performance",
    },
    {
      align: "right",
      title: "Band Performance",
      mediaType: "image",
      mediaSrc: "/img/Enthuzea 2025/fest 2024/DSC_0218.JPG",
      description: "Annanya Chakraborty",
    },
    {
      align: "left",
      title: "Addiction Band",
      mediaType: "image",
      mediaSrc: "/img/Enthuzea 2025/fest 2024/DSC_1271.JPG",
      description: "Enjoy the musical melody",
    },
  ];

  return (
    <div className="program_details_area detials_bg_1 overlay2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionTitle title="Fest Timings" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <motion.div
              className="program_detail_wrap"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {programItems.map((item, index) => (
                <ProgramItem
                  key={index}
                  align={item.align}
                  title={item.title}
                  mediaType={item.mediaType}
                  mediaSrc={item.mediaSrc}
                  description={item.description}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
