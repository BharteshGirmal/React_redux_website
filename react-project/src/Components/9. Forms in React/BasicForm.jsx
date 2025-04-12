import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

function BasicForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    city: "",
    company: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send formData to your server
  };

  return (
    <Container className="p-4 border rounded shadow">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="mb-1">
          <Form.Label className="fw-bold float-left">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-1">
          <Form.Label className="fw-bold float-left">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mb-1">
          <Form.Label className="fw-bold float-left">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formCity" className="mb-1">
          <Form.Label className="fw-bold float-left">City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formCompany" className="mb-1">
          <Form.Label className="fw-bold float-left">Company</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formRole" className="mb-1">
          <Form.Label className="fw-bold float-left">Role</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default BasicForm;
