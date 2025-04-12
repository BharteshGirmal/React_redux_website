import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import UseContextHook from "./UseContextHook";
import UseEffectHook from "./USeEffectHook";
import UseStateHook from "./useStateHook";
import UseMemoHook from "./UseMemoHook";
import USeCallBackHook from "./USeCallBackHook";
import UseRefHook from "./UseRefHook";
import UseReducerHook from "./UseReducerHook";
import SideEffect from "./SideEffect";

export default function HooksCoponent() {
  return (
    <div className="container-fluid">
      <Row>
        <Col md={4}>
          <Card className="shadow p-3">
            <Card.Body>
              <UseStateHook />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow p-3">
            <Card.Body>
              <UseEffectHook />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow p-3">
            <Card.Body>
              <UseContextHook />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4 mb-4">
        <Col md={4}>
          <Card className="shadow p-3">
            <Card.Body>
              <UseRefHook />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow p-3">
            <Card.Body>
              <USeCallBackHook />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow p-3">
            <Card.Body>
              <UseMemoHook />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4 mb-4">
        <Col md={6}>
          <Card className="shadow p-3">
            <Card.Body>
              <SideEffect />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow p-3">
            <Card.Body>
              <UseReducerHook />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
