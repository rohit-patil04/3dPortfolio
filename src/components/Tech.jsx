import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <motion.div className="w-full text-center py-10">
        <p className={styles.sectionSubText}>What I Use to Build</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10'">
        {technologies.map((techonLogy) => (
          <div className="sm:w-36 w-28 h-28 sm:h-36" key={techonLogy.name}>
            <BallCanvas icon={techonLogy.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "technologies");
