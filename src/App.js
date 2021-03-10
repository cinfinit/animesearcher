import logo from "./logo.svg";
import "./App.css";
// import Dashboard from "../src/demo_1/dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import React, { Component } from "react";
import MainRoutes from "./mainRoutes";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={MainRoutes} />
        </Switch>
      </div>
    );
  }
}

export default App;
