import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "../../configs/animations";
import { Button } from "../index";
import {
  StyledHero,
  StyledHeroContainer,
  StyledHeroContent,
} from "../../styles/componentStyles";

const Hero = () => {
  const one = <h1>Hi there! My name is</h1>;
  const two = <h2>Damir Fejzula.</h2>;
  const three = <h3>I create websites for fun.</h3>;
  const four = (
    <p className="four">
     junior web developer based in Skopje, North Macedonia, I started my journey in this field back in October 2021. Since then, I'm excited to continue creating and innovating in this dynamic and ever-changing industry.
    </p>
  );

  const heroTexts = [one, two, three, four];

  const heroContainerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  return (
    <StyledHero>
      <StyledHeroContainer>
        <motion.div className="hero-container">
          <StyledHeroContent
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {heroTexts.map((text, i) => (
              <motion.div variants={fadeUp} key={i}>
                {text}
              </motion.div>
            ))}
            <motion.div className="buttons-container" variants={fadeUp}>
              <Button
                isLink={false}
                className="hero-btn"
                buttonUrl="#contact"
                buttonText="Contact me..."
              >
                <svg
                  width="180px"
                  height="60px"
                  viewBox="0 0 180 60"
                  className="border"
                >
                  <polyline
                    points="179,1 179,59 1,59 1,1 179,1"
                    className="bg-line"
                  />
                  <polyline
                    points="179,1 179,59 1,59 1,1 179,1"
                    className="hl-line"
                  />
                </svg>
              </Button>
            </motion.div>
          </StyledHeroContent>
          <motion.div variants={fadeUp}>
            <Image
              className="about-image"
              src="/assets/wave.jpg"
              alt="Damir Fejzula Photo"
              width={300}
              height={300}
              placeholder="blur"
              blurDataURL="/assets/wave.jpg"
            />
          </motion.div>
        </motion.div>
      </StyledHeroContainer>
    </StyledHero>
  );
};

export default Hero;
