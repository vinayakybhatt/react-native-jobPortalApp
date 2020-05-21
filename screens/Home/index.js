import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchDetails } from "../../store/actions/details";
import styles from "./styles";
import Input from "../../components/UI/Input";
import  Colors  from "../../constants/colors";
import Ticket from "../../components/UI/Ticket";

const Home = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    const loadDetails = async () => {
      setIsLoading(true);
      await dispatch(fetchDetails());
      setIsLoading(false);
    };
    loadDetails();
  }, [dispatch]);

  const details = useSelector((state) => state.details.allDetails);
  const renderInfo = (id, name) => {
    props.navigation.navigate("info", {
      id,
      name,
    });
  };

  if (isLoading) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size='large' color={Colors.primary} />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.screen}>
        <Input
          placeholder={"search:  location"}
          placeholderTextColor={Colors.primary}
          style={styles.searchBar}
          onChangeText={(text) => setSearch(text)}
          value={search}
        />
        <TouchableOpacity style={styles.searchButton} activeOpacity={0.6} onPress={() => {
          if (search) props.navigation.navigate('searchBar', {
            search
          })
        }}>
          <Text style={styles.btnText}> Search </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mainView}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        {details && details.length > 0 ? details.map((item) => (

              <TouchableOpacity
                  key={item.id}
                  activeOpacity={0.8}
                  style={styles.touchable}
                  onPress={() => renderInfo(item.id, item.companyName)}
              >
                <Ticket item={item} />
              </TouchableOpacity>
              )): null}
      </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
