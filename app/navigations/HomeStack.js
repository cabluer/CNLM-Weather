import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: "descripción de la app y sus instrucciones de uso",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
