import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={About} />

      </Switch>
      <div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
