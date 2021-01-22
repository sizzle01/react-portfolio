import React from "react";
import { Typography } from "@material-ui/core";
import office from "../../asset/images/office.jpg";
import "./profile.css";
import CustomTimeline from "../Timeline/Timeline";
const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="tittle">{resumeData.title}</Typography>
      </div>

      <figure className="profile_image">
        <img src={office} alt=""></img>
      </figure>

      <div className="profile_information">
        <CustomTimeline /> <br />
        <button>My Button</button>
      </div>
    </div>
  );
};

export default Profile;
