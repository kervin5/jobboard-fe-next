import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import HeroSection from "../components/layout/elements/heroSection";
import JobsList from "../components/ui/jobs/jobsList";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
];

export default function HomePage(props: { children: ReactElement }) {
  const classes = useStyles();

  return (
    <>
      <HeroSection>
        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
          WHat's going on
        </Typography>
        <Typography variant="h5" color="inherit" paragraph>
          Some amazing description
        </Typography>
        <Link variant="subtitle1" href="#">
          The explanation
        </Link>
      </HeroSection>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <JobsList jobs={featuredPosts} />
        </Grid>
        <Grid container spacing={5} className={classes.mainGrid}>
          {/* <Main title="From the firehose" posts={posts} /> */}
        </Grid>
      </Container>
    </>
  );
}
