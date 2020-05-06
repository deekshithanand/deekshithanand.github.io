import React from "react";
import {
  Container,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  ExpansionPanel,
  ExpansionPanelSummary,
  List,
  ListItem,
  Divider,
  IconButton,
} from "@material-ui/core";
import { Hidden, AppBar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SkillGrid from "./SkillGrid"
import DATA from "../data";

//jss style
const useStyles = makeStyles((theme) => {
  return {
    root: {
      height: theme.spacing(10),
      justifyContent: "center",
    },
    offset: theme.mixins.toolbar,
    title: {
      flexGrow: 1,
    },
    mobileBtn: {
      width: "100%",
    },
    mobileMenu: {
      color: "inherit",
      backgroundColor: "inherit",
    },
    menuIcon: {
      color: "white",
    },
  };
});


export default function Navbar(props) {
  const classes = useStyles();

  //menu names
  let btnItems = ["About", "Skills", "XP", "Projects"];

  const [open, setOpen] = React.useState(false);

  //to toggle expan api --- got doubt with this api ---- not sure how it works but it works!!!!
  const handleChange = () => {
    setOpen(!open);
  };

  const handleClick = () => {
        const anchor = document.getElementById('skill')
         
          anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
  }

  return (
    <Container>
      {/* for larger screens */}
        <AppBar className={classes.root}>
          <Toolbar>
            <Typography className={classes.title} variant="h4">
              {"Deekshith Anand"}
            </Typography>

            <nav>
              <ul>
                {btnItems.map((item) => {
                  return <Button color = "inherit" onClick={handleClick
                  }>{`< ${item} />`}</Button>;
                })}
              </ul>
            </nav>
          </Toolbar>
        </AppBar>
        <div className={classes.offset} />

      {/* mobile app Drawer */}
      <Hidden smUp>
        <AppBar>
          <div className={classes.overrides}>
            <ExpansionPanel className={classes.mobileMenu} expanded={open}>
              <ExpansionPanelSummary>
                <Typography className={classes.title} variant="h6">
                  Deekshith Anand
                </Typography>

                <IconButton onClick={handleChange} size="small">
                  <MenuIcon className={classes.menuIcon} />
                </IconButton>
              </ExpansionPanelSummary>
              <List>
                {btnItems.map((item) => {
                  return (
                    <>
                      <Divider />
                      <ListItem>
                        <Button
                          color="inherit"
                          className={classes.mobileBtn}
                          onClick={handleChange} >
                        {`< ${item} />`}
                        </Button>
                      </ListItem>
                    </>
                  );
                })}
              </List>
            </ExpansionPanel>
          </div>
        </AppBar>
        <div className={classes.offset} />
      </Hidden>
      <SkillGrid id="skills" skillArray={DATA.SKILLS} />

    </Container>
  );
}
