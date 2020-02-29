import React from "react";
import { Home } from "../components/home.js";
import { Portfolio } from "../components/portfolio.js";
import { Skills } from "../components/skills.js";
import { Resume } from "../components/resume.js";
import { Contact } from "../components/contact.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => {
  return (
    <div className="container-fluid">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Skills" component={Skills} />
          <Route path="/Resume" component={Resume} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
};
