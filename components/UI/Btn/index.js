import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import Colors from "../../../constants/colors";

const Btn = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <View style={{...styles.button, ...props.style}}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    margin: 5,
    width: 130,
    borderRadius: 50,
  },
  buttonText: {
    color: Colors.light,
    textAlign: "center",
    fontSize: 22,
    fontFamily: "bebas",
  }
});

export default Btn;
