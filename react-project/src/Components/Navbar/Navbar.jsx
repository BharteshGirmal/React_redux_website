import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./NavbarComponent.css";

function NavbarComponent() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="container-fluid p-0">
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        expanded={expanded}
        className="mb-4 custom-navbar"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="navbar-title">
            React Topics
          </Navbar.Brand>

          {/* Toggle button for mobile */}
          <Navbar.Toggle
            aria-controls="navbar-nav"
            onClick={() => setExpanded(expanded ? false : true)}
          />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              {/* BASICS */}
              <NavDropdown
                title="Basics"
                id="basic-dropdown"
                menuVariant="dark"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/basic"
                  onClick={() => setExpanded(false)}
                >
                  Basic
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/state-props"
                  onClick={() => setExpanded(false)}
                >
                  State & Props
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/hooks"
                  onClick={() => setExpanded(false)}
                >
                  Hooks
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/Lifecycle"
                  onClick={() => setExpanded(false)}
                >
                  Lifecycle
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/eventHandler"
                  onClick={() => setExpanded(false)}
                >
                  Event Handling
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/ReactForms"
                  onClick={() => setExpanded(false)}
                >
                  Forms
                </NavDropdown.Item>
              </NavDropdown>

              {/* ADVANCED */}
              <NavDropdown
                title="Advanced"
                id="advanced-dropdown"
                menuVariant="dark"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/react-router"
                  onClick={() => setExpanded(false)}
                >
                  React Router
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/redux"
                  onClick={() => setExpanded(false)}
                >
                  State Management
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/Performance"
                  onClick={() => setExpanded(false)}
                >
                  Performance
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/reactapi"
                  onClick={() => setExpanded(false)}
                >
                  React with API
                </NavDropdown.Item>
              </NavDropdown>

              {/* NEW FEATURES */}
              <NavDropdown
                title="New Features"
                id="features-dropdown"
                menuVariant="dark"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/react18"
                  onClick={() => setExpanded(false)}
                >
                  React 18
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/react19"
                  onClick={() => setExpanded(false)}
                >
                  React 19
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Routed Components */}
      <Outlet />
    </div>
  );
}

export default NavbarComponent;
