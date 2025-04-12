import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import BasicForm from "./BasicForm";
import ReactFormik from "./ReactFormik";
import ReactHookForm from "./ReactHookForm";

export default function ReactForms() {
  return (
    <div className="container-fluid text-center text-dark">
      <Row>
        <Col md={6}>
          <Card className="container-fluid p-4">
            <Card.Title className="bg-success py-2 text-light">
              React Form
            </Card.Title>
            <Card.Body>
              <BasicForm />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="container-fluid p-4">
            <Card.Title className="bg-success py-2 text-light">
              React Formik Library
            </Card.Title>
            <Card.Body>
              <ReactFormik />
            </Card.Body>
          </Card>
        </Col>
        <Row className="mt-2">
          <Col md={6}>
            <Card className="container-fluid p-4">
              <Card.Title className="bg-success py-2 text-light">
                React Hook Form
              </Card.Title>
              <Card.Body>
                <ReactHookForm />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
    </div>
  );
}
