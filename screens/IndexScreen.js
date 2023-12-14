import React from "react";
import HomeScreen from "./HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OrderScreen from "./OrderScreen";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import WishListScreen from "./WishListScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import AccountScreen from "./AccountScreen";
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
          tabBarIcon: () => <AntDesign name="hearto" size={24} color="black" />,
        }}
        name="WishList"
        component={WishListScreen}
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
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome5 name="user" size={24} color="black" />
          ),
        }}
        name="Account"
        component={AccountScreen}
      />
    </Tab.Navigator>
  );
};

export default IndexScreen;
