import React from "react";
const About = () => {
  return (
    <div className="center">
      <p className="">Full Stack Developer</p>
      <hr />
      <img
						src={require("../../assets/images/myPhoto.jpeg")}
						alt="myphoto"
						className="my-photo"
					></img>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem.
      </p>
    </div>
  );
};
export default About;
