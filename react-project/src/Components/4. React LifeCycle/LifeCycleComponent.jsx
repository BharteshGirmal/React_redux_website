import React from "react";
import Lifecycle from "./LifeCycle";
import { Card, Col, Row } from "react-bootstrap";

export default function LifeCycleComponent() {
  return (
    <div className="container-fluid text-center">
      <Row className="mt-2">
        <Col md={12}>
          <Card className="p-4">
            <Card.Title>React LifeCycle</Card.Title>
            <Card.Body>
              <Lifecycle />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
