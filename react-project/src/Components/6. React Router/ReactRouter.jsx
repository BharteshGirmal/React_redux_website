import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import UseHistory from "./UseHistory";
import UseParam from "./UseParam";
import NavLinkComponent from "./NavLinkComponent";
import SearchParamComponent from "./UseSearchParam";
import CombinedComponent from "./AllRouters";
import UseLocation from "./UseLocation";

export default function ReactRouter() {
  const browserRouter = `    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>`;

  const hashRouter = ` <HashRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>`;

  return (
    <div className="container-fluid text-center">
      <Row className="mt-2">
        <Col md={6}>
          <Card className="p-4">
            <Card.Title className="bg-success py-2 text-light">
              Browser Routing
            </Card.Title>
            <Card.Body>
              <textarea
                className="container border-0 bg-secondary text-light p-2 fw-bold"
                name="browserRouting"
                id="browserRouting"
                value={browserRouter}
                rows={10}
              ></textarea>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-4">
            <Card.Title className="bg-success py-2 text-light">
              Hash Routing
            </Card.Title>
            <Card.Body>
              <textarea
                className="container border-0 bg-secondary text-light p-2 fw-bold"
                name="browserRouting"
                id="browserRouting"
                value={hashRouter}
                rows={10}
              ></textarea>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col md={6}>
          <Card className="p-4">
            <Card.Title className="bg-info py-2">use Navigate</Card.Title>
            <Card.Body className="d-flex justify-content-between">
              <UseHistory />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-4">
            <Card.Title className="bg-info py-2">Use :parameters</Card.Title>
            <Card.Body className="d-flex justify-content-between">
              <UseParam />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="p-4">
            <Card.Title className="bg-info py-2">Use :parameters</Card.Title>
            <Card.Body className="d-flex justify-content-between">
              <SearchParamComponent />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-4">
            <Card.Title className="bg-info py-2">Use Location</Card.Title>
            <Card.Body className="d-flex justify-content-between">
              <UseLocation />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <NavLinkComponent />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <CombinedComponent />
        </Col>
      </Row>
    </div>
  );
}
