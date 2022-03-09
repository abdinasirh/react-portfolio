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
  }
  
]);


  return (
    <div>
      <h3 className="work">My Work</h3>
      <hr />
      {projects.map((project)=> (
        <Project project={project} />
      ))}
      
    </div>
  );
}

export default Portfolio;