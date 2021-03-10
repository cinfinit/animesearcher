import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainPage from "../src/demo_1/dashboard";
import Profiles from "../src/demo_1/profiles";

class MainRoutes extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/profile" component={Profiles} />
        </Switch>
      </>
    );
  }
}

export default MainRoutes;
