import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
    <div className="center">
      <div>
        <h3>Contact Me</h3>
      </div>
      <Form>
      <Form.Group className="mb-4" controlId="formBasicEmail" onSubmit={handleSubmit}>
        <Form.Control type="text" placeholder="Name" name="name" defaultValue={name} onBlur={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-5" controlId="formBasicEmail" onSubmit={handleSubmit}>
        <Form.Control type="email" placeholder="Enter email" name="email" defaultValue={email} onBlur={handleChange}/>
      </Form.Group>
      
      
      <Form.Group className="mb-4" controlId="formBasicEmail" onSubmit={handleSubmit}>
        <Form.Control  as="textarea" rows={5} placeholder="Message" name="message" defaultValue={message} onBlur={handleChange} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
   
  );
}

export default ContactForm;
