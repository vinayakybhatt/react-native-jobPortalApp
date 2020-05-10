import React, { useState } from "react";
import "react-native-gesture-handler"
import { StyleSheet, Text, View } from "react-native";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk"
import Navigator from "./router/Navigator";

import authReducer from "./store/reducers/auth";
import detailsReducer from "./store/reducers/details";

import * as Font from "expo-font";
import { AppLoading } from "expo";

enableScreens();
const rootReducer = combineReducers({
    auth: authReducer,
    details: detailsReducer,
});
const store = createStore(
    rootReducer, applyMiddleware(ReduxThunk)
);
console.reportErrorsAsExceptions = false;
const fetchFonts = () => {
    return Font.loadAsync({
        bebas: require("./assets/fonts/BebasNeue-Regular.ttf"),
        "roboto-black": require("./assets/fonts/Roboto-Black.ttf"),
        "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
        "roboto-light": require("./assets/fonts/Roboto-Light.ttf"),
        "roboto-italic": require("./assets/fonts/Roboto-Italic.ttf"),
        roboto: require("./assets/fonts/Roboto-Regular.ttf"),
    });
};

export default function App() {
    const [status, setStatus] = useState(false);
    const [dataLoaded, setdataLoaded] = useState(false);
    const toggleLogin = (val) => {
        setStatus(val);
    };

    if (!dataLoaded) {
        console.log("loading..");
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => {
                    setdataLoaded(true);
                }}
                onError={(error) => {
                    console.log(error);
                }}
            />
        );
    }
    return (
        <Provider store={store}>
          <Navigator />
        </Provider>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});
