import React, { useRef } from "react";

export default function UseRefHook() {
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <div className="header bg-primary text-center text-light p-2 mb-4">
        <h5>useRef Hook</h5>
      </div>
      <input
        className="container p-2"
        type="text"
        name="name"
        id="name"
        ref={inputRef}
      />
      <button
        className="container mt-4 btn btn-success btn-sm text-center"
        type="button"
        onClick={handleFocus}
      >
        Focus Input
      </button>
    </div>
  );
}
