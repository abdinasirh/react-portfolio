import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="flex-row px-1">
      <h2>
        <strong className="white-text"> <Link to="/">Abdinasir Hassan</Link></strong>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-3">
            <Link to="/">About</Link>
          </li>
          <li className="mx-3">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="mx-3">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mx-3">
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
