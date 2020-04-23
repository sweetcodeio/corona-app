import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Home from "../pages/Home";
import Brazil from "../pages/Brazil";
import World from "../pages/World";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Brazil" component={Brazil} />
        <AppStack.Screen name="World" component={World} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
