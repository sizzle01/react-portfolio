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
  name: "Aliyu Tunde",
  title: "Front End Engineer|Web Developer",

  birthday: "",
  email: "talktoaliyu@gmail.com",
  address: "Road 3 house 20B ikota villa estate Lekki",
  phone: "08167722341",

  socials: {
    Facebook: {
      link: "https://www.facebook.com",
      text: "Tunde Murtala",
      icon: <FacebookIcon />,
    },

    Twitter: {
      link: "https://twitter.com/ememblow",
      text: "@ememblow",
      icon: <TwitterIcon />,
    },
    LinkedIn: {
      link: "https://www.linkedin.com/in/aliyu-muritala-67b4b015b/",
      text: "Tunde Murtala",
      icon: <LinkedInIcon />,
    },
    Github: {
      link: "https://github.com/sizzle01",
      text: "Sizzle01",
      icon: <GitHubIcon />,
    },
  },
  about:
    "Results-oriented Front-end Developer dedicated to creating and optimizing interactive, user-friendly, and feature-rich websites. Leverage analytical skills and strong attention to detail in order to deliver original and efficient web solutions, provide technical knowledge and expertise, build new websites from start to finish, and successfully manage a team of other software professionals.",

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
      description: "li have been a bad ass developer for 3 years",
      icon: <AssignmentOutlined />,
    },
    {
      title: " Branding Identity",
      description: "li have been a  bad ass developer for 3 years",
      icon: <WebOutlined />,
    },
    {
      title: " Web Developer",
      description: "li have been a bad ass developer for 3 years",
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
      description: ["NodeJS", "PHP"],
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
      image: <img src=".../images/office.jpg" alt="" />,
      title: "project 1",
      caption: "A short description",
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
      caption: "A short description",
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
      caption: "A short description",
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
      caption: "A short description",
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
