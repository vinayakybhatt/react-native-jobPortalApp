import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";
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
    backgroundColor: Colors.light,
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
    color: Colors.primary,
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
    color: Colors.danger,
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
    marginBottom: 10
  },
  fabText: {
    fontFamily: "bebas",
    fontSize: 24,
    color: Colors.light,
    marginHorizontal: 5,
  },
  stationsGoTrough: {
    fontFamily: 'roboto-light'
  },
  incomingDetails: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: Colors.dkLight,
    marginVertical: 10
  },
  timings:{
    fontFamily: 'roboto-bold',
    fontSize: 20
  },
  time: {
    fontSize: 18,
    fontFamily: 'roboto-light',
    marginLeft: 20
  },
  date: {
    marginLeft: 20,
    fontFamily: 'roboto-light',
    fontSize: 16
  }
});
