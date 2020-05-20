import React from "react";
import { View, Text, StyleSheet,Image} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../../constants/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Ticket = (props) => {
  return (
    <View style={{ ...styles.items, ...props.style }}>
      <View style={styles.mainInfo}>
        <Image
            style={styles.image}
            source={props.item.logoUrl}
        />
        <View style={styles.info}>
          <Text style={styles.name}>{props.item.companyName}</Text>
          <Text style={styles.owner}>{props.item.type}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.time}>{props.item.location}</Text>
        </View>
      </View>
      <View style={styles.location}>
        <Text style={{ ...styles.grid, ...styles.source }}>
          {props.item.designation}
        </Text>
        <FontAwesome
          style={{ ...styles.grid, ...styles.arrowIcon }}
          size={24}
        />
        <Text style={{ ...styles.grid, ...styles.destination }}>
          {props.item.experience} Years Exp
        </Text>
        <Text style={styles.amount}>Expected Salary: {`${props.item.package}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.bgColor,
    height: 180,
    marginVertical: 10,
    borderRadius: 5,
    elevation:0
  },
  mainInfo: {
    flexDirection: "row",
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: wp("6%"),
    fontFamily: "roboto-bold",
    color: Colors.primary,
  },
  owner: {
    fontSize: wp("3%"),
    fontFamily: "roboto-light",
    color: Colors.dark,
  },
  time: {
    fontSize: wp("5%"),
    fontFamily: "roboto-light",
    color: Colors.dark,
  },
  date: {
    fontSize: wp("3%"),
    textAlign: "right",
    fontFamily: "roboto",
  },
  location: {
    flexDirection: "row",
    marginVertical: 10,
  },
  grid: {
    width: "33%",
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "left",
    fontFamily: "bebas",
    fontSize: wp("5%"),
  },
  amountWrapper: {
    alignItems: "center",
  },
  amount: {
    fontFamily: "bebas",
    fontSize: wp("7%"),
  },
  source: {
    color: Colors.primary,
  },
  destination: {
    position:'absolute',
    top:hp('6%'),
    color: Colors.dark,
  },
  arrowIcon: {
    color: Colors.dark,
  },
  stations: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "space-evenly",
  },
  midway: {
    color: Colors.ltGray,
    fontFamily: "roboto-light",
    flexWrap: 'wrap'
  },
  midwayStation: {
    color: Colors.ltGray,
    fontFamily: "roboto",
  },
});

export default Ticket;
