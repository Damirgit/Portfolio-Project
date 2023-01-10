import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHero = styled.section`
  align-items: center;
  width: 100%;
  max-height: calc(100vh - var(--nav-height));
  max-width: var(--max-width);
`;

export const StyledHeroContainer = styled.div`
  padding: 0 120px;
  height: calc(100% - 50px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 680px) {
    padding: 0 50px;
  }

  @media only screen and (max-width: 500px) {
    padding: 0 20px;
  }

  @media only screen and (max-width: 400px) {
    padding: 0 0px;
  }
  .hero-container {
    display: flex;
    flex-direction: collumn;
    align-items: center;

    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }
  }
`;

export const StyledHeroContent = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 1000px) {
    text-align: center;
  }

  h1 {
    font-weight: 500;
    font-size: 22px;
    margin-bottom: 20px;

    @media only screen and (max-width: 600px) {
      font-size: 20px;
    }
  }

  h2 {
    margin-left: -8px;
    font-weight: 700;
    font-size: clamp(28px, 7vw, 85px);
    margin-bottom: 10px;
    position: relative;
    max-width: 720px;
  }

  h3 {
    font-weight: 700;
    font-size: clamp(20px, 5vw, 55px);
    margin-bottom: 20px;
    color: ${({ theme }) => theme.textSecond};

    @media only screen and (max-width: 1000px) {
      margin-left: 0;
    }
  }

  .four {
    max-width: 60%;
    color: ${({ theme }) => theme.textSecond};

    @media only screen and (max-width: 1000px) {
      margin-left: 0;
      max-width: 100%;
    }
  }

  .buttons-container {
    display: flex;

    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }
  }
  .hero-btn {
    .hero-btn {
      width: 180px;
      height: 60px;
      cursor: pointer;
      background: transparent;
      border: 1px solid #91c9ff;
      outline: none;
      transition: 1s ease-in-out;
      @media only screen and (max-width: 400px) {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }
    }

    svg {
      position: absolute;
      left: 0;
      top: 0;
      fill: none;
      stroke: #fff;
      stroke-dasharray: 150 480;
      stroke-dashoffset: 150;
      transition: 1s ease-in-out;
    }

    .hero-btn:hover {
      transition: 1s ease-in-out;
      background: #4f95da;
    }

    .hero-btn:hover svg {
      stroke-dashoffset: -480;
    }

    .hero-btn span {
      color: white;
      font-size: 18px;
      font-weight: 100;
    }
  }
  .hero-buttons {
    margin-top: 30px;

    @media only screen and (min-width: 600px) {
      :not(:last-child) {
        margin-right: 20px;
      }
    }

    @media only screen and (max-width: 1000px) {
      margin: 30px auto 0 auto;
    }
  }

  .icon-container {
    transform: scale(1);

    :hover {
      transform: scale(2);
    }
  }
`;
