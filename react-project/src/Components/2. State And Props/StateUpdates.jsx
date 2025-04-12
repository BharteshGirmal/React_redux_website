import React, { useState } from "react";

export default function StateUpdates() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h4 className="bg-primary text-light text-center">useState</h4>
      <div className="alert alert-success"> Count : {count}</div>
      <button
        className="btn btn-info btn-sm"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}
