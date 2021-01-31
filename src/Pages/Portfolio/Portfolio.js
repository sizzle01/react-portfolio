import React from "react";
import { Grid, Tab, Tabs } from "@material-ui/core";
import { useState } from "react";
import resumeData from "../../utils/resume.Data";
import "./portfolio.css";
import { Switch } from "react-router-dom";
import { TagFaces } from "@material-ui/icons";

const Portfolio = () => {
  const [tabValue, setTabValue] = React.useState("All");
  return (
    <Grid container className="section pb_45 pt_45">
      {/**Title */}
      <Grid item className="section_title mb_30 ">
        <span></span>
        <h6 className="section_title_text" variant="h6">
          About Me
        </h6>
      </Grid>
      {/**tabs */}
      <Grid Item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor="white"
          className="custom_tab"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label="All"
            value="All"
            className={
              tabValue == "All" ? "custonTabs_item active" : "customTabs_item"
            }
          />
          {[...new Set(resumeData.projects.map((item) => item.tag))].map(
            (tag) => (
              <Tab label={tag} value={tag} />
            )
          )}
        </Tabs>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
