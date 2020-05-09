import { StyleSheet, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "../../constants/colors";
export default StyleSheet.create({
  screen: {
    height: hp('100%'),
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  image: {
    width: wp("100%"),
    height: '30%',
    resizeMode: 'cover',
    marginVertical: hp("2"),
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 34,
    fontFamily: "bebas",
  },
  inputContainer: {
    backgroundColor: '#f9f9f9',
    marginVertical: hp("5%"),
  },
  buttonContainer: {
    alignItems: "center",
  },
  btn: {
    width: wp("50%"),
  },
  switcher: {
    marginTop: 10,
    padding: wp("2"),
    alignItems: "flex-end",
    flexDirection: "row",
  },
  tag: {
    marginHorizontal: 5,
    textAlign: "right",
  },
  tagSwitcher: {
    color: Colors.primary,
  },
  textInput: {
    fontSize: 16,
    color: Colors.ltGray
  }
});
