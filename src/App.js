import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {

  
    return (
      <Router>
        <Navbar />
        <main>
          
        </main>
        <div>
        <Footer></Footer>
      </div>
      </Router>
     
    );
}

export default App;
