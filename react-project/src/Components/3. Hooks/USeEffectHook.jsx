import React, { useState, useEffect } from "react";

export default function UseEffectHook() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date()); // Update time every second
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval when component unmounts
  }, []);

  return (
    <div
      className="bg-warning p-4"
      style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}
    >
      <div className="header bg-primary text-center text-light p-2 mb-4">
        <h5>useEffect Hook</h5>
      </div>
      🕒 Current Time: {time.toLocaleTimeString()}
    </div>
  );
}
