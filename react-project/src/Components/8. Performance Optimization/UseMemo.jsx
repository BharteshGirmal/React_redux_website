import React, { useMemo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Calculation = ({ num }) => {
  const squareNum = useMemo(() => {
    console.log("useMemo Called!");
    return num * num; // Correctly return the computed value
  }, [num]);

  return (
    <div className="alert alert-success fw-bold">
      Squared Value: {squareNum}
    </div>
  );
};

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  return (
    <div className="container-fluid text-center mt-4">
      <div className="d-flex justify-content-around">
        <button
          className="btn btn-primary fw-bold"
          onClick={() => setNum(num + 1)}
        >
          Increment Num
        </button>
        <Calculation num={num} />
        <button
          className="btn btn-danger fw-bold"
          onClick={() => setCount(count + 1)}
        >
          Increment Count
        </button>
      </div>
      <h3 className="mt-3 text-secondary">Count: {count}</h3>
    </div>
  );
}
