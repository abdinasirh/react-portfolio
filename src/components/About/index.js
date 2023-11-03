import React from "react";
const About = () => {
  return (
    <div className="center">
      <h3 className="">Full-Stack Developer</h3>
      <hr />
      <img
						src={require("../../assets/images/myPhoto.jpeg")}
						alt="myphoto"
						className="my-photo"
					></img>
      <p>
      Full Stack Developer with a background in DevOps environment. Worked with MSSQL databases in a retail company, capable of analyzing and interpreting information. Strong interpersonal communication skills with a proven ability to manage multiple projects while also meeting challenging deadlines. Ability to adapt/learn new systems.
      </p>
      <p>
      I seek to establish a full time career as a full-stack developer.I work well in team settings. I have used a wide range of Front-End and Back-End skills such as HTML5, CSS, Bootstrap, JavaScript, jQuery, React, Node.js, Express.js, MySQL,  MS SQL, Sequelize ORM, MongoDB, Mongoose ODM and more.... 

      </p>
    </div>
  );
};
export default About;
