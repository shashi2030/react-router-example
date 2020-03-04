import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import ContactUs from "./Component/ContactUs";
import AboutUs from "./Component/AboutUs";
function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
