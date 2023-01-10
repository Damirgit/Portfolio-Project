// @ts-nocheck
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "styled-components";
import useTabActive from "../../hooks/useTabActive";

const svgVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 3,
    },
  },
};

const pathVariants = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    opacity: 2,
    pathLength: 0.5,
    transition: {
      duration: 5,
      ease: "easeIn",
    },
  },
};

const NameLoader = ({ finishLoading }) => {
  const theme = useTheme();
  const isTabActive = useTabActive();

  return (
    <motion.svg
      className="Loader"
      initial={isTabActive ? "initial" : false}
      animate={isTabActive ? "animate" : false}
      onAnimationComplete={finishLoading}
      variants={svgVariants}
      exit="exit"
      width="454"
      height="119"
      viewBox="0 0 454 119"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1_4)">
        <motion.path
          d="M6.18182 108V109.5H7.68182H40C50.8318 109.5 60.1336 107.364 67.8394 103.017L67.8439 103.014C75.542 98.6353 81.4077 92.3761 85.4235 84.2741L85.4247 84.2718C89.4346 76.1464 91.4091 66.5166 91.4091 55.4318C91.4091 44.4172 89.4523 34.8721 85.4758 26.8476C81.4986 18.7875 75.7575 12.5779 68.2621 8.26386C60.7619 3.9129 51.7974 1.77272 41.4318 1.77272H7.68182H6.18182V3.27272V108ZM72.1264 34.2121L72.1277 34.215C74.7813 40.0791 76.1364 47.1364 76.1364 55.4318C76.1364 63.7944 74.7646 70.92 72.0769 76.8526C69.4057 82.7487 65.3696 87.2652 59.9511 90.4449C54.5491 93.6149 47.655 95.25 39.1818 95.25H21.8636V16.0227H40.6136C48.597 16.0227 55.1467 17.6357 60.3452 20.7678L60.3511 20.7713C65.5612 23.8779 69.4842 28.3405 72.1264 34.2121ZM110.555 109.5H111.615L111.969 108.502L122.143 79.8409H162.377L172.551 108.502L172.905 109.5H173.964H187.26H189.409L188.668 107.483L150.213 2.7557L149.853 1.77272H148.805H135.714H134.667L134.306 2.7557L95.8519 107.483L95.1112 109.5H97.2599H110.555ZM142.26 23.1723L157.318 65.5909H127.202L142.26 23.1723ZM203.572 1.77272H202.072V3.27272V108V109.5H203.572H215.436H216.936V108V33.5355L247.799 108.571L248.181 109.5H249.186H260.641H261.646L262.028 108.571L292.891 33.5355V108V109.5H294.391H306.254H307.754V108V3.27272V1.77272H306.254H291.118H290.111L289.73 2.70439L254.913 87.7444L220.097 2.70439L219.716 1.77272H218.709H203.572ZM345.864 3.27272V1.77272H344.364H331.682H330.182V3.27272V108V109.5H331.682H344.364H345.864V108V3.27272ZM368.291 108V109.5H369.791H382.473H383.973V108V68.5909H405.382C405.985 68.5909 406.581 68.5836 407.17 68.569L428.812 108.712L429.237 109.5H430.132H444.859H447.391L446.175 107.279L423.353 65.6196C424.292 65.2441 425.196 64.8324 426.065 64.384L426.071 64.3804C431.531 61.5257 435.633 57.5676 438.311 52.5021C440.963 47.4842 442.268 41.7659 442.268 35.3864C442.268 29.0063 440.963 23.2576 438.315 18.1761C435.639 13.0414 431.52 9.03007 426.026 6.13955C420.493 3.19494 413.515 1.77272 405.178 1.77272H369.791H368.291V3.27272V108ZM404.973 54.1364H383.973V16.0227H404.768C410.294 16.0227 414.587 16.8747 417.746 18.4697L417.756 18.475C420.936 20.0493 423.189 22.2469 424.597 25.0629C426.043 27.954 426.791 31.3809 426.791 35.3864C426.791 39.3936 426.042 42.7605 424.606 45.5385L424.603 45.5443C423.239 48.2122 421.015 50.3128 417.829 51.827L417.824 51.8295C414.691 53.3335 410.438 54.1364 404.973 54.1364Z"
          stroke={theme.accentMain}
          strokeWidth="3"
          shapeRendering="crispEdges"
          variants={pathVariants}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_4"
          x="0.681824"
          y="0.272724"
          width="453.242"
          height="118.727"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_4"
            result="shape"
          />
        </filter>
      </defs>
    </motion.svg>
  );
};

export default NameLoader;
