import React from "react";
import JobListItem from "./jobListItem";
import Grid from "@material-ui/core/Grid";
const jobList = (props: any) => (
  <Grid container spacing={4} className="jobsList">
    {props.jobs.map((job: any) => (
      <JobListItem key={job.title} job={job} />
    ))}
  </Grid>
);

export default jobList;
