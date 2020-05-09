import React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import { useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import { Colors } from "react-native/Libraries/NewAppScreen";
const images = [
  require("../../assets/images/0.jpg"),
  require("../../assets/images/1.jpg"),
  require("../../assets/images/2.jpg"),
  require("../../assets/images/3.jpg")
]
const Info = (props) => {
  const details = useSelector((state) => state.details.allDetails);
  const { id } = props.route.params;
  const selectedItem = details.find((item) => item.id === id);
  const random = Math.floor((Math.random() * images.length - 1) + 1)
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.screen}>
          <Image
            style={styles.image}
            source={images[random]}
          />
          <View style={styles.itemView}>
            <View style={styles.mainInfo}>
              <Text style={styles.owner}>
                {selectedItem.companyName.toUpperCase()}
              </Text>
            </View>
            <View style={styles.location}>
              <Text style={styles.source}>
                {selectedItem.designation.toUpperCase()}
              </Text>
              <Text style={styles.arrow}>
                <FontAwesome name='long-arrow-right' size={36} />
              </Text>
              <Text style={styles.destination}>
                {selectedItem.location.toUpperCase()}
              </Text>
            </View>

            <View style={styles.incomingDetails}>
              <Text style={styles.timings}> Experience and TYPE</Text>
              <Text style={styles.time}> { selectedItem.Experience } Years</Text>
              <Text style={styles.date}> { selectedItem.type }  </Text>
            </View>
            <View style={styles.fabButton}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.fab}
                onPress={() => {
                  props.navigation.navigate("bookingForm", {
                    item: selectedItem,
                  });
                }}>
                <Text style={styles.fabText}> Schedule Interview </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Info;