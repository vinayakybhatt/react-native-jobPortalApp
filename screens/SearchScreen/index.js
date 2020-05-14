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
  const searchString = props.route.params.search.toLowerCase();
  const res = useSelector((state) => state.details.allDetails);

  const filterData = () => {
    const filteredData = res.filter((jobs) => {
      const hasCompany = jobs.companyName.toLowerCase().includes(searchString);
      const hasDesignation = jobs.designation.toLowerCase().includes(searchString);
      const hasLocation = jobs.location.toLowerCase().includes(searchString);
      if (hasCompany || hasDesignation || hasLocation ) return true;
      else return false;
    });
    return filteredData;
  };
  const filter = filterData();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.mainbg}>
          {filter.length > 0 ? (
            filter.map((jobs) => (
              <TouchableOpacity
                activeOpacity={0.6}
                key={jobs.id}
                style={styles.ticket}
                onPress={() => {
                  props.navigation.navigate("info", {
                    id: jobs.id,
                    name: jobs.companyName,
                  });
                }}
              >
                <Ticket item={jobs} />
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
  mainbg:{
    backgroundColor:Colors.bgColor,
    height:Dimensions.get('window').height
  },
  errorMessage: {
    color: Colors.danger,
    fontSize: 16,
    fontFamily: "roboto",
  },
});

export default SearchScreen;
