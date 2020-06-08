import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
  },
  submit: {
    height: "100%",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  input: {
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
}));

export default function jobSearchForm() {
  const classes = useStyles();

  return (
    <Box
      className={classes.paper}
      bgcolor="background.paper"
      boxShadow={2}
      borderRadius={5}
    >
      <form className={classes.form} noValidate>
        <Grid container>
          <Grid item xs={6} sm={5}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Job title or keywords"
              name="email"
              autoComplete="email"
              autoFocus
              size="small"
              className={classes.input}
            />
          </Grid>
          <Grid item xs={6} sm={5}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="City, state or zip "
              id="password"
              autoComplete="current-password"
              size="small"
              className={classes.input}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disableElevation
              size="medium"
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
