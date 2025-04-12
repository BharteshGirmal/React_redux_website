import React from "react";
import { useNavigate } from "react-router-dom";

export default function UseHistory() {
  const Navigate = useNavigate();

  return (
    <div className="container text-center">
      <h4 className=" p-4">
        <strong>use Navigate</strong>
      </h4>
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-md btn-success"
          onClick={() => Navigate("/home")}
        >
          Home
        </button>
        <button
          className="btn btn-md btn-success"
          onClick={() => Navigate("/about")}
        >
          About
        </button>
      </div>
    </div>
  );
}

export const Home = () => {
  return (
    <div className="container text-center p-4 alert alert-success">
      <h4>Navigated to Home Component</h4>
    </div>
  );
};

export const About = () => {
  return (
    <div className="container text-center p-4 alert alert-primary">
      <h4>Navigated to About Component</h4>
    </div>
  );
};
