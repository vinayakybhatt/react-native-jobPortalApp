import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import Colors from "../../../constants/colors"
const Card = (props) => {
    return (
        <View style={{ ...styles.card, ...props.style }}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.light,
        padding: 20,
        borderRadius: 10,
        marginVertical: 10,
        // iphone properties
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        // android properties
        elevation: 3,
        overflow: Platform.OS !== 'android' ? 'hidden' : 'scroll'
    },
});

export default Card;
