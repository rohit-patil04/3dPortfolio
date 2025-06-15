
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { github } from "../assets";

const Works = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far </p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>
      
    </>
  )
};

export default Works;
