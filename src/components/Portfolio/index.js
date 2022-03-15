import React, { useState } from "react";
import Project from "../Project";
import passGen from "../../assets/images/passGen.jpeg";
import techBlog from "../../assets/images/tech-blog.png";
import weatherDash from "../../assets/images/weather-dash.png";
import recipe from "../../assets/images/recipe.png";
import workDaySch from "../../assets/images/work-day-sch.png";

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
    title: "Tech Blog",
    description: "allows users to create posts, view posts and comment on posts",
    image: techBlog,
    technologies: "Node.js, Express, MySql",
    repo: "https://github.com/abdinasirh/mvc-tech-blog",
    app: "https://mymvctechblog.herokuapp.com/",
  },
  {
    title: "Weather Dashboard",
    description: "displays current and future weather conditions for the searched cities",
    image: weatherDash,
    technologies: "HTML, CSS, JavaScript",
    repo: "https://abdinasirh.github.io/weather-dashboard/",
    app: "https://github.com/abdinasirh/weather-dashboard/",
  },
  {
    title: "Recipe Guide",
    description: "Allows users to look up a specific ingredient",
    image: recipe,
    technologies: "HTML, CSS, JavaScript",
    repo: "https://github.com/abdinasirh/Interactive-Front-End-Project",
    app: "https://abdinasirh.github.io/Interactive-Front-End-Project/",
  },
  {
    title: "Work Day Scheduler",
    description: "allows a user to save events for each hour of the day",
    image: workDaySch,
    technologies: "HTML, CSS, JavaScript",
    repo: "https://github.com/abdinasirh/work-day-scheduler",
    app: "https://abdinasirh.github.io/work-day-scheduler/",
  },
 
  
]);


  return (
    <div>
      <h3 className="work">My Work</h3>
      <hr />
      <div className="work-container">
      {projects.map((project)=> (
        <Project project={project} />
      ))}
      </div>
      
    </div>
  );
}

export default Portfolio;