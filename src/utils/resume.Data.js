import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default {
  name: "Tunde codes",
  title: "Front end developer",

  birthday: "5th 4 19983",
  email: "talktoaliyu@gmail.com",
  address: "roa 3 house 2oB ikota villa estate Lekki",
  phone: "08167722341",

  socials: {
    facebook: {
      link: "https://www.facebook.com",
      text: "Tunde Murtala",
      icon: <FacebookIcon />,
    },

    twitter: {
      link: "https://www.twitter.com",
      text: "imsizzle",
      icon: <TwitterIcon />,
    },
    linkedin: {
      link: "https://www.linkedin.com",
      text: "Tunde Murtala",
      icon: <LinkedInIcon />,
    },
    facebook: {
      link: "https://www.github.com",
      text: "Sizzle01",
      icon: <GitHubIcon />,
    },
  },
};
