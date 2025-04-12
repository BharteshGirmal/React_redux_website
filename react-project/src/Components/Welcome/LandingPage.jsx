import React from "react";
import { Container, Button } from "react-bootstrap";
import "./LandingPage.css"; // Custom CSS for styling
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <Container className="text-center d-flex flex-column justify-content-start align-items-center">
        <h1 className="welcome-title">Welcome to React Learning Hub</h1>
        <p className="welcome-text">
          Master React concepts step by step and build amazing applications.
        </p>
        <Link to="/basic">
          <Button variant="primary" className="explore-btn">
            Get Started
          </Button>
        </Link>
      </Container>
    </div>
  );
}
