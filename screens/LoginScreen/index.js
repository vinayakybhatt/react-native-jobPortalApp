import React, { useState, useReducer } from "react";
import {
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useDispatch } from "react-redux";
import { auth } from "../../store/actions/auth";
import { LOGIN, REGISTER } from "../../store/actions/auth";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";
import Card from "../../components/UI/Card";
import Input from "../../components/UI/Input";
import Btn from "../../components/UI/Btn";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

const formReducer = (state, { type, key, payload }) => {
  switch (type) {
    case "INPUT":
      if (key === "email") return { ...state, email: payload };
      else return { ...state, password: payload };
    default:
      return state;
  }
};

const LoginScreen = (props) => {
  const dispatch = useDispatch();
  const [formState, formDispatch] = useReducer(formReducer, {
    username: "",
    password: "",
  });
  const [screen, setScreen] = useState(true);
  const errorAlert = (error) => {
    Alert.alert("Error", error, [{ text: "OK" }], { cancelable: false });
  };

  const inputHandler = ({ text, key }) => {
    formDispatch({
      type: "INPUT",
      payload: text,
      key,
    });
  };

  const authHandler = async (type) => {
    console.log("calling", type);
    if (formState.email && formState.password) {
      let event;
      if (type === LOGIN) event = LOGIN;
      else event = REGISTER;

      const error = await dispatch(
        auth(formState.email, formState.password, event)
      );
      if (error) {
        errorAlert(error)
      }
    } else {
      errorAlert("Please Fill the required fields");
    }
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.screen}>
          <Image
            style={styles.image}
            source={require("../../assets/images/5228.jpg")}
          />
          <View style={styles.container}>
            <Text style={styles.title}>{ screen ? 'LOGIN' : 'REGISTER' }</Text>
            <Card style={styles.inputContainer}>
              <Input
                keyboardType={"email-address"}
                onChangeText={(text) => inputHandler({ text, key: "email" })}
                value={formState.email}
                autoCapitalize={"none"}
                autoCorrent={false}
                placeholder={"Email"}
                style={styles.textInput}
                returnKeyType='next'
              />
              <Input
                onChangeText={(text) => inputHandler({ text, key: "password" })}
                value={formState.password}
                placeholder={"Password"}
                style={styles.textInput}
                secureTextEntry={true}
                returnKeyType='done'
              />
              <View style={styles.buttonContainer}>
                {screen ? (
                  <Btn
                    style={styles.btn}
                    onPress={() => {
                      authHandler(LOGIN);
                    }}
                  >
                    LOGIN
                  </Btn>
                ) : (
                  <Btn
                    style={styles.btn}
                    onPress={() => {
                      authHandler(REGISTER);
                    }}
                  >
                    REGISTER
                  </Btn>
                )}
              </View>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.switcher}
                onPress={() => {
                  setScreen((prevState) => {
                    return !prevState;
                  });
                }}
              >
                <Text style={styles.tag}>
                  {screen ? "Need an account?" : "Have an account?"}
                </Text>
                <Text style={{ ...styles.tag, ...styles.tagSwitcher }}>
                  {screen ? "Register Here" : "Login Here"}
                </Text>
              </TouchableOpacity>
            </Card>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
