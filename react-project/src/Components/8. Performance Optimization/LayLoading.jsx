import React, { Suspense, lazy } from "react";
import LazyComp from "./LayComp";

// Lazy load the component
const LazyComponent = lazy(() => import("./UseMemo"));
console.log(LazyComponent);

export default function LazyLoading() {
  return (
    <div className="text-center">
      <Suspense
        fallback={<h3 className="text-danger bg-success">Loading...</h3>}
      >
        <LazyComp />
      </Suspense>
    </div>
  );
}
