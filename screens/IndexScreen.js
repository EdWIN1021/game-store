import React from "react";
import HomeScreen from "./HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OrderScreen from "./OrderScreen";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const IndexScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Feather name="shopping-cart" size={24} color="black" />
          ),
        }}
        name="Order"
        component={OrderScreen}
      />
    </Tab.Navigator>
  );
};

export default IndexScreen;
