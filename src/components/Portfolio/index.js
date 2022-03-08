import React, { useState } from "react";
import Project from "../Project";
import passGen from "../../assets/images/passGen.jpeg";

function Portfolio() {
const [projects] = useState([
  {
    title: "Password Generator",
    description: "allows users to generate random passwords",
    image: passGen,
    technologies: "HTML, CSS, JavaScript",
    repo: "https://github.com/abdinasirh/password-generator",
    app: "https://abdinasirh.github.io/password-generator/",
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
  
]);


  return (
    <div>
      
      {projects.map((project)=> (
        <Project project={project} />
      ))}
      
    </div>
  );
}

export default Portfolio;