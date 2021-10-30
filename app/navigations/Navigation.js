import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import SearchCities from "../screens/SearchCities";
import ListOfCities from "../screens/ListOfCities";
import AboutUs from "../screens/AboutUs";

const Tab = createBottomTabNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="home"
          component={Home}
          options={{ title: "Inicio" }}
        />

        <Tab.Screen
          name="search-cities"
          component={SearchCities}
          options={{ title: "Buscar Ciudades" }}
        />

        <Tab.Screen
          name="list-of-cities"
          component={ListOfCities}
          options={{ title: "Lista de Ciudades" }}
        />

        <Tab.Screen
          name="about-us"
          component={AboutUs}
          options={{ title: "Quienes Somos" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
