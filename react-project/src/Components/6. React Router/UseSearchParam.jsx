import React from "react";
import { useSearchParams } from "react-router-dom";

export default function SearchParamComponent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const page = searchParams.get("page") || 1;

  return (
    <div className="container text-center p-4">
      <h4 className="mb-3">Search Page</h4>
      <p>
        <strong>Query:</strong> {query}
      </p>
      <p>
        <strong>Page:</strong> {page}
      </p>

      <div className="d-flex justify-content-center mb-3">
        <button
          className="btn btn-primary me-2"
          onClick={() => setSearchParams({ query: "react", page: 1 })}
        >
          Search React (Page 1)
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setSearchParams({ query: "javascript", page: 2 })}
        >
          Search JavaScript (Page 2)
        </button>
      </div>
    </div>
  );
}
