import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import EventBubbling from "./EventBubbling";
import EventCapturing from "./EventCapturing";
import Argument, { ClassArgument, MyComponent } from "./Argument";

export default function EventHandlerComponent() {
  return (
    <div className="container-fluid text-center">
      <Row className="mt-2">
        <Col md={6}>
          <Card className="p-4">
            <Card.Title className="bg-success py-2 text-light">
              Event Bubbling
            </Card.Title>
            <Card.Body>
              <EventBubbling />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-4">
            <Card.Title className="bg-success py-2 text-light">
              Event Capturing
            </Card.Title>
            <Card.Body>
              <EventCapturing />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col md={12}>
          <Card className="p-4">
            <Card.Title className="bg-info py-2">
              Passing Argument to Event Handlers
            </Card.Title>
            <Card.Body className=" d-flex flex-column flex-md-row gap-2">
              <Argument />
              <ClassArgument />
              <MyComponent />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
