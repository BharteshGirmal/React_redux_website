import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkReducer from "./ThunkReducer";

const store = createStore(
  thunkReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// const store = configureStore({
//   reducer: {
//     myuser: myslice,
//   },
// });

export default store;
