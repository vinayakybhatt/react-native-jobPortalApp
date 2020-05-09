import { StyleSheet } from 'react-native'
import Colors from "../../constants/colors"
export default StyleSheet.create({
    header:{
        width: '100%',
        height: 80,
        paddingTop: 35,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: Colors.light,
        fontSize: 22,
        fontFamily: 'bebas'
    }
})