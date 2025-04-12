import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./Actions";

import axios from "axios";

export const fetchusers = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_USERS_REQUEST });

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      // const result = response.json();
      // console.log(result);

      dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
    }
  };
};
