import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Page1 from "./page1";
import Page2 from "./page2";

function Content() {
  return (
    <>
      <Switch>
        <Route exact path="/page1" component={Page1} />
        <Route exact path="/page2" component={Page2} />
        <Redirect from="/" to="page1" />
      </Switch>
    </>
  );
}

export default Content;
