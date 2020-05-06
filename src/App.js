import React from "react";
import SkillGrid from "./components/SkillGrid";
import NamePlate from "./components/NamePlate";
import ProjectGrid from "./components/Project";
import DATA from "./data";
import About from "./components/About";
import Xp from "./components/Xp";
import NavBarNew from "./components/NavBarNew"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import { Element } from "react-scroll";
require("typeface-quicksand");

const myTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: blue,
  },
  typography: {
    fontFamily: [
      "Quicksand",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
function App() {

  return (
    <div>
    <ThemeProvider theme={myTheme}>
      <NavBarNew />
      <Element name='about'>
      <NamePlate name={DATA.NAME} id="nameplate" />
      </Element>

      <About linkArray={DATA.LINKS} about={DATA.ABOUT} id="about" />

      <Element name='skills'>
      <SkillGrid id="skills" skillArray={DATA.SKILLS} />
      </Element>

      <Element name='xp'>
      <Xp workArray={DATA.XP} />
      </Element>

      <Element name='projects'>
      <ProjectGrid projectArray={DATA.PROJECTS} />
      </Element>

    </ThemeProvider>
    </div>
  );
}

export default App;
