import React from "react";
import { Alert, AsyncStorage } from "react-native";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";
import { API_KEY, REGISTERURL, LOGINURL } from "../../env";

export const auth = (email, password, type) => {
  return async (dispatch) => {
    let url;
    if (type === REGISTER) url = REGISTERURL;
    else url = LOGINURL;
    console.log(url);
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });
    const response = await res.json();
    if (response.error) {
      return response.error.message
    }
    await AsyncStorage.setItem('@localId', response.localId);
    // await AsyncStorage.setItem('@token', response.localId)
    console.log(response);
    dispatch({
      type,
      payload: response,
    });
  };
};

export const logout = () => {
  return { type: LOGOUT };
};
