import React from "react";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { parentVar, fadeUp } from "../../configs/animations";
import { motion } from "framer-motion";
import useScrollReveal from "../../hooks/useScrollReveal";
import { projects } from "../../configs/data";
import {
  StyledDiv,
  StyledProjectCardContainer,
} from "../../styles/componentStyles";

const Projects = () => {
  const [ref, controls] = useScrollReveal(-250);

  return (
    <StyledDiv
      id="projects"
      variants={parentVar}
      initial="hidden"
      animate={controls}
      ref={ref}
    >
      <motion.h2 variants={fadeUp} className="section-heading">
        My projects
      </motion.h2>
      <StyledProjectCardContainer>
        {projects.map((project) => {
          const { name, image, info, techs, links, alt } = project;
          return (
            <motion.div className="container">
              <motion.div className="card">
                <motion.div className="face face1">
                  <Image
                    src={image}
                    alt={alt}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                  <motion.div className="content">
                    <h1>{name}</h1>
                  </motion.div>
                </motion.div>
                <motion.div className="face face2">
                  <motion.div className="content">
                    <p>{info}</p>
                    <p className="project-techs">
                      {techs.map((tech) => (
                        <span className="tech" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </p>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Github repository of ${name}`}
                      href={links.github}
                    >
                      <FiGithub className="project-button" />
                      source code...
                    </a>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </StyledProjectCardContainer>
    </StyledDiv>
  );
};

export default Projects;
