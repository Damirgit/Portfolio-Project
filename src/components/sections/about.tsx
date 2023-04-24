import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useScrollReveal from "../../hooks/useScrollReveal";
import {
  parentVar,
  fadeUp,
  fadeLeft,
  fadeUpDelay,
} from "../../configs/animations";
import TechStacks from "../TechStacks";
import { StyledAbout, StyledAboutContent } from "../../styles/componentStyles";

const About = () => {
  const [ref, controls] = useScrollReveal(-250);

  return (
    <StyledAbout
      variants={parentVar}
      initial="hidden"
      animate="visible"
      id="about"
    >
      <motion.h2
        ref={ref}
        variants={fadeUp}
        animate={controls}
        className="section-heading"
      >
        About me
      </motion.h2>
      <StyledAboutContent
        variants={parentVar}
        initial="hidden"
        animate={controls}
        ref={ref}
      >
        <motion.div variants={fadeLeft} className="about-text">
          <h3>Damir Fejzula</h3>
          <p>
           I am a web developer and a first-year University student
            currently pursuing a degree in Information Technology at the
            American University of Europe - FON. My primary focus these days is
            on developing responsive and visually appealing web applications.
          </p>
        </motion.div>
        <motion.div className="image-wrapper" variants={fadeUp}>
          <Image
            className="about-image"
            src="/assets/me.jpg"
            alt="Damir Fejzula Photo"
            width={300}
            height={422}
            placeholder="blur"
            blurDataURL="/assets/me.jpg"
          />
        </motion.div>
        <motion.div
          ref={ref}
          initial="initial"
          variants={fadeUpDelay}
          animate={controls}
          className="image-wrapper-square hidden-image"
        >
          <Image
            className="about-image"
            src="/assets/me-mobile.jpg"
            alt="Damir fejzula Photo"
            placeholder="blur"
            blurDataURL="/assets/me-mobile.jpg"
            width={300}
            height={300}
          />
        </motion.div>
      </StyledAboutContent>
      <TechStacks />
    </StyledAbout>
  );
};

export default About;
