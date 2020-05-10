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
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor:'#eceff1',
    width:wp('100%')
  },
  title: {
    fontSize: 34,
    paddingTop:hp('3%'),
    color:Colors.primary,
    fontFamily: "bebas",
  },
  inputContainer: {
    backgroundColor: 'transparent',
    elevation:0,
    marginVertical: hp("5%"),
  },
  buttonContainer: {
    alignItems: "center",
  },
  btn: {
    marginTop:hp('2%'),
    width: wp("56%"),
  },
  switcher: {
    marginTop: 15,
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
    color: Colors.primary
  }
});
