import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AboutUS from "../screens/AboutUs";

const Stack = createStackNavigator();

const AboutUsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="about-us"
        component={AboutUS}
        options={{
          title: "Sobre nosotros, quienes somos.. etc...",
        }}
      />
    </Stack.Navigator>
  );
};

export default AboutUsStack;
