import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "./screens/IndexScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer initialRouteName="index">
      <Stack.Navigator>
        <Stack.Screen
          name="index"
          options={{
            title: "Game Store",
            headerTitleStyle: {
              fontWeight: "bold",
              color: "#3669C9",
            },
          }}
          component={IndexScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
