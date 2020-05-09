import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useSelector } from "react-redux";
import Ticket from "../../components/UI/Ticket";
import Card from "../../components/UI/Card";
import Colors from "../../constants/colors";
const SearchScreen = (props) => {
  const [source, destination] = props.route.params.search.split("-");
  const res = useSelector((state) => state.details.allDetails);

  const filterData = () => {
    const s = source && source.toLowerCase();
    const d = destination && destination.toLowerCase();

    const filteredData = res.filter((train) => {
      const hasSource = train.source.toLowerCase().includes(s);
      const hasDestination = train.destination.toLowerCase().includes(d);
      const midways = train.midways.map((midway) => midway.toLowerCase());

      let hasMidway;
      if (midways.includes(s) || midways.includes(d)) hasMidway = true;
      else hasMidway = false;

      if (hasSource || hasDestination || hasMidway) return true;
      else return false;
    });
    return filteredData;
  };
  const filter = filterData();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View>
          {filter.length > 0 ? (
            filter.map((train) => (
              <TouchableOpacity
                activeOpacity={0.6}
                key={train.id}
                style={styles.ticket}
                onPress={() => {
                  props.navigation.navigate("info", {
                    id: train.id,
                    name: train.name,
                  });
                }}
              >
                <Ticket item={train} />
              </TouchableOpacity>
            ))
          ) : (
            <Card style={styles.errorCard}>
              <Text style={styles.errorMessage}> No result found </Text>
            </Card>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ticket: {
    height: 200,
  },
  errorCard: {
    marginVertical: 20,
    marginHorizontal: 20,
    padding: 20,
  },
  errorMessage: {
    color: Colors.danger,
    fontSize: 16,
    fontFamily: "roboto",
  },
});

export default SearchScreen;
