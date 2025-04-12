import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./ReduxToolkitReducer";

export default function ReduxToolkit() {
  const getUser = useSelector((state) => state.myuser);
  console.log(("getUser : ", getUser));

  console.log(getUser);

  const dispatch = useDispatch();
  const handleAddUser = () => {
    dispatch(addUser({ id: 2, name: "John Doe" })); // Dispatching action
  };

  return (
    <div>
      <button onClick={handleAddUser}>Add User</button>
      <button onClick={handleAddUser}>Remove User</button>
    </div>
  );
}
