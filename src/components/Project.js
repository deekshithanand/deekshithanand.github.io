import React from "react";
import {
  makeStyles,
  Grid,
  Typography,
  Button,
  Card,
  Chip,
  Container,
} from "@material-ui/core";
import SectionHeader from "./SectionHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom : theme.spacing(10),
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(2),
      padding: theme.spacing(1),

      height: theme.spacing(28),

      width: "100%",
    },
  },
  btn: {
    height: "inherit",
    width: "inherit",
  },
  btncontent: {
    display: "flex",
    flexDirection: "column",
  },
  techstack: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function ButtonContent(props) {
  const classes = useStyles();

  return (
    <div className={classes.btncontent}>
      <Typography variant="h6">{props.name}</Typography>
      <div className={classes.techstack}>
        {props.tech.map((item) => {
          return <Chip label={item} color="primary" size="small" />;
        })}
      </div>
    </div>
  );
}

function Project(props) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Card elevation={3}>
          <Button className={classes.btn} variant="outlined" color="primary">
            <ButtonContent {...props.project} />
          </Button>
        </Card>
      </div>
    </>
  );
}

function ProjectGrid(props) {
  // const classes = useStyles()

  return (
    <>
      <SectionHeader name="PROJECTS" />
      <Container>
        <Grid container spacing={3}>
          {props.projectArray.map((item,index) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3}  >
                <Project project={item} key={index} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default ProjectGrid;
