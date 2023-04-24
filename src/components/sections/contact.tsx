import React from "react";
import { motion } from "framer-motion";
import useScrollReveal from "../../hooks/useScrollReveal";
import { parentVar, fadeUp } from "../../configs/animations";
import { Button } from "../";
import { StyledContact } from "../../styles/componentStyles";

const Contact = () => {
  const [ref, controls] = useScrollReveal(-250);

  return (
    <StyledContact
      variants={parentVar}
      initial="initial"
      animate={controls}
      ref={ref}
      id="contact"
    >
      <motion.h2 variants={fadeUp} className="section-heading">
        Get in touch
      </motion.h2>
      <motion.p variants={fadeUp} className="contact-p">
      Please do not hesitate to get in touch with me via email or instant message.
      </motion.p>
      <motion.div variants={fadeUp}>
        <Button
          isLink={false}
          className="message-button"
          buttonText="Get in touch"
          buttonUrl="mailto:damirfejzulaa@gmail.com"
          target="_blank"
          rel="noreferrer"
        />
      </motion.div>
    </StyledContact>
  );
};

export default Contact;
