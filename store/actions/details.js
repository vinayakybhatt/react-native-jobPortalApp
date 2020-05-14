import { AsyncStorage } from 'react-native'
import { JOBS, BOOKING } from "../../env";

export const SET_DETAILS = "SET_DETAILS";
export const SET_BOOKINGS = "SET_BOOKINGS";

export const fetchDetails = () => {
  return async (dispatch) => {
    const response = await fetch(JOBS);
    const resData = await response.json();
    const data = Object.entries(resData);

    const details = [];
    for (let i = 0; i < data.length; i++) details.push(data[i][1]);
    dispatch({
      type: SET_DETAILS,
      details,
    });
  };
};

export const fetchMyBookings = () => {
  return async dispatch => {
    const response = await fetch(BOOKING);
    const resData = await response.json();
    const data = Object.entries(resData);

    const details = [];
    for (let i=0; i < data.length; i++) details.push(data[i][1]);
    const localId = await AsyncStorage.getItem('@localId');
    const myBookings = details.filter(bookings => bookings.localId === localId);
    
    dispatch({
      type: SET_BOOKINGS,
      details: myBookings,
      // details: details
    })
  }
};
