import React from "react";
import Project from "./Project";

const projects = [
  {
    title: "",
    image: "",
    technologies: "",
    repo: "",
    app: "",
  },
  {
    title: "",
    image: "",
    technologies: "",
    repo: "",
    app: "",
  },
  {
    title: "",
    image: "",
    technologies: "",
    repo: "",
    app: "",
  },
  {
    title: "",
    image: "",
    technologies: "",
    repo: "",
    app: "",
  },
  {
    title: "",
    image: "",
    technologies: "",
    repo: "",
    app: "",
  },
  {
    title: "",
    image: "",
    technologies: "",
    repo: "",
    app: "",
  }
  
];

function Portfolio() {
  return (
    <div>
      <p>My Work</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;