import React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import styles from "./styles";

const Info = (props) => {
  const details = useSelector((state) => state.details.allDetails);
  const { id } = props.route.params;
  const selectedItem = details.find((item) => item.id === id);
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.screen}>
          <Image
            style={styles.image}
            source={selectedItem.logoUrl}
          />
          <View style={styles.itemView}>
            <View style={styles.mainInfo}>
              <Text style={styles.owner}>
                {selectedItem.companyName.toUpperCase()}
              </Text>
            </View>
            <View style={styles.location}>
              <Text style={styles.source}>
                Profile: {selectedItem.designation.toUpperCase()}
              </Text>
              <Text style={styles.destination}>
                Location: {selectedItem.location.toUpperCase()}
              </Text>
              <Text style={styles.destination}>
                Expected Salary: {selectedItem.package}
              </Text>
            </View>

            <View style={styles.incomingDetails}>
              <Text style={styles.timings}> Experience and TYPE</Text>
              <Text style={styles.time}> { selectedItem.experience } Years</Text>
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
