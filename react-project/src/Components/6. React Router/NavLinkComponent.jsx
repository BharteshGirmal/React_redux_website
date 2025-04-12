import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavLinkComponent() {
  return (
    <nav className="mt-4 nav bg-dark p-3 mb-4 text-light text-center d-flex justify-content-around align-items-center">
      <h6 className="text-info fw-bold">NavLink Component</h6>
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive ? "nav-link text-primary fw-bold" : "nav-link text-light"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "nav-link text-primary fw-bold" : "nav-link text-light"
        }
      >
        About
      </NavLink>
    </nav>
  );
}
