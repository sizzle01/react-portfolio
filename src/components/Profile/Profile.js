import React from "react";
import { Typography } from "@material-ui/core";
import office from "../../asset/images/office.jpg";
import "./profile.css";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import resumeData from "../../utils/resume.Data";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineItem from "@material-ui/lab/TimelineItem";
const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent>
      {link ? (
        <Typography>
          <span>{title}:</span>{" "}
          <a href={link} target="blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography>
          <span>{title}:</span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>

      <figure className="profile_image">
        <img src={office} alt=""></img>
      </figure>

      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineOutlinedIcon />}></CustomTimeline>
        <CustomTimelineItem title="Name" text={resumeData.name} />
        <CustomTimelineItem title="Name" text={resumeData.name} />
        <CustomTimelineItem title="Name" text={resumeData.name} />
        <br />
        <button>My Button</button>
      </div>
    </div>
  );
};

export default Profile;
