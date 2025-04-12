import React, { useMemo, useState } from "react";

const ExpensiveComputution = ({ num }) => {
  const computExpensiveValue = (n) => {
    console.log("Calculating...");
    return n * 2;
  };

  const memorizeValue = useMemo(() => computExpensiveValue(num), [num]);

  return (
    <div className="container bg-dark text-light text-center">
      Computed values : <span className="bg-danger">{memorizeValue}</span>
    </div>
  );
};

export default function UseMemoHook() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  return (
    <div className="container">
      <div className="header bg-primary text-center text-light p-2 mb-4">
        <h5>useRef Hook</h5>
      </div>
      <h6 className="text-center">{count}</h6>
      <div className="d-flex mb-2 mt-2 justify-content-around">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            setCount((c) => c + 1);
          }}
        >
          Change Count
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            setNum((n) => n + 1);
          }}
        >
          Change Value
        </button>
      </div>
      <ExpensiveComputution num={num} />
    </div>
  );
}
