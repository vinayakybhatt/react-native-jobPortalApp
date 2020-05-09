import React, { useRef } from "react";
import * as FileSystem from 'expo-file-system';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Platform,
  TouchableNativeFeedback,
  Alert
} from "react-native";
import { useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import ViewShot from "react-native-view-shot";
import styles from "./styles";
import Colors from "../../constants/colors";
const images = [
  require("../../assets/images/0.jpg"),
  require("../../assets/images/1.jpg"),
  require("../../assets/images/2.jpg"),
  require("../../assets/images/3.jpg"),
];
const Info = (props) => {
  const details = useSelector((state) => state.details.allDetails);
  const { id, item, email } = props.route.params;

  const selectedItem = details.find((item) => item.id === id);
  const random = Math.floor(Math.random() * images.length - 1 + 1);
  const viewShotRef = useRef()
  const saveScreenshot = async () => {
    viewShotRef.current.capture().then(uri => {
      const imgName = uri.split('/').pop()
      const newPath = FileSystem.documentDirectory + imgName
      console.log({
        imgName,
        uri,
        newPath
      })
      FileSystem.moveAsync({
        from: uri,
        to: newPath
      }).then(() => {
        Alert.alert("Screenshot Saved", `Location: ${newPath}`, [{ text: "OK", onPress: () => { console.log(newPath)} }], { cancelable: false });
      })
    }).catch(e => {
      Alert.alert("Error", "Something went wrong, Please try again.", [{ text: "OK" }], { cancelable: false });
      throw e;
    });
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ViewShot ref={viewShotRef} options={{ format: "jpg", quality: 0.9 }}>
          <Image style={styles.image} source={images[random]} />
          <View style={styles.itemView}>
            <View style={styles.mainInfo}>
              <Text style={styles.owner}>
                {selectedItem.companyName.toUpperCase()}
              </Text>
              <Text style={styles.name}> {selectedItem.name} </Text>
            </View>
            <View style={styles.location}>
              <Text style={styles.source}>
                {selectedItem.source.toUpperCase()}
              </Text>
              <Text style={styles.arrow}>
                <FontAwesome name='long-arrow-right' size={36} />
              </Text>
              <Text style={styles.destination}>
                {selectedItem.destination.toUpperCase()}
              </Text>
            </View>
            <View style={styles.priceWrapper}>
              <Text style={styles.price}>
                {`€${selectedItem.price * item.qty}`}
              </Text>
            </View>

            <View style={styles.incomingDetails}>
              <Text style={styles.timings}> Timings </Text>
              <Text style={styles.time}> {selectedItem.time} </Text>
              <Text style={styles.date}> {selectedItem.date} </Text>
            </View>
            <View style={styles.incomingDetails}>
              <Text style={styles.timings}> User Details </Text>
              <View style={styles.basicInfo}>
                <Text style={styles.basicInfoName}> {item.name} </Text>
                <Text style={styles.basicInfoEmail}> {email} </Text>
              </View>
              <View>
                <Text> Seats: {item.qty} </Text>
              </View>
              <View>
                <Text> Govt Verified ID: {item.id} </Text>
              </View>
            </View>
            <Text style={styles.stationsGoTrough}>
              Stations {selectedItem.name} go trough...
            </Text>
            <View style={styles.information}>
              {selectedItem.midways.map((midway) => (
                <TouchableOpacity activeOpacity={0.8} key={midway}>
                  <Text style={styles.infoText}>{midway}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity onPress={saveScreenshot}>
              <View style={styles.screenshotBtn}>
                <Text style={styles.screenshotText}> Capture Screenshot </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ViewShot>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Info;
