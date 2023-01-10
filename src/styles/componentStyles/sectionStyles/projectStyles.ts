import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledDiv = styled(motion.div)`
  .container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }
  :hover {
    color: ${({ theme }) => theme.accentMain};
  }

  .container .card {
    position: relative;
  }

  .container .card .face {
    width: 300px;
    height: 200px;
    transition: 0.4s;
  }

  .container .card .face.face1 {
    position: relative;
    background: #333;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    z-index: 1;
    transform: translateY(100px);
  }

  .container .card:hover .face.face1 {
    transform: translateY(0);
    box-shadow: inset 0 0 60px whitesmoke,
      inset 20px 0 80px ${({ theme }) => theme.textSecond},
      inset -20px 0 80px ${({ theme }) => theme.textSecond},
      inset 20px 0 300px ${({ theme }) => theme.textSecond},
      inset -20px 0 300px ${({ theme }) => theme.textSecond},
      0 0 50px ${({ theme }) => theme.textSecond},
      -10px 0 80px ${({ theme }) => theme.textSecond},
      10px 0 80px ${({ theme }) => theme.textSecond};
  }

  .container .card .face.face1 .content {
    opacity: 0.2;
    transition: 0.5s;
    text-align: center;
  }

  .container .card:hover .face.face1 .content {
    opacity: 1;
  }

  .container .card .face.face1 .content {
    font-size: 3em;
    color: black;
    display: inline-block;
  }

  .container .card .face.face1 .content h3 {
    font-size: 1em;
    color: #190061;
    text-align: center;
  }

  .container .card .face.face1 .content a {
    transition: 0.5s;
  }

  .container .card .face.face2 {
    position: relative;
    background: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
    transform: translateY(-100px);
  }

  .container .card:hover .face.face2 {
    transform: translateY(0);
  }

  .container .card .face.face2 .content p,
  a {
    font-size: 10pt;
    margin: 0;
    padding: 0;
    color: #333;
  }

  .container .card .face.face2 .content a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #190061;
    box-sizing: border-box;
    outline: 1px dashed #333;
    padding: 10px;
    margin: 15px 0 0;
  }

  .container .card .face.face2 .content a:hover {
    background: #333;
    color: whitesmoke;
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
`;

export const StyledProjectCardContainer = styled(motion.li)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;

  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
  @media only screen and (max-width: 680px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 5px;
  }

  :hover .overlay {
      opacity: 0.5;
    }

    :hover .project-techs {
      color: var(--white);
    }

    :hover .project-info {
      color: var(--white);
    }
  }

  h1 {
    font-size: 25px;
    margin-bottom: 10px;

    @media only screen and (max-width: 480px) {
      font-size: 20px;
    }
  }

  .project-techs {
    margin-bottom: 15px;
    color: #a6a6a6;
    transition: var(--transition2);
  }

  .project-techs span:not(:last-child) {
    margin-right: 10px;
  }

  .project-buttons a:not(:last-child) {
    margin-right: 10px;
  }

  .project-button {
    display: flex;
    align-items: flex-end;
    width: 25px;
    height: 25px;
    color: var(--white);
    transition: var(--transition2);
  }
`;
