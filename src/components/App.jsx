import React from "react";
import Home from "./home/Home";
import About from "./about/About";
import Locations from "./location/Locations";
import Contact from "./contact/Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Locations" component={Locations} />
          <Route path="/Contact" component={Contact} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
