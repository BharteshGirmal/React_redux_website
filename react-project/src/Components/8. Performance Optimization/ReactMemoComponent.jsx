import React, { useState } from "react";
import { Button } from "react-bootstrap";

const MyComponent = React.memo(({ count }) => {
  console.log("Rendering MyComponent");
  return <h3 className="text-primary fw-bold">{count}</h3>;
});

const ReactMemoComponent = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState("Hello");

  return (
    <div className="text-center">
      <MyComponent count={count} />
      <Button
        variant="primary"
        className="me-2"
        onClick={() => setCount(count + 1)}
      >
        Increment Count
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          setOtherState(otherState === "Hello" ? "World" : "Hello")
        }
      >
        Change Other State
      </Button>
    </div>
  );
};

export default ReactMemoComponent;
