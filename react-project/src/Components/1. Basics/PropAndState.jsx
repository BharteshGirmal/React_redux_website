import { useState } from "react";

export const Greeting = (prop) => {
  return (
    <div>
      <span>Hello, {prop.name}</span>
    </div>
  );
};

export default function MyCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count : {count}</p>
      <button
        className="btn btn-sm btn-warning text-dark"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>

      <button
        className="btn btn-sm btn-warning text-dark"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}
