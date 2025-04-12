import React, { createContext, useContext } from "react";

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const value = "Hello from context";
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default function UseContextHook() {
  const value = useContext(MyContext);
  console.log(value);

  return (
    <div
      className="bg-warning p-4"
      style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}
    >
      <div className="header bg-primary text-center text-light p-2 mb-4">
        <h5>useContext Hook</h5>
      </div>
      Value from Context : {value}
    </div>
  );
}
