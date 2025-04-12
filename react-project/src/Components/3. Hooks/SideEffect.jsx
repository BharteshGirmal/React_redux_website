import React, { useEffect, useState } from "react";

const SideEffect = () => {
  const [data, setData] = useState(null);
  console.log(data);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      console.log(result);

      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []); // Empty array means this effect runs only once

  if (loading)
    return <div className="alert alert-warning text-center">Loading...</div>;
  // return <div>{JSON.stringify(data)}</div>;
  return (
    <div>
      <div className="header bg-primary text-center text-light p-2 mb-4">
        <h5>Side Effect in React</h5>
      </div>
      <div className="alert alert-success text-center">Data Fetched !!! </div>
    </div>
  );
};

export default SideEffect;
