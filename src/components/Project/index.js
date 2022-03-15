import React from "react";

function Project({ project }) {
  const { title, description, image, technologies, repo, app } = project;
  return (
    // <div className="container text-center">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">{title}</h4>
              <p className="card-text">{description}</p>
              <img className="img-thumbnail" src={image} alt={title} />
              <p>Technologies used: {technologies}</p>
              <footer className="card-footer">
                <a
                  href={repo}
                  className="card-footer-item"
                  target="_blank"
                  rel="noreferrer"
                >
                  See the Repo!
                </a>
                <br />
                <a
                  href={app}
                  className="card-footer-item"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live App
                </a>
              </footer>
            </div>
          </div>
    // </div>
  );
}

export default Project;
