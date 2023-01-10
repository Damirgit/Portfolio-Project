import {
  INavLinks,
  IProjects,
  ISocialLinks,
  ISkills,
  CustomSeoProps,
} from "./types";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillApi,
  AiOutlineTeam,
  AiFillMessage,
  AiFillHtml5,
} from "react-icons/ai";
import {
  FiTwitter,
  FiLinkedin,
  FiGithub,
  FiFacebook,
  FiFigma,
} from "react-icons/fi";
import { GiPlayerTime, GiThink } from "react-icons/gi";
import { BsArrowRepeat } from "react-icons/bs";
import { IoLogoSass } from "react-icons/io";
import { GrGraphQl } from "react-icons/gr";
import {
  SiTypescript,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiStyledcomponents,
} from "react-icons/si";
import {
  FaReact,
  FaGitAlt,
  FaAssistiveListeningSystems,
  FaFistRaised,
  FaHandHoldingHeart,
  FaPuzzlePiece,
  FaDocker,
} from "react-icons/fa";

export const navLinks: INavLinks = {
  home: [
    {
      name: "About",
      url: "/#about",
    },
    {
      name: "Projects",
      url: "/#projects",
    },
    {
      name: "Contact",
      url: "/#contact",
    },
  ],
  otherPage: [
    {
      name: "Home",
      url: "/",
    },
  ],
};

export const skills: ISkills[] = [
  {
    id: "html",
    name: "HTML5",
    Icon: AiFillHtml5,
  },
  {
    id: "Css3",
    name: "Css3",
    Icon: SiCss3,
  },

  {
    id: "javascript",
    name: "Javascript",
    Icon: SiJavascript,
  },
  {
    id: "typescript",
    name: "Typescript",
    Icon: SiTypescript,
  },
  {
    id: "react",
    name: "React.js",
    Icon: FaReact,
  },
  {
    id: "graphql",
    name: "GraphQL",
    Icon: GrGraphQl,
  },
  {
    id: "restapi",
    name: "REST API",
    Icon: AiFillApi,
  },
  {
    id: "styled-components",
    name: "Styled-Components",
    Icon: SiStyledcomponents,
  },
  {
    id: "sass",
    name: "Sass",
    Icon: IoLogoSass,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
  },
  {
    id: "docker",
    name: "Docker",
    Icon: FaDocker,
  },
  {
    id: "github",
    name: "Github",
    Icon: AiFillGithub,
  },
  {
    id: "git",
    name: "Git",
    Icon: FaGitAlt,
  },
  {
    id: "figma",
    name: "Figma",
    Icon: FiFigma,
  },
];

export const softSkills: ISkills[] = [
  {
    id: "teamplayer",
    name: "Team Player",
    Icon: AiOutlineTeam,
  },
  {
    id: "fast-independent",
    name: "Fast and Independent Learner",
    Icon: GiPlayerTime,
  },
  {
    id: "adaptive",
    name: "Adaptive",
    Icon: BsArrowRepeat,
  },
  {
    id: "listener",
    name: "Listener",
    Icon: FaAssistiveListeningSystems,
  },
  {
    id: "highly-motivated",
    name: "Highly Motivated",
    Icon: FaFistRaised,
  },
  {
    id: "passionate",
    name: "Passionate",
    Icon: FaHandHoldingHeart,
  },
  {
    id: "communication",
    name: "Communication",
    Icon: AiFillMessage,
  },
  {
    id: "critical-thinker",
    name: "Critical Thinker",
    Icon: GiThink,
  },
  {
    id: "problem-solver",
    name: "Problem Solver",
    Icon: FaPuzzlePiece,
  },
];

export const customSeo: CustomSeoProps = {
  description:
    "Hi! I am Damir Fejzula, junior web developer based in Skopje,North Macedonia. I started my jurney in october of 2021, one year later i'm still here",
  title: "Damir Fejzula",
  image: "https://zomeru.com/assets/OG.png",
  url: "https://zomeru.com/",
  twitterUsername: "@Damir_fejzula",
};

export const nextSeo = {
  title: "Damir Fejzula",
  description:
    "Hi! I am Damir Fejzula, junior web developer based in Skopje,North Macedonia. I started my jurney in october of 2021, one year later i'm still here",
  canonical: "https://DamirFejzula.com/",
  openGraph: {
    url: "https://DamirFejzula.com/",
    title: "Damir Fejzula",
    description:
      "Hi! I am Damir Fejzula, junior web developer based in Skopje,North Macedonia. I started my jurney in october of 2021, one year later i'm still here",
    images: [
      {
        url: "https://zomeru.com/assets/OG.png",
      },
    ],
    site_name: "Damir Fejzula",
  },
  twitter: {
    handle: "@Damir_fejzula",
    site: "https://DamirFejzula.com/",
    cardType: "summary_large_image",
  },
};

export const projects: IProjects[] = [
  {
    name: "Crypto Dash",
    image: "/assets/projects/crypto-dash.png",
    alt: "Crypto dashboard website",
    info: "Crypto dashboard is the final project for my fornt-end accademy.",
    techs: ["Javascript", "React.js", "Css", "Bootstrap", "Axios"],
    links: {
      github: "https://github.com/Damirgit/crypto",
    },
  },
  {
    name: "Portfolio Website",
    image: "/assets/projects/Porfolio.png",
    alt: "Portfolio Website",
    info: "Portfolio Website for personal use.",
    techs: ["Typescript", "React.js", "Next.js", "Styled Components"],
    links: {
      github: "https://github.com/Damirgit/crypto",
    },
  },
  {
    name: "Todo App",
    image: "/assets/projects/todo.png",
    alt: "todo app",
    info: "todo app that shows vanila js skills",
    techs: [
      "Javascript",
      "HTML",
      "Css",
    ],
    links: {
      github: "https://github.com/Damirgit/crypto",
    },
  },
];

export const socialLinks: ISocialLinks[] = [
  {
    name: "Facebook",
    url: "/facebook",
    Icon: FiFacebook,
  },
  {
    name: "Instagram",
    url: "/instagram",
    Icon: AiOutlineInstagram,
  },
  {
    name: "Twitter",
    url: "/twitter",
    Icon: FiTwitter,
  },
  {
    name: "Linkedin",
    url: "/linkedin",
    Icon: FiLinkedin,
  },
  {
    name: "Github",
    url: "/github",
    Icon: FiGithub,
  },
];
