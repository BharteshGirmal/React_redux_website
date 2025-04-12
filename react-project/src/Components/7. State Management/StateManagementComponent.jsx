import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import ReduxComponent from "./ReduxComponent";
import ReduxThunk from "./ReduxThunk";
import ReduxToolkit from "./ReduxToolkit";

export default function StateManagementComponent() {
  return (
    <div className="container-fluid text-center">
      <Row className="mt-2">
        <Col md={6}>
          <Card className="p-4">
            <Card.Title className="bg-success py-2 text-light">
              Redux State Management
            </Card.Title>
            <Card.Body>
              <ReduxComponent />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-4">
            <Card.Title className="bg-success py-2 text-light">
              Redux Toolikit
            </Card.Title>
            <Card.Body>
              <ReduxToolkit />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col md={6}>
          <Card className="p-4">
            <Card.Title className="bg-success py-2 text-light">
              Redux Thunk (Middileware)
            </Card.Title>
            <Card.Body>
              <ReduxThunk />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
