import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default StyleSheet.create({
  screen: {
    backgroundColor: '#fff'
  },
  image: {
    height: Dimensions.get("window").height / 3,
    width: "100%",
    resizeMode: "cover",
  },
  itemView: {
    backgroundColor: Colors.bgColor,
    padding: 20,
  },
  mainInfo: {
    flexDirection: "row",
    justifyContent: "center",
  },
  owner: {
    flex: 1,
    fontFamily: "roboto-bold",
    fontSize: 24,
    color:Colors.primary
  },
  name: {
    fontFamily: "roboto-light",
    fontSize: 18,
    paddingTop: 5,
  },
  location: {
    flexDirection: "row",
    marginVertical: 30,
  },
  source: {
    flex: 1,
    fontSize: Dimensions.get('screen').fontScale * 20,
    fontFamily: "bebas",
    color: Colors.dark,
    textAlign: "center",
  },
  arrow: {
    flex: 1,
    textAlign: "center",
    color: Colors.ltGray,
  },
  destination: {
    flex: 1,
    fontSize: Dimensions.get('screen').fontScale * 20,
    fontFamily: "bebas",
    position:'relative',
    left:wp('-52%'),
    top:hp('4%'),
    color: Colors.dark,
    textAlign: "center",
  },
  priceWrapper: {
    alignItems: "center",
    borderColor: "red",
    marginBottom: 10
  },
  price: {
    fontSize: 45,
    fontFamily: "bebas",
    color: Colors.primary,
  },
  information: {
    marginBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  infoText: {
    textAlign: "justify",
    fontSize: 16,
    fontFamily: "roboto",
    margin: 10,
    padding: 10,
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    elevation: 1
  },
  fabButton: {
    width: "100%",
    alignItems: "flex-end",
  },
  fab: {
    flexDirection: "row",
    height: 60,
    width: wp('35%'),
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
    marginBottom: 10
  },
  fabText: {
    fontFamily: "bebas",
    fontSize: 24,
    textAlign:'center',
    color: Colors.light,
    marginHorizontal: 5,
  },
  stationsGoTrough: {
    fontFamily: 'roboto-light'
  },
  incomingDetails: {
    paddingTop: 20,
    backgroundColor: Colors.bgColor,
    marginVertical: 10
  },
  timings:{
    fontFamily: 'roboto-bold',
    color:Colors.primary,
    fontSize: 20
  },
  time: {
    fontSize: 18,
    fontFamily: 'roboto-light',
    paddingLeft:wp('4%'),
    color:Colors.dark,
    marginLeft: 20
  },
  date: {
    marginLeft: 20,
    fontFamily: 'roboto-light',
    paddingLeft:wp('4.7%'),
    color:Colors.dark,
    fontSize: 16
  }
});
