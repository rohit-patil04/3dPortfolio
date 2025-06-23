import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import MultipleBallsCanvas from "./canvas/MultipleBallsCanvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <motion.div className="w-full text-center py-10">
        <p className={styles.sectionSubText}>What I Use to Build</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>

      <div className="w-full h-[400px] sm:h-[500px]">
        <MultipleBallsCanvas technologies={technologies} />
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "technologies");
