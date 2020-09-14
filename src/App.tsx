import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CirkularNumbers } from "./CirkularNumbers";
import { makeStyles } from "@material-ui/core";
import { grey, yellow } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  initial: {
    color: theme.palette.getContrastText(grey[400]),
    backgroundColor: grey[400],
    width: theme.spacing(7),
    height: theme.spacing(7),
  },

  chosen: {
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[500],
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <CirkularNumbers numericValue="2" style={classes.initial} />
    </div>
  );
};

export default App;
