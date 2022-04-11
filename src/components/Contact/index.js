import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <div>
      <h3 className="contact">Let's get in touch</h3>
      <hr />
      <div className="contact-form">
        <Form>
          <Form.Group
            className="mb-4"
            controlId="formBasicEmail"
            onSubmit={handleSubmit}
          >
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
            />
          </Form.Group>

          <Form.Group
            className="mb-5"
            controlId="formBasicEmail"
            onSubmit={handleSubmit}
          >
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </Form.Group>

          <Form.Group
            className="mb-4"
            controlId="formBasicEmail"
            onSubmit={handleSubmit}
          >
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Message"
              name="message"
              defaultValue={message}
              onBlur={handleChange}
            />
          </Form.Group>

          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <div className="contact-info ">
          <li><strong>Email:</strong> abdinasirduud20@gmail.com</li>
          <li><strong>Phone:</strong> 320-223-3952</li>
          <li ><strong>Linkedin:</strong> <a 
                  href="https://www.linkedin.com/in/abdinasirh/" 
                  target="_blank"
                  rel="noreferrer"
                >
                  
                   linkedin profile
                </a>
					</li>
          <li><strong>Github:</strong> <a
                  href="https://github.com/abdinasirh"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github page
                </a>
					</li>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
