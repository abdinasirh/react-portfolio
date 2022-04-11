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
            <li><strong>Front-End:</strong> HTML5, CSS, Bootstrap, JavaScript, jQuery, React</li>
            <li> <strong>Back-End:</strong> Node.js, Express.js, MySQL,  MS SQL, Sequelize ORM, MongoDB, Mongoose ODM</li>
            <li><strong>Concepts:</strong>APIs, REST, MVC, TDD, JSON, GraphQL</li>
            <li><strong>Tools:</strong> AWS, Git, Github, GitLab, Jira, Confluence, Heroku, VS Code</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;