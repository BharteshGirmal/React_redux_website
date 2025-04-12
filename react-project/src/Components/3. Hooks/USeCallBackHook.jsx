import React, { useCallback, useState } from "react";

const Counter = ({ onmIncrement }) => {
  console.log("Re-rendring");

  return (
    <button className="btn btn-sm btn-primary" onClick={onmIncrement}>
      Increment
    </button>
  );
};
export default function USeCallBackHook() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, []);
  return (
    <div className="container text-center">
      <div className="header bg-primary text-center text-light p-2 mb-4">
        <h5>useCallBack Hook</h5>
      </div>
      <h6>{count}</h6>
      <Counter onmIncrement={increment} />
    </div>
  );
}
