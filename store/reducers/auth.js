import { AsyncStorage } from "react-native"
import { REGISTER, LOGIN, LOGOUT } from "../actions/auth";

const initialState = {
  token: "null",
  user: {}
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
      return {
        ...state,
        user: payload,
        token: payload.idToken
      };
    case LOGIN:
      return {
        ...state,
        user: payload,
        token: payload.idToken
      };
    case LOGOUT:
      return { ...state, token: null };
    default:
      return state;
  }
};

export default authReducer;
