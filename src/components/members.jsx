import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Header from "./header";
import Footer from "./footer";

// Profile Card Component for displaying individual profiles
const ProfileCard = ({ name, designation, imageSrc, additionalInfo }) => {
  return (
    <motion.div
      className="single_propram"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="inner_wrap">
        <div className="circle_img"></div>
        <div className="porgram_top">
          <span
            className="wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay=".3s"
            style={{ fontFamily: "Arial", fontWeight: "bold" }}
          >
            {name}
          </span>
          <h4
            className="wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".4s"
            style={{ fontFamily: "Arial", fontWeight: "bold" }}
          >
            {designation}
          </h4>
        </div>
        <div
          className="thumb wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay=".5s"
        >
          {imageSrc.endsWith(".mp4") ? (
            <VideoThumbnail videoSrc={imageSrc} />
          ) : (
            <img src={imageSrc} alt={name} loading="lazy" />
          )}
        </div>
        {additionalInfo && (
          <h4
            className="wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".6s"
            style={{ fontFamily: "Arial", fontWeight: "bold" }}
          >
            {additionalInfo}
          </h4>
        )}
      </div>
    </motion.div>
  );
};

// Video Thumbnail Component with play/pause functionality
const VideoThumbnail = ({ videoSrc }) => {
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

  return (
    <video
      ref={videoRef}
      onClick={togglePlay}
      width="640"
      height="360"
      loading="lazy"
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
};

// Section Component for grouping profiles under a heading
const ProfileSection = ({ title, profiles }) => {
  return (
    <motion.div
      className="program_details_area detials_bg_1 overlay2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section_title text-center mb-80 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <h3 style={{ fontFamily: "Arial", fontWeight: "bold" }}>
                {title}
              </h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="program_detail_wrap">
              {profiles.map((profile, index) => (
                <ProfileCard
                  key={index}
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
    {
      name: "Dr. Anindya Sundar Das",
      designation: "Joint Convener",
      imageSrc: "img/enthu/asb.jpg",
    },
    {
      name: "Dr. Somnath Das",
      designation: "Treasurer",
      imageSrc: "/img/Enthuzea 2025/fest 2024/DSC_0608.JPG",
    },
    {
      name: "Mr. Somnath Roy",
      designation: "joint-Treasurer",
      imageSrc: "img/enthu/stnew.jpg",
    },
    {
      name: "Dr. Manasi Mukhopadhyay",
      designation: "Coordinator, Cultural Committee",
      imageSrc: "/img/Enthuzea 2025/fest 2024/DSC_0274.JPG",
    },
    {
      name: "Ms. Somasree Bhadra",
      designation: "Co-Coordinator, Cultural Committee",
      imageSrc: "img/enthu/sm.jpg",
    },
    {
      name: "Dr. Arpan Dutta",
      designation: "Co-Coordinator, Cultural Committee",
      imageSrc: "img/enthu/arpand.jpg",
    },
    {
      name: "Dr. Subhrajyoti Dey",
      designation: "Coordinator, Prize Distribution Committee",
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
      designation: "Co-Coordinator, Volunteer & Hall Management Committee",
      imageSrc: "/img/Enthuzea 2025/fest 2024/DSC_0872.JPG",
    },
    {
      name: "Mr. Koushikk Bhattacharyya",
      designation: "Editor-in-Chief, Website",
      imageSrc: "img/enthu/koushikk.jpg",
    },
  ];

  // Developer profiles data
  const developerProfiles = [
    {
      name: "Ayan Nandi",
      designation: "CSE 3rd year",
      imageSrc: "img/developers/dev4.mp4",
      additionalInfo: "Web Developer",
    },
    {
      name: "Shubhayan Bagchi",
      designation: "CSE 2nd year",
      imageSrc: "img/developers/dev 3.jpeg",
      additionalInfo: "Web Developer",
    },
    {
      name: "Sarnick Chakraborty",
      designation: "CSE 2nd year",
      imageSrc: "img/developers/dev 2.jpeg",
      additionalInfo: "Web Developer",
    },
    {
      name: "Subhakash Paul",
      designation: "CSE 2nd year",
      imageSrc: "img/developers/dev 1.jpg",
      additionalInfo: "Web Developer",
    },
  ];

  // Special thanks profiles data
  const specialThanksProfiles = [
    {
      name: "Barsho Ghosh",
      designation: "GS, Student Union, SVIST",
      imageSrc: "img/enthu/barsho.jpg",
    },
    {
      name: "Anubhab Ghoshal",
      designation: "AGS, Student Union, SVIST",
      imageSrc: "img/assets/ags.JPG",
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
