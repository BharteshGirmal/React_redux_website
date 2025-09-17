import { configureStore } from "@reduxjs/toolkit";
import thunkReducer from "./ThunkReducer";

const store = configureStore({
  reducer: thunkReducer,
});

export default store;
