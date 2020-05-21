import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import * as DocumentPicker from 'expo-document-picker';
import {
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { logout } from "../../store/actions/auth";
import Colors from "../../constants/colors";

const Profile = () => {
  const dispatch = useDispatch();
  const { email, localId } = useSelector((state) => state.auth.user);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image
            style={styles.image}
            source={require("../../assets/images/Group2.png")}
          />
          <View style={styles.staticInfo}>
            <Text style={styles.infoText}> Email:</Text>
            <Text style={styles.text}>{ email }</Text>
          </View>
          <View style={styles.staticInfo}>
            <Text style={styles.infoText}> ID: </Text>
            <Text style={styles.text}>{ localId }</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
          activeOpacity={0.8}
          style={styles.importBtn}
          onPress={() => {
            DocumentPicker.getDocumentAsync()
        }}
          >
          <Text  style={styles.importText}>  Import Resume </Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.logoutBtn}
          onPress={() => {
            dispatch(logout())
          }}
        >
          <Text style={styles.btnText}> LOGOUT </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  profile: {
    alignItems: 'center'
  },
  image: {
    marginVertical: 20,
    height: 150,
    width: 150,
    resizeMode: 'contain'
  },
  staticInfo: {
    flexDirection: 'row',
    backgroundColor: '#fefefe',
    padding: 10,
    borderRadius: 10,
    width: Dimensions.get('screen').width * 0.95,
    marginVertical: 10
  },
  infoText: {
    fontFamily: 'roboto-bold',
    fontSize: 16,
    marginHorizontal: 5
  },
  text: {
    fontFamily: 'roboto',
    fontSize: 16
  },
  logoutBtn: {
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    padding: 10,
    backgroundColor: Colors.primary,

    width: Dimensions.get("screen").width,
  },
  importBtn:{
    position: "absolute",
    top: 20,
    width:wp('33%'),
    alignSelf: "center",
    padding: 10,
    backgroundColor: Colors.primary,
  },
  btnText: {
    color: Colors.light,
    fontFamily: 'roboto-black',
    textAlign:'center',
    letterSpacing: 1
  },
  importText:{
    color: Colors.light,
    fontFamily: 'roboto-black',
    textAlign:'center',
  }
});

export default Profile;
