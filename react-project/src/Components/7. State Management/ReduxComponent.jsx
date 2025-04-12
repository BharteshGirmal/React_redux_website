import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "./Actions";

export default function ReduxComponent() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="d-flex justify-content-around">
        <button
          type="button"
          className="btn btn-md btn-secondary"
          onClick={() => dispatch({ type: ACTIONS.DECREMENT })}
        >
          Decrement
        </button>
        <h5>{count}</h5>

        <button
          type="button"
          className="btn btn-md btn-primary"
          onClick={() => dispatch({ type: ACTIONS.INCREMENT })}
        >
          Increment
        </button>
      </div>
    </div>
  );
}
