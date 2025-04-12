import React, { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CallBackComponent = React.memo(({ onClick }) => {
  console.log("CallBackComponent is Rendered !!");
  return (
    <button className="btn btn-primary fw-bold my-2" onClick={onClick}>
      Click Here
    </button>
  );
});

export default function UseCallBack() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // ✅ Corrected useCallback usage
  const HandleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="text-center">
      <h3 className="text-primary fw-bold">Count: {count}</h3>
      <CallBackComponent onClick={HandleClick} />
      <div className="my-3">
        <h4 className="text-success fw-bold">Other State: {otherState}</h4>
        <button
          className="btn btn-success fw-bold mt-2"
          onClick={() => setOtherState(otherState + 1)}
        >
          Change Other State
        </button>
      </div>
    </div>
  );
}
