import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}> { props.title.toUpperCase() } </Text>
        </View>
    );
};

export default Header;
