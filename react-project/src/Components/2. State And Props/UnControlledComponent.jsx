import React, { useRef } from "react";
import { Form, Button, Container } from "react-bootstrap";

export default function UncontrolledComponent() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Entered Name: ${nameRef.current.value}\nEntered Email: ${emailRef.current.value}`
    );

    // Clear inputs after submission
    nameRef.current.value = "";
    emailRef.current.value = "";
  };

  return (
    <Container className="mt-4">
      <Form onSubmit={handleSubmit} className="p-3 border rounded bg-light">
        {/* Name Input */}
        <Form.Group className="mb-3">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            ref={nameRef}
            placeholder="Enter your name"
          />
        </Form.Group>

        {/* Email Input */}
        <Form.Group className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            ref={emailRef}
            placeholder="Enter your email"
          />
        </Form.Group>

        {/* Submit Button */}
        <div className="text-center">
          <Button variant="success" size="sm" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
}
