import React from "react";

export default function EventBubbling() {
  const handleParentClick = () => {
    alert("Parent is Clicked");
  };
  const handleChildClick = (e) => {
    // e.stopPropagation();
    // for stoping event bubbling
    alert("Child is Clicked");
  };

  return (
    <div className="container text-center">
      <span className="mb-2 mt-4 p-4">
        <strong>Click on the button to check event bubbling</strong>
      </span>
      <div
        className="parent "
        onClick={handleParentClick}
        style={{ padding: 20, background: "#ddd" }}
      >
        <button className="btn btn-md btn-success" onClick={handleChildClick}>
          Click Me
        </button>
      </div>
    </div>
  );
}
