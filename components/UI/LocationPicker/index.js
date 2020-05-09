import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Alert,
  ActivityIndicator,
  StyleSheet,
  Button,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import { GOOGLE_API } from "../../../env";
import MapPreview from "../MapPreview";
import Btn from "../Btn";
import Colors from "../../../constants/colors";

const verifyPermissions = async () => {
  const result = await Permissions.askAsync(Permissions.LOCATION);
  if (result.status === "granted") {
    return true;
  }

  Alert.alert(
    "Insufficient Permissions",
    "You need to grant location permissions to use this app",
    [{ text: "Okay" }]
  );
  return false;
};

const LocationPicker = (props) => {
  const [pickedLocation, setpickedLocation] = useState();
  const [isFetching, setisFetching] = useState(false);
  const [geoCode, setgeoCode] = useState();
  const [address, setAddress] = useState();

  const geoCodeHandler = async ({ latitude, longitude }) => {
    const geoCodeLink = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API}`;

    const response = await fetch(geoCodeLink);
    const res = await response.json();
    setAddress(res.plus_code.compound_code);
  };

  const fetchLocationHandler = async () => {
    setisFetching(true);
    const hasPerms = verifyPermissions();
    if (!hasPerms) return;

    try {
      const location = await Location.getCurrentPositionAsync({
        accuracy: 5,
        timeout: 5000,
      });
      setpickedLocation({
        ...location.coords,
      });
      await geoCodeHandler(location.coords);
      setisFetching(false);
    } catch (e) {
      Alert.alert("Error", "Something went wrong, please try again", [
        {
          text: "Okay",
          onPress: () => {
            setisFetching(false);
          },
        },
      ]);
    }
  };
  return (
    <View style={styles.locationPicker}>
      {address && (
        <View style={styles.wrapper}>
          <View style={styles.staticInfo}>
            <Text style={styles.infoText}> Location: </Text>
            <Text style={styles.text}>{address}</Text>
          </View>
        </View>
      )}
      <TouchableOpacity
        onPress={() => {
          if (pickedLocation)
            props.navigate("mapScreen", {
              location: pickedLocation,
            });
        }}
      >
        <MapPreview location={pickedLocation} style={styles.mapPreview}>
          {isFetching ? (
            <ActivityIndicator size='large' color='green' />
          ) : (
            <Text style={styles.mapAltText}> No Location chosen yet! </Text>
          )}
        </MapPreview>
      </TouchableOpacity>
      <View style={{ alignItems: "flex-end" }}>
        <TouchableOpacity onPress={fetchLocationHandler}>
          <View style={styles.location}>
            <Text style={styles.locationText}> Fetch Location </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  locationPicker: {
    marginBottom: 15,
    width: "100%",
  },
  mapPreview: {
    marginVertical: 10,
    width: "100%",
    height: 150,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Colors.light,
  },
  btn: {
    width: Dimensions.get("screen").width / 2,
  },
  location: {
    paddingHorizontal: 10,
  },
  locationText: {
    fontSize: 16,
    fontFamily: "roboto-bold",
    color: Colors.primary,
  },
  wrapper: {
    alignItems: "center",
  },
  staticInfo: {
    flexDirection: "row",
    backgroundColor: "#fefefe",
    padding: 10,
    borderRadius: 10,
    width: Dimensions.get("screen").width * 0.95,
    marginVertical: 10,
  },
  infoText: {
    fontFamily: "roboto-bold",
    fontSize: 16,
    marginHorizontal: 5,
  },
  text: {
    fontFamily: "roboto",
    fontSize: 16,
  },
});

export default LocationPicker;
