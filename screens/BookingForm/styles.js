import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default StyleSheet.create({
  screen: {
    padding: 10,
  },
  form: {
    alignItems: "center",
  },
  input: {
    width: (Dimensions.get("screen").width * 80) / 100,
  },
  fabButton: {
    width: "100%",
    alignItems: "flex-end",
  },
  fab: {
    flexDirection: "row",
    height: 60,
    width: 160,
    backgroundColor: Colors.primary,
    alignItems: "center",
    borderRadius: 30,
    justifyContent: "center",
    // iphone properties
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    // android properties
    elevation: 6,
  },
  fabText: {
    fontFamily: "bebas",
    fontSize: 24,
    color: Colors.light,
    marginHorizontal: 5,
  }
});
