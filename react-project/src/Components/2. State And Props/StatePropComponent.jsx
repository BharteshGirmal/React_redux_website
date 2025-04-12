import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import StateUpdateUsingClass from "./StateUpdateUsingClass";
import StateUpdates from "./StateUpdates";
import StateLifting from "./StateLifting";
import ControlledComponent from "./ControlledComponent";
import UncontrolledComponent from "./UnControlledComponent";

export default function StatePropComponent() {
  return (
    <div className="container-fluid">
      <Row className="mb-3">
        <Col md={6}>
          <Card className="shadow p-3">
            <Card.Title>State Updates</Card.Title>
            <Card.Body>
              <StateUpdates />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow p-3">
            <Card.Title>State Updates</Card.Title>
            <Card.Body>
              <StateUpdateUsingClass />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-3 text-center">
        <Col md={4}>
          <Card className="shadow p-3">
            <Card.Title className="bg-primary text-light text-center p-2">
              Controlled Components
            </Card.Title>
            <Card.Body>
              <ControlledComponent />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow p-3">
            <Card.Title className="bg-primary text-light text-center p-2">
              Uncontrolled Components
            </Card.Title>
            <Card.Body>
              <UncontrolledComponent />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow p-3">
            <Card.Title className="bg-primary text-light text-center p-2">
              State Lifting
            </Card.Title>
            <Card.Body>
              <StateLifting />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
