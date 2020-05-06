import React from "react";
import { makeStyles, Grid, Container, Typography } from "@material-ui/core";
import Links from "./SocialMediaLinks";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      marginTop: theme.spacing(5),
      paddingBottom: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    about: {
      fontSize: "22px",
      paddingRight: theme.spacing(2),
      textAlign: "justify",
      color: "#444444",
    },
    links: {
      paddingTop: theme.spacing(2),
    },
  };
});

function About(props) {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.root}>
        <Grid container direction="row" justify="space-around">
          <Grid item sm={7} xs={12}>
            <Typography variant="body1" className={classes.about}>
              {props.about.map((item) => {
                return <p>{item}</p>;
              })}
            </Typography>
          </Grid>
          <Grid item sm={3} className={classes.links}>
            <Links linkArray={props.linkArray} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default About;
