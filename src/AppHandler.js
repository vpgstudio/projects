import React, { Component } from "react";

import MainApp from "./components/components/main/MainApp";
import ProjectsMainApp from "./components/components/projects/main/ProjectsMainApp";
import ProjectsIdApp from "./components/components/projects/id/Projectidmain";

import ForeOFore from "./components/public/404/main";
import NavApp from "./components/public/nav/NavApp";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export class AppHandler extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <NavApp />
          </div>
          <Switch>
            <Route exact path="/" component={MainApp} />
            <Route exact path="/about" component={ProjectsMainApp} />
            <Route exact path="/about/projects/:id" component={ProjectsIdApp} />

            <Route component={ForeOFore} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppHandler;
