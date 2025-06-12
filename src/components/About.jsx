import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { div } from "framer-motion/client";

const ServiceCard = ({ index, title, icon }) => {
  return <Tilt>{title}</Tilt>;
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hi, I’m Swastik Yadav — a passionate Frontend / Full Stack Developer
        with hands-on experience in building modern, responsive web applications
        using technologies like React.js, Tailwind CSS, Node.js, and MongoDB.
        I’ve worked on real-world freelance projects and participated in
        hackathons like ReImagine, where I pushed my creativity and technical
        skills to the next level.
      </motion.p>
      <div className="mt-20 flex bg-red-300 flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;
