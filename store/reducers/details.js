// import data from "../../screens/Home/dummy-data";
import { SET_DETAILS, SET_BOOKINGS } from "../actions/details";
const initialState = {
  // allDetails: data,
  bookings: []
};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DETAILS:
      return {
        ...state,
        allDetails: action.details
      };
    case SET_BOOKINGS:
      return {
        ...state,
        bookings: action.details
      };
    default: return state
  }
};

export default detailsReducer;
