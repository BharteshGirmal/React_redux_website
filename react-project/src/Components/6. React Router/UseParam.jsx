import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UseParam() {
  const navigate = useNavigate();

  return (
    <div className="container text-center">
      <h4 className="mb-3 p-3 bg-light border rounded">React Router Example</h4>
      <div className="btn-group d-flex flex-column flex-md-row gap-2">
        <button
          className="btn btn-success w-100 w-md-auto"
          onClick={() => navigate("/home")}
        >
          Home
        </button>
        <button
          className="btn btn-primary w-100 w-md-auto"
          onClick={() => navigate("/about")}
        >
          About
        </button>
        <button
          className="btn btn-warning w-100 w-md-auto"
          onClick={() => navigate("/user/JohnDoe")}
        >
          John's Profile
        </button>
        <button
          className="btn btn-info w-100 w-md-auto"
          onClick={() => navigate("/user/")}
        >
          Guest Profile
        </button>
      </div>
    </div>
  );
}













export function UserProfile() {
  const { username } = useParams();
  return (
    <div className="alert alert-info text-center p-4">
      Welcome, {username ? username : "Guest"}!
    </div>
  );
}

export function NotFound() {
  return (
    <div className="alert alert-danger text-center p-4">
      404 - Page Not Found
    </div>
  );
}
