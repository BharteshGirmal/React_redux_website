import React from "react";
import { useParams, useLocation, useSearchParams } from "react-router-dom";

export default function CombinedComponent() {
  const { userId } = useParams(); // URL parameter
  const location = useLocation(); // Current location
  const [searchParams, setSearchParams] = useSearchParams(); // Search params

  const query = searchParams.get("query") || ""; // Get 'query' from search params

  const handleSearch = (event) => {
    event.preventDefault();
    const newQuery = event.target.elements.query.value;
    setSearchParams({ query: newQuery });
  };

  return (
    <div className="container text-center p-4">
      <h4 className="mb-4">User Information</h4>

      <div className="alert alert-warning mb-3">
        <h5>URL Parameter:</h5>
        <p className="font-weight-bold">{userId}</p>
      </div>

      <div className="alert alert-secondary mb-3">
        <h5>Current Path:</h5>
        <p className="font-weight-bold">{location.pathname}</p>
      </div>

      <form onSubmit={handleSearch} className="mb-3">
        <input
          type="text"
          name="query"
          placeholder="Search..."
          defaultValue={query}
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>

      {query && (
        <div className="alert alert-success mb-3">
          <h5>Search Query:</h5>
          <p className="font-weight-bold">{query}</p>
        </div>
      )}
    </div>
  );
}
