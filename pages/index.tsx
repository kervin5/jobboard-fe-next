import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { initializeApollo } from "@/lib/apolloClient";
import JobSearchForm from "@/components/ui/jobs/forms/jobSearchForm";
import JobsList from "@/components/ui/jobs/jobsList";
import HeroSection from "@/components/layout/elements/heroSection";
import { gql } from "@apollo/client";

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
  console.log({ props });
  return (
    <>
      <HeroSection>
        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
          Find the job of your dreams
        </Typography>
        <Typography variant="h5" color="inherit" paragraph>
          Some amazing description
        </Typography>

        <JobSearchForm />
      </HeroSection>
      <Container maxWidth="md">
        <JobsList jobs={featuredPosts} />
        <Grid container spacing={5} className={classes.mainGrid}>
          {/* <Main title="From the firehose" posts={posts} /> */}
        </Grid>
      </Container>
    </>
  );
}

export const ALL_POSTS_QUERY = gql`
  query allPosts($first: Int!, $skip: Int!) {
    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      title
      votes
      url
      createdAt
    }
    _allPostsMeta {
      count
    }
  }
`;

export const allPostsQueryVars = {
  skip: 0,
  first: 10,
};
//DO NOT DELETE
//static SSG
export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_POSTS_QUERY,
    variables: allPostsQueryVars,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    unstable_revalidate: 1,
  };
}
