import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavbarComponent.css"; // Import custom CSS

function NavbarComponent() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="container-fluid p-0">
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        expanded={expanded} // Control expanded state
        className="mb-4 custom-navbar"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="navbar-title">
            React Topics
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto" onClick={() => setExpanded(false)}>
              <Nav.Link as={Link} to="/basic">
                Basic
              </Nav.Link>
              <Nav.Link as={Link} to="/state-props">
                State & Props
              </Nav.Link>
              <Nav.Link as={Link} to="/hooks">
                Hooks
              </Nav.Link>
              <Nav.Link as={Link} to="/Lifecycle">
                React Lifecycle
              </Nav.Link>
              <Nav.Link as={Link} to="/eventHandler">
                Event Handling
              </Nav.Link>
              <Nav.Link as={Link} to="/react-router">
                React Router
              </Nav.Link>
              <Nav.Link as={Link} to="/redux">
                State Management
              </Nav.Link>
              <Nav.Link as={Link} to="/Performance">
                Performance Optimization
              </Nav.Link>
              <Nav.Link as={Link} to="/ReactForms">
                Forms in React
              </Nav.Link>
              <Nav.Link as={Link} to="/reactapi">
                React With API
              </Nav.Link>
              <Nav.Link as={Link} to="/react18">
                React 18 Features
              </Nav.Link>
              <Nav.Link as={Link} to="/react19">
                React 19 Features
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Display the routed components */}
      <Outlet />
    </div>
  );
}

export default NavbarComponent;
