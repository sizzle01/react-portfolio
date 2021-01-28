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
};
