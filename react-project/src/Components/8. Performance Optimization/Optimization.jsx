import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import ReactMemoComponent from "./ReactMemoComponent";
import UseMemo from "./UseMemo";
import UseCallBack from "./UseCallBack";
import LazyLoading from "./LayLoading";

export default function Optimization() {
  return (
    <div className="container-fluid text-center">
      <Row className="mt-2">
        <Col md={6}>
          <Card className="p-4">
            <Card.Title className="bg-success py-2 text-light">
              React.Memo
            </Card.Title>
            <Card.Body>
              <ReactMemoComponent />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-4">
            <Card.Title className="bg-success py-2 text-light">
              use Memo
            </Card.Title>
            <Card.Body>
              <UseMemo />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col md={6}>
          <Card className="p-4">
            <Card.Title className="bg-success py-2 text-light">
              use CallBack
            </Card.Title>
            <Card.Body>
              <UseCallBack />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-4">
            <Card.Title className="bg-success py-2 text-light">
              Lazy Loading
            </Card.Title>
            <Card.Body>
              <LazyLoading />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
