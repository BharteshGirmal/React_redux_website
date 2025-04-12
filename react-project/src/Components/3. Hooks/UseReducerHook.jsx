import React, { useReducer } from "react";

const InitialState = {
  cart: [
    { id: 121, name: "Printer" },
    { id: 122, name: "Mouse" },
    { id: 124, name: "Cable" },
  ],
};

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { cart: [...state.cart, action.payload] };

    case "REMOVE_ITEM":
      return { cart: state.cart.filter((item) => item.id !== action.payload) };

    case "CLEAR_CART":
      return { cart: [] };

    default:
      return state;
  }
};

export default function UseReducerHook() {
  const [state, dispatch] = useReducer(reducerFunction, InitialState);

  const Add_Item = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const Remove_Item = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const Clear_Cart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div className=" p-4">
      <div className="header bg-primary text-center text-light p-2 mb-4">
        <h5>useReducer Hook</h5>
      </div>
      <div className="container mt-2 mb-2">
        <ul>
          {state.cart.map((item) => (
            <li key={item.id}>
              {item.name}
              <button
                className="btn btn-sm  ms-2"
                onClick={() => Remove_Item(item.id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="d-flex justify-content-around">
        <button
          className="btn btn-primary btn-sm p-2"
          type="button"
          onClick={() => Add_Item({ id: 1, name: "Laptop" })}
        >
          Add Item
        </button>

        <button
          className="btn btn-danger btn-sm p-2"
          type="button"
          onClick={Clear_Cart}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
