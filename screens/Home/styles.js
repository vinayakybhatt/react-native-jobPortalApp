import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default StyleSheet.create({
  screen: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logout: {
    alignItems: "flex-end",
    marginVertical: 2,
    marginHorizontal: 10,
  },
  items: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
    height: 180,
    marginVertical: 10,
    elevation: 2,
    borderRadius: 5,
    borderLeftColor: Colors.primary,
    borderRightColor: Colors.danger,
    borderLeftWidth: 5,
    borderRightWidth: 5,
  },
  mainInfo: {
    flexDirection: 'row'
  },
  searchBar: {
    flex: 1,
    fontSize: 14,
    color: Colors.dark
  },
  searchButton: {
    marginLeft: 30,
    padding: 8,
    borderRadius: 10,
    backgroundColor: Colors.primary
  },
  btnText: {
    fontFamily: 'roboto',
    fontSize: 16,
    color: Colors.light
  },
  info: {
    flex: 1
  },
  name: {
    fontSize: wp('6%'),
    fontFamily: 'roboto-bold',
    color: Colors.dark
  },
  owner: {
    fontSize: wp('3%'),
    fontFamily: 'roboto-light'
  },
  time: {
    fontSize: wp('5%'),
    fontFamily: 'roboto-light'
  },
  date: {
    fontSize: wp('3%'),
    textAlign: 'right',
    fontFamily: 'roboto'
  },
  location: {
    flexDirection: 'row',
    marginVertical: 10
  },
  grid: {
    width: '33%',
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'bebas',
    fontSize: wp('5%'),
  },
  amountWrapper: {
    alignItems: 'center'
  },
  amount: {
    fontFamily: 'bebas',
    fontSize: wp('5%'),
    color: Colors.primary
  },
  source: {
    color: Colors.primary
  },
  destination: {
    color: Colors.danger
  },
  arrowIcon: {
    color: Colors.dark
  },
  stations: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-evenly',
  },
  midway: {
    color: Colors.ltGray,
    fontFamily: 'roboto-light'
  },
  midwayStation: {
    color: Colors.ltGray,
    fontFamily: 'roboto',
  }
});
