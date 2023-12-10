import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Button, Pressable, View } from "react-native";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            title: "Game Store",
            headerTitleStyle: {
              fontWeight: "bold",
              color: "#3669C9",
            },
            // headerRight: () => (
            //   <FontAwesome5 name="bell" size={24} color="black" />
            // ),
            // headerLeft: () => {},
          }}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
