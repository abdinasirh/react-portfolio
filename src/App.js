import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/Portfolio" exact component={Portfolio} />
        <Route path="/Resume" exact component={Resume} />

      </Switch>
      <div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
