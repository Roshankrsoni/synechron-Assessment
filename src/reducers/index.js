import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { USER_LOGOUT, USER_LOGIN } from "../actionTypes";
import { readUserFromLocalStorage } from "../utils";

const initialState = {
  user: readUserFromLocalStorage()
};

// Reducer
export const reducer = (state, { type, payload }) => {
  switch (type) {
    case USER_LOGIN:
      return {
        user: payload
      };
    case USER_LOGOUT:
      return {
        user: null
      };
    default:
      return state;
  }
};

// Store
export const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunk, logger)
);
