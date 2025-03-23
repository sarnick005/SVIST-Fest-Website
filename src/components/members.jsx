import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./header";
import Footer from "./footer";

// Lazy loading component for media
const LazyMedia = ({ mediaType, mediaSrc, title, onLoad }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const mediaId = `media-${mediaSrc.replace(/[^a-zA-Z0-9]/g, "-")}`;

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

    const currentElement = document.getElementById(mediaId);
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) observer.disconnect();
    };
  }, [mediaSrc, mediaId]);

  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  return (
    <div id={mediaId} className="media-container">
      {isInView && (
        <>
          {!isLoaded && (
            <div className="placeholder-loader">
              <div className="loading-spinner"></div>
            </div>
          )}
          {mediaType === "video" ? (
            <VideoThumbnail
              videoSrc={mediaSrc}
              onLoad={handleLoad}
              style={{ opacity: isLoaded ? 1 : 0 }}
            />
          ) : (
            <img
              src={mediaSrc}
              alt={title}
              onLoad={handleLoad}
              style={{ opacity: isLoaded ? 1 : 0 }}
              loading="lazy"
            />
          )}
        </>
      )}
    </div>
  );
};

// Section Title component with animation
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

// Video Thumbnail Component with play/pause functionality
const VideoThumbnail = ({ videoSrc, onLoad }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", () => {
        if (onLoad) onLoad();
      });
    }
  }, [onLoad]);

  return (
    <video
      ref={videoRef}
      onClick={togglePlay}
      width="640"
      height="360"
      preload="metadata"
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
};

// Profile Card Component for displaying individual profiles
const ProfileCard = ({
  name,
  designation,
  imageSrc,
  additionalInfo,
  index,
}) => {
  return (
    <motion.div
      className="single_propram"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="inner_wrap">
        <div className="circle_img"></div>
        <div className="porgram_top">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            viewport={{ once: true }}
            style={{ fontFamily: "Arial", fontWeight: "bold" }}
          >
            {name}
          </motion.span>
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            viewport={{ once: true }}
            style={{ fontFamily: "Arial", fontWeight: "bold" }}
          >
            {designation}
          </motion.h4>
        </div>
        <motion.div
          className="thumb"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
          viewport={{ once: true }}
        >
          <LazyMedia
            mediaType={imageSrc.endsWith(".mp4") ? "video" : "image"}
            mediaSrc={imageSrc}
            title={name}
          />
        </motion.div>
        {additionalInfo && (
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            viewport={{ once: true }}
            style={{ fontFamily: "Arial", fontWeight: "bold" }}
          >
            {additionalInfo}
          </motion.h4>
        )}
      </div>
    </motion.div>
  );
};

// Section Component for grouping profiles under a heading
const ProfileSection = ({ title, profiles }) => {
  return (
    <motion.div
      className="program_details_area detials_bg_1 overlay2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionTitle title={title} />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="program_detail_wrap">
              {profiles.map((profile, index) => (
                <ProfileCard
                  key={index}
                  index={index}
                  name={profile.name}
                  designation={profile.designation}
                  imageSrc={profile.imageSrc}
                  additionalInfo={profile.additionalInfo}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Main Member Component
const Member = () => {
  // Faculty and staff profile data
  const facultyProfiles = [
    {
      name: "Dr. Nandan Gupta",
      designation: "Director, SVIST",
      imageSrc: "img/enthu/a.jpg",
    },
    {
      name: "Mr. Pabitra Kumar Gayen",
      designation: "Deputy Director, SVIST",
      imageSrc: "img/enthu/director.jpeg",
    },
    {
      name: "Dr. Sonali Sarkar",
      designation: "Principal, SVIST",
      imageSrc: "img/enthu/principal.jpg",
    },
    {
      name: "Mr. Samrat Paul",
      designation: "Convener",
      imageSrc: "img/enthu/smp.jpg",
    },
    // {
    //   name: "Dr. Anindya Sundar Das",
    //   designation: "Joint Convener",
    //   imageSrc: "img/enthu/asb.jpg",
    // },
    {
      name: "Dr. Somnath Das",
      designation: "Joint convener & Treasurer",
      imageSrc: "/img/Enthuzea 2025/fest 2024/DSC_0608.JPG",
    },
    {
      name: "Mr. Somnath Roy",
      designation: "Joint - Treasurer",
      imageSrc: "img/enthu/stnew.jpg",
    },
    {
      name: "Dr. Manasi Mukhopadhyay",
      designation: "Cultural head",
      imageSrc: "/img/Enthuzea 2025/fest 2024/DSC_0274.JPG",
    },
    // {
    //   name: "Ms. Somasree Bhadra",
    //   designation: "Co-Coordinator, Cultural Committee",
    //   imageSrc: "img/enthu/sm.jpg",
    // },
    {
      name: "Dr. Arpan Dutta",
      designation: "Co-Coordinator, Cultural Committee",
      imageSrc: "img/enthu/arpand.jpg",
    },
    {
      name: "Dr. Subhrajyoti Dey",
      designation: "Co-Coordinator, Prize Distribution Committee",
      imageSrc: "img/enthu/sbh.jpg",
    },
    {
      name: "Mr. Shreesendu Bhattacharjee",
      designation: "Coordinator, Food Committee",
      imageSrc: "img/enthu/shir.jpg",
    },
    {
      name: "Dr. Suman Das",
      designation: "Coordinator, Volunteer & Hall Management Committee",
      imageSrc: "img/enthu/sdas.jpg",
    },
    {
      name: "Mr. Santu Banerjee",
      designation: "Students Volunteer Management",
      imageSrc: "/img/Enthuzea 2025/fest 2024/DSC_0872.JPG",
    },
    {
      name: "Mr. Koushikk Bhattacharyya",
      designation: "Website & Digital Promotion",
      imageSrc: "/img/Enthuzea 2025/member/kbh sir.jpg",
    },
  ];

  // Developer profiles data
  const developerProfiles = [
    {
      name: "Rajarshi Mondal",
      designation: "CSE 3rd year",
      imageSrc: "/img/Enthuzea 2025/member/rajarshi.jpg",
      additionalInfo: "Hosting and Coordinator",
    },
    {
      name: "Shubhayan Bagchi",
      designation: "CSE 3rd year",
      imageSrc: "img/developers/dev 3.jpeg",
      additionalInfo: "Web Developer",
    },
    {
      name: "Sarnick Chakraborty",
      designation: "CSE 3rd year",
      imageSrc: "img/developers/dev 2.jpeg",
      additionalInfo: "Web Developer",
    },
    {
      name: "Subhakash Paul",
      designation: "CSE 3rd year",
      imageSrc: "img/developers/dev 1.jpg",
      additionalInfo: "Web Developer",
    },
  ];

  // Special thanks profiles data
  const specialThanksProfiles = [
    {
      name: "Anubhab Ghoshal",
      designation: "GS, Student Union, SVIST",
      imageSrc: "img/assets/ags.JPG",
    },
    {
      name: "Rajarshi Mondal",
      designation: "Member of AGS Forum, CSE",
      imageSrc: "/img/Enthuzea 2025/member/rajarshi.jpg",
    },
    {
      name: "Manish Talukdar",
      designation: "Member of AGS Forum, ECE",
      imageSrc: "/img/Enthuzea 2025/member/Manish.jpg",
    },
    {
      name: "Pritish Das",
      designation: "Member of AGS Forum, EEE",
      imageSrc: "/img/Enthuzea 2025/member/Pritish.jpg",
    },
    {
      name: "Arnab Roy",
      designation: "Member of AGS Forum, ME",
      imageSrc: "/img/Enthuzea 2025/member/Arnob.jpg",
    },
    {
      name: "Argha Jyoti Mondal",
      designation: "Member of AGS Forum, CE",
      imageSrc: "/img/Enthuzea 2025/member/Argho.jpg",
    },
  ];

  return (
    <div style={{ backgroundColor: "black" }}>
      <Header />
      <br />
      <ProfileSection title="Coordinator/Faculty" profiles={facultyProfiles} />
      <ProfileSection
        title="Website Development"
        profiles={developerProfiles}
      />
      <ProfileSection title="Special Thanks" profiles={specialThanksProfiles} />
      <Footer />
    </div>
  );
};

export default Member;
