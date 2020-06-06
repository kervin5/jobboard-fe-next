import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3, 2),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6, 0),
    },
  },
}));

export default function heroSection(props: any) {
  const classes = useStyles();

  return (
    <Paper className={classes.mainFeaturedPost}>
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={12}>
          <Container maxWidth="md">
            <div className={classes.mainFeaturedPostContent}>
              {props.children}
            </div>
          </Container>
        </Grid>
      </Grid>
    </Paper>
  );
}
