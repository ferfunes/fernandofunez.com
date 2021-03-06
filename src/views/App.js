import React from "react";
import { Home } from "../components/home.js";
import { Portfolio } from "../components/portfolio.js";
import { Skills } from "../components/skills.js";
import { Dj } from "../components/dj.js";
import { Contact } from "../components/contact.js";

import { BrowserRouter, Switch, Route } from "react-router-dom";

export const App = () => {
  return (
    <div className="container-fluid p-0 m-0">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Skills" component={Skills} />
          <Route path="/Dj" component={Dj} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
