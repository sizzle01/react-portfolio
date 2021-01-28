import React from "react";
import { Grid, Typography } from "@material-ui/core";
import resumeData from "../../utils/resume.Data";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/Timeline/Timeline";
import WorkIcon from "@material-ui/icons/Work";
import "./resume.css";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineItem from "@material-ui/lab/TimelineItem";
const Resume = () => {
  return (
    <>
      {/*About me*/}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text" variant="h6">
            About Me
          </h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme_text">
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>
      {/*education and experiences*/}
      <Grid container className="section">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text" variant="h6">
            Resume
          </h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container className="resume_timeline">
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Work Experience" icon={<WorkIcon />}>
                {resumeData.experiences.map((experience) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {experience.title}
                      </Typography>
                      <Typography className="timeline_date">
                        {experience.date}
                      </Typography>
                      <Typography className="timeline_description">
                        {experience.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Work Experience" icon={<WorkIcon />}>
                {resumeData.experiences.map((experience) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {experience.title}
                      </Typography>
                      <Typography className="timeline_date">
                        {experience.date}
                      </Typography>
                      <Typography className="timeline_description">
                        {experience.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/*services*/}
      <Grid container className="section"></Grid>
      {/*skills*/}
      <Grid container className="section"></Grid>
      {/*contact*/}
      <Grid container className="section"></Grid>
    </>
  );
};

export default Resume;
