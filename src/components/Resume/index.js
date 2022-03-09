import React from "react";

function Resume() {
  return (
    <div className="center">
      <div className="column">
      <h3 className="work">Resume</h3>
        <hr />

        <a
          className="button is-primary"
          href={process.env.PUBLIC_URL + "/my-resume .pdf"}
          target="_blank" rel="noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span className="download">Download My Resume</span>
        </a>
      </div>
      <hr />
      <div className="column">
        <h4 className="skill">Skills</h4>
        <hr />
        <ul>
            <li>HTML5, CSS, JavaScript</li>
            <li> Bootstrap, JQuery, Node, Express</li>
            <li>MySQL, SQL, NoSQL, GitHub, MongoDB</li>
            <li>React, Heroku,</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;