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
  AiFillHtml5,
} from "react-icons/ai";
import {
  FiTwitter,
  FiLinkedin,
  FiGithub,
  FiFacebook,
  FiFigma,
} from "react-icons/fi";
import { IoLogoSass } from "react-icons/io";
import { GrGraphQl } from "react-icons/gr";
import {
  SiTypescript,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiStyledcomponents,
} from "react-icons/si";
import { FaReact, FaGitAlt, FaDocker } from "react-icons/fa";

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

export const customSeo: CustomSeoProps = {
  description:
    "Hi! I am Damir Fejzula, junior web developer based in Skopje,North Macedonia. I started my jurney in october of 2021, one year later i'm still here",
  title: "Damir Fejzula",
  image: "/assets/projects/Porfolio.png",
  url: "https://damirfejzula.com/",
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
        image: "/assets/projects/Porfolio.png",
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
    techs: ["Javascript", "HTML", "Css"],
    links: {
      github: "https://github.com/Damirgit/Todo-app",
    },
  },
];

export const socialLinks: ISocialLinks[] = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/fejzula6",
    Icon: FiFacebook,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/damir_fejzula/",
    Icon: AiOutlineInstagram,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/damirfejzula",
    Icon: FiTwitter,
  },
  {
    name: "Linkedin",
    url: "https://mk.linkedin.com/in/damir-fejzula-b48013252",
    Icon: FiLinkedin,
  },
  {
    name: "Github",
    url: "https://github.com/Damirgit",
    Icon: FiGithub,
  },
];
