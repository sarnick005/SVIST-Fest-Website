import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SectionTitle = ({ title }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true, margin: "-50px" }}
    className="section_title text-center mb-80"
  >
    <h3 style={{ fontFamily: "Arial", fontWeight: "bold" }}>{title}</h3>
  </motion.div>
);

const LazyMedia = ({ mediaType, mediaSrc, title, onLoad }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    const currentElement = document.getElementById(
      `media-${mediaSrc.replace(/[^a-zA-Z0-9]/g, "-")}`
    );
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) observer.disconnect();
    };
  }, [mediaSrc]);

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  return (
    <div
      id={`media-${mediaSrc.replace(/[^a-zA-Z0-9]/g, "-")}`}
      className="lazy-media-container"
      style={{
        minHeight: "200px",
        background: "#1a1a1a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {!isLoaded && (
        <div
          className="loading-placeholder"
          style={{ color: "#888", fontSize: "14px" }}
        >
          Loading...
        </div>
      )}

      {isInView && mediaType === "video" ? (
        <video
          controls
          preload="metadata"
          style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.3s" }}
          onLoadedData={handleLoad}
        >
          <source src={mediaSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : isInView && mediaType === "image" ? (
        <img
          src={mediaSrc}
          alt={title}
          style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.3s" }}
          onLoad={handleLoad}
        />
      ) : null}
    </div>
  );
};

const ProgramItem = ({
  align = "left",
  title,
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
            viewport={{ once: true }}
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
          viewport={{ once: true }}
        >
          <LazyMedia mediaType={mediaType} mediaSrc={mediaSrc} title={title} />
        </motion.div>
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
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
      title: "Bullet B One",
      mediaType: "image",
      mediaSrc: "/public/img/Enthuzea 2025/band 2025/band1.jpg",
      description: "Bullet",
    },
    {
      align: "right",
      title: "T.R.A.P.",
      mediaType: "image",
      mediaSrc: "/public/img/Enthuzea 2025/band 2025/band2.jpg",
      description: "Arijit Paul",
    },
    {
      align: "right",
      title: "Dancing Program",
      mediaType: "image",
      mediaSrc: "/img/Enthuzea 2025/fest 2024/DSC_0805.JPG",
      description: "First year dance performance",
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
          <div className="col-lg-12" style={{ marginTop: "-100px" }}>
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
              viewport={{ once: true }}
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
