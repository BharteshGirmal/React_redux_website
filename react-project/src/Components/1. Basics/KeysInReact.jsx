import React from "react";

export default function KeysInReact() {
  const fruits = ["Apple", "Orange", "Tommato", "Mango"];
  return (
    <div>
      <span> Keys In React</span>
      <ul>
        {fruits.map((fruit, index) => {
          return <li key={index}>{fruit}</li>;
        })}
      </ul>
    </div>
  );
}
