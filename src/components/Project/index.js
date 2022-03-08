import React from "react";

function Project({ project }) {
  const { title, description, image, technologies, repo, app } = project;
  return (
    <div className="center">
        <p>My Work</p>
      <hr />
      <div className="card">
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={image} alt={title} />
        <p>Technologies used: {technologies}</p>
        <a href={repo}>Repo</a>
        <a href={app}>App</a>

        <hr />
      </div>
    </div>
  );
}

export default Project;
