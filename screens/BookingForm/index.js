import React, { useState, useReducer } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import styles from "./styles";
import Input from "../../components/UI/Input";
import Ticket from "../../components/UI/Ticket";
import { BOOKING } from "../../env";
import { fetchMyBookings } from "../../store/actions/details";
import { useSelector, useDispatch } from "react-redux";
const formReducer = (state, { key, payload }) => {
  switch (key) {
    case "NAME":
      return { ...state, name: payload };
    case "AGE":
      return { ...state, age: payload };
    case "ID":
      return { ...state, id: payload };
    case "GENDER":
      return { ...state, gender: payload };
    case "EXPERIENCE":
      return { ...state, experience: payload };
    default:
      return state;
  }
};

const BookingForm = (props) => {
  const dispatch = useDispatch();
  const { item } = props.route.params;
  const user = useSelector((state) => state.auth.user);
  const [formState, formDispatch] = useReducer(formReducer, {
    name: "",
    age: null,
    id: "",
    gender: "",
    experience: 1,
  });

  const inputHandler = ({ key, payload }) => {
    formDispatch({
      key,
      payload,
    });
  };


  const bookingHandler = async () => {
    if (
      formState.name &&
      formState.age &&
      formState.id &&
      formState.gender &&
      formState.experience
    ) {
      const dataObj = {
        user: { ...formState },
        job: { ...item },
        email: user.email,
        localId: user.localId,
      };
      const response = await fetch(BOOKING, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataObj),
      });
      const res = await response.json();
      await dispatch(fetchMyBookings());
      Alert.alert(
        "Interview Scheduled",
        "Interview has been scheduled",
        [
          {
            text: "OK",
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert("Error", "Please fill all the fields", [{ text: "OK" }], {
        cancelable: false,
      });
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.screen}>
          <View>
            <View style={styles.form}>
              <Ticket item={item} />
              <Input
                style={styles.input}
                placeholder={"Full name"}
                onChangeText={(payload) =>
                  inputHandler({ key: "NAME", payload })
                }
                value={formState.name}
                returnKeyType='next'
              />
              <Input
                style={styles.input}
                placeholder={"Age"}
                keyboardType={"number-pad"}
                maxLength={2}
                onChangeText={(payload) =>
                  inputHandler({ key: "AGE", payload })
                }
              />
              <Input
                style={styles.input}
                placeholder={"Email"}
                value={formState.email}
                autoCapitalize={"none"}
                autoCorrent={false}
                onChangeText={(payload) => {
                  inputHandler({ key: "ID", payload });
                }}
              />
              <Input
                style={styles.input}
                placeholder={"Gender"}
                onChangeText={(payload) => {
                  inputHandler({ key: "GENDER", payload });
                }}
              />
              <Input
                style={styles.input}
                placeholder={"Experience"}
                keyboardType={"number-pad"}
                maxLength={2}
                onChangeText={(payload) => {
                  inputHandler({ key: "EXPERIENCE", payload });
                }}
              />
            </View>
          </View>
          <View style={styles.fabButton}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.fab}
              onPress={() => {
                bookingHandler();
              }}
            >
              <Text style={styles.fabText}> Confirm InterView </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookingForm;
