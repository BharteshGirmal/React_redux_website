import React from "react";
import { useLocation } from "react-router-dom";

export default function UseLocation() {
  const location = useLocation();

  return (
    <div className="container text-center">
      <h2>Current Page Info</h2>
      <pre>{JSON.stringify(location, null, 2)}</pre>
    </div>
  );
}
