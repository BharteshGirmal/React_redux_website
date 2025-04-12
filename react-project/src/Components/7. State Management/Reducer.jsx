import { ACTIONS } from "./Actions";

const INITIAL_STATE = { count: 0 };

export const reducerFunction = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
