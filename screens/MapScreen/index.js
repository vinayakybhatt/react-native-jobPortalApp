import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
const MapScreen = (props) => {
  const { location } = props.route.params;

  const region = {
    latitude: location.latitude,
    longitude: location.longitude,
    latitudeDelta: 0.04,
    longitudeDelta: 0.01,
  };

  const [selectedLocation, setselectedLocation] = useState({
    latitude: location.latitude,
    longitude: location.longitude,
  });

  const selectLocationHandler = (event) => {
    setselectedLocation({
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    });
  };

  let markerCoordinates;
  if (selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.latitude,
      longitude: selectedLocation.longitude,
    };
  }

  return (
    <MapView
      style={styles.map}
      region={region}
      onLongPress={selectLocationHandler}
    >
      {markerCoordinates && (
        <Marker title='picked location' coordinate={markerCoordinates}></Marker>
      )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default MapScreen;
