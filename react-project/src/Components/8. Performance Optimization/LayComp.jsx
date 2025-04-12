import React, { lazy } from "react";

// Lazy load the component
const LazyComponent = lazy(() => import("./UseMemo"));
console.log(LazyComponent);

export default function LazyComp() {
  return (
    <h3 className="text-light mt-4 bg-secondary p-3">
      Hello, I am a Lazy Component!
    </h3>
  );
}
