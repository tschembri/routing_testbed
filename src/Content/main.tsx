import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBarContent from "./appbar";
import Routing from "./routing";
import { GetBlah } from "./blah";
import { withRouter } from "react-router-dom";

const drawerWidth = 320;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginRight: drawerWidth
    },

    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3)
    }
  })
);

function Main(props) {
  const classes = useStyles();
  let foo = GetBlah();
  console.log("main", props);
  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBarContent />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routing />
        <p>{foo}</p>
        <p>{props.location.pathname}</p>
      </main>
    </div>
  );
}

export default withRouter(Main);
