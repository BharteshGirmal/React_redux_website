import React, { useState } from "react";

export default function UseStateHook() {
  const [user, setUser] = useState("Girmal");

  return (
    <div className="container bg-warning text-dark p-2 text-center">
      <div className="header bg-primary text-center text-light p-2 mb-4">
        <h5>useState Hook</h5>
      </div>
      <input
        type="text"
        name="user"
        value={user}
        className="p-2"
        onChange={(e) => setUser(e.target.value)} // Correctly update state
        placeholder="Enter your name"
      />

      <p className="mt-4">
        The entered name is: <strong>{user}</strong>
      </p>
    </div>
  );
}
