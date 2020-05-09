import React from "react";
import { TextInput, StyleSheet } from "react-native";
import Colors from "../../../constants/colors";

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    width: 250,
    padding: 5,
    fontSize: 20,
    color: Colors.ltGray,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
    marginVertical: 20,
    fontFamily: "roboto-bold",
  },
});

export default Input;
