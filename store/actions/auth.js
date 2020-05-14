import React from "react";
import { AsyncStorage } from "react-native";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";
import { REGISTERURL, LOGINURL } from "../../env";

export const auth = (email, password, type) => {
  return async (dispatch) => {
    let url;
    if (type === REGISTER) url = REGISTERURL;
    else url = LOGINURL;
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
    dispatch({
      type,
      payload: response,
    });
  };
};

export const logout = () => {
  return { type: LOGOUT };
};
