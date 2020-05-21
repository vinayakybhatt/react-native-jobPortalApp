import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { fetchMyBookings } from "../../store/actions/details";
import styles from "./styles";
import Colors from "../../constants/colors";
import Ticket from "../../components/UI/Ticket";
const Home = (props) => {
  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.details.bookings);
  useEffect(() => {
    const loadBookings = async () => {
      try {
        setisLoading(true);
        await dispatch(fetchMyBookings());
        setisLoading(false);
      } catch (e) {
        setisLoading(false);
      }
    };
    loadBookings();
  }, [dispatch]);
  return (
      <View style={{backgroundColor:Colors.bgColor}}>
    <SafeAreaView style={{ flex: 1 }}>
      {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size='large' color={Colors.primary} />
        </View>
      ) : (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {bookings &&
            bookings.map((booking, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  key={index}
                  onPress={() => {
                    props.navigation.navigate("bookingInfo", {
                      item: booking.user,
                      id: booking.job.id,
                      name: booking.job.name,
                      email: booking.job.experience,
                    });
                  }}
                >
                  <Ticket item={booking.job} qty={booking} />
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      )}
    </SafeAreaView>
      </View>
  );
};

export default Home;
