import React, { useState} from "react";
import { Link } from "react-scroll";
import {
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
const useStyles = makeStyles((theme) => {
  return {
    root: {
      height: "64px",
      justifyContent: "center",
    },
    offset: theme.mixins.toolbar,
    title: {
      flexGrow: 1,
    },
    mobileBtn: {
      display: "flex",
      flexGrow: 1,
      width: "100%",
    },
    mobileMenu: {
      color: "inherit",
      backgroundColor: "inherit",
      height: "inherit",
    },
    menuIcon: {
      color: "white",
    },

    lnk: {
      width: "100%",
    },
    mobileRoot: {
      justifyContent: "center",
    },
  };
});

export default function NavBarNew(props) {
  const classes = useStyles();
  const [offset, setOffset] = useState(64);
  const [mobileOffset, setMobileOffset] = useState(24);
  const [open, setOpen] = React.useState(false);
  const handleChange = () => {
    setOpen(!open);
    setMobileOffset(reft.current.offsetHeight);
  };

  const reft = React.useRef(); // mobile reference

  return (
    <>
      <Hidden xsDown>
        <AppBar className={classes.root}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Deekshith Anand
            </Typography>
            <Link to="about" smooth={true} offset={offset * -1}>
              <Button color="inherit">{"< About />"}</Button>
            </Link>

            <Link to="skills" smooth={true} offset={offset * -1}>
              <Button color="inherit">{"< Skills />"}</Button>
            </Link>

            <Link to="xp" smooth={true} offset={offset * -1}>
              <Button color="inherit">{"< XP />"}</Button>
            </Link>

            <Link to="projects" smooth={true} offset={offset * -1}>
              <Button color="inherit">{"< Projects />"}</Button>
            </Link>
          </Toolbar>
        </AppBar>
        <div className={classes.offset} />
      </Hidden>

      <Hidden smUp>
        <AppBar className={classes.mobileRoot} ref={reft}>
          <div>
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
                {/* option menus goes in here */}

                <Divider />
                <ListItem>
                  <Link
                    to="about"
                    smooth={true}
                    offset={mobileOffset * -1}
                    className={classes.lnk}
                  >
                    <Button
                      color="inherit"
                      className={classes.mobileBtn}
                      onClick={handleChange}
                    >
                      {"< About />"}
                    </Button>
                  </Link>
                </ListItem>

                <Divider />
                <ListItem>
                  <Link
                    to="skills"
                    smooth={true}
                    offset={mobileOffset * -1}
                    className={classes.lnk}
                  >
                    <Button
                      color="inherit"
                      className={classes.mobileBtn}
                      onClick={handleChange}
                    >
                      {"< Skills />"}
                    </Button>
                  </Link>
                </ListItem>

                <Divider />
                <ListItem>
                  <Link
                    to="xp"
                    smooth={true}
                    offset={mobileOffset * -1}
                    className={classes.lnk}
                  >
                    <Button
                      color="inherit"
                      className={classes.mobileBtn}
                      onClick={handleChange}
                    >
                      {"< XP />"}
                    </Button>
                  </Link>
                </ListItem>

                <Divider />
                <ListItem>
                  <Link
                    to="projects"
                    smooth={true}
                    offset={mobileOffset * -1}
                    className={classes.lnk}
                  >
                    <Button
                      color="inherit"
                      className={classes.mobileBtn}
                      onClick={handleChange}
                    >
                      {"< Projects />"}
                    </Button>
                  </Link>
                </ListItem>
              </List>
            </ExpansionPanel>
          </div>
        </AppBar>
        <div className={classes.offset} />
      </Hidden>
    </>
  );
}
