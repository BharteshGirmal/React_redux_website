import React from "react";

export default function ComndiionalRendering() {
  const isLoggedIn = false;
  const Admin = true;

  return (
    <div>
      {isLoggedIn ? <span>Logged IN</span> : <span>Logged Out</span>}

      {Admin && <h4>Admin </h4>}
    </div>
  );
}
