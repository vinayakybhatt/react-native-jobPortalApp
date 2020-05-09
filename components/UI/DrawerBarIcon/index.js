import React from "react";
import { TouchableOpacity, View, Text } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons"

import Colors from "../../../constants/colors"

const DrawerTabIcon = ({ route }) => (
  <TouchableOpacity onPress={() => route.navigation.toggleDrawer()}>
    <View style={{ paddingHorizontal: 20 }}>
      <Text>
        <FontAwesome5 name='bars' color={Colors.dark} size={20} />
      </Text>
    </View>
  </TouchableOpacity>
);

export default DrawerTabIcon