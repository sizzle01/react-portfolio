import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import {
  AssignmentOutlined,
  DeveloperBoard,
  WebOutlined,
  YouTube,
  Language,
} from "@material-ui/icons";

export default {
  name: "Tunde codes",
  title: "Front end developer",

  birthday: "5th 4 19983",
  email: "talktoaliyu@gmail.com",
  address: "road 3 house 2oB ikota villa estate Lekki",
  phone: "08167722341",

  socials: {
    Facebook: {
      link: "https://www.facebook.com",
      text: "Tunde Murtala",
      icon: <FacebookIcon />,
    },

    Twitter: {
      link: "https://www.twitter.com",
      text: "imsizzle",
      icon: <TwitterIcon />,
    },
    LinkedIn: {
      link: "https://www.linkedin.com",
      text: "Tunde Murtala",
      icon: <LinkedInIcon />,
    },
    Github: {
      link: "https://www.github.com",
      text: "Sizzle01",
      icon: <GitHubIcon />,
    },
  },
  about:
    "Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate. \n\n Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.",

  experiences: [
    {
      title: "Work 1",
      date: "2019 to present",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
    {
      title: "Work 2",
      date: "2019 to 2015",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
    {
      title: "Work 3",
      date: "2013 to 2014",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
  ],
  educations: [
    {
      title: "education 1",
      date: "2019 to present",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
    {
      title: "education 2",
      date: "2019 to 2015",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
    {
      title: "education 3",
      date: "2013 to 2014",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
  ],
  services: [
    {
      title: " Web Developer",
      description: "li have been a badass developer for 3 years",
      icon: <AssignmentOutlined />,
    },
    {
      title: " Branding Identity",
      description: "li have been a badass developer for 3 years",
      icon: <WebOutlined />,
    },
    {
      title: " Web Developer",
      description: "li have been a badass developer for 3 years",
      icon: <AssignmentOutlined />,
    },
  ],

  skills: [
    {
      title: "FRONT-END",
      description: [
        "ReactJS",
        "Javascript",
        "Typescript",
        "Bootstrap",
        "Material-UI",
      ],
    },
    {
      title: "BACK-END",
      description: ["NpdeJS", "PHP"],
    },
    {
      title: "DATABASES",
      description: ["MySQL", "MongoDB"],
    },
    {
      title: "VERSION-CONTROL",
      description: ["Git", "GitHub"],
    },
  ],

  projects: [
    {
      tag: "React",
      image: "https://www.computerhope.com/jargon/r/random-dice.jpg",
      title: "project 1",
      description:
        "this is my project description, please check it out and let me know if it stands the chance to compete with high tech projects",
      links: [
        { link: "https://www.github.com", icon: <YouTube /> },
        { link: "https://www.github.com", icon: <GitHubIcon /> },
        { link: "https://www.github.com", icon: <Language /> },
      ],
    },
    {
      tag: "Python",
      image: "https://www.computerhope.com/jargon/r/random-dice.jpg",
      title: "project 2",
      description:
        "this is my project description, please check it out and let me know if it stands the chance to compete with high tech projects",
      links: [
        { link: "https://www.github.com", icon: <YouTube /> },
        { link: "https://www.github.com", icon: <GitHubIcon /> },
        { link: "https://www.github.com", icon: <Language /> },
      ],
    },
    {
      tag: "java",
      image: "https://www.computerhope.com/jargon/r/random-dice.jpg",
      title: "project 3",
      description:
        "this is my project description, please check it out and let me know if it stands the chance to compete with high tech projects",
      links: [
        { link: "https://www.github.com", icon: <YouTube /> },
        { link: "https://www.github.com", icon: <GitHubIcon /> },
        { link: "https://www.github.com", icon: <Language /> },
      ],
    },
    {
      tag: "React",
      image: "https://www.computerhope.com/jargon/r/random-dice.jpg",
      title: "project 4",
      description:
        "this is my project description, please check it out and let me know if it stands the chance to compete with high tech projects",
      links: [
        { link: "https://www.github.com", icon: <YouTube /> },
        { link: "https://www.github.com", icon: <GitHubIcon /> },
        { link: "https://www.github.com", icon: <Language /> },
      ],
    },
  ],
};
