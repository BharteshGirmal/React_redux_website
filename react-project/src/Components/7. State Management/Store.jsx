import { configureStore } from "@reduxjs/toolkit";
import thunkReducer from "./ThunkReducer";

const store = configureStore({
  reducer: thunkReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
