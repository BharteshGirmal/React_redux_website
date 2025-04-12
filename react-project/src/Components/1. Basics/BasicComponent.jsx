import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionCompotent";
import "bootstrap/dist/css/bootstrap.min.css";
import KeysInReact from "./KeysInReact";
import PropDrilling from "./PropDrilling";
import MyCounter from "./PropAndState";
import ComndiionalRendering from "./ComndiionalRendering";

export default function BasicComponent() {
  return (
    <div className="container-fluid">
      <Row className="mb-3">
        <Col md={4}>
          <Card className="shadow p-3">
            <Card.Body>
              <Card.Title>Class Component</Card.Title>
              <ClassComponent />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow p-3">
            <Card.Body>
              <Card.Title>Function Component</Card.Title>
              <FunctionComponent />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow p-3">
            <Card.Body>
              <Card.Title>Keys in React</Card.Title>
              <KeysInReact />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={4}>
          <Card className="shadow p-3 text-center bg-light">
            <Card.Body>
              <Card.Title>Counter</Card.Title>
              <MyCounter />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow p-3">
            <Card.Body>
              <Card.Title>Prop Drilling</Card.Title>
              <PropDrilling />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow p-3">
            <Card.Body>
              <Card.Title>Conditional Rendering</Card.Title>
              <ComndiionalRendering />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
