import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "./HomeStack";
import SearchCitiesStack from "./SearchCitiesStack";
import ListOfCitiesStack from "./ListOfCitiesStack";
import AboutUsStack from "./AboutUsStack";

const Tab = createBottomTabNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="home"
          component={HomeStack}
          options={{ title: "Inicio" }}
        />

        <Tab.Screen
          name="search-cities"
          component={SearchCitiesStack}
          options={{ title: "Buscar Ciudades" }}
        />

        <Tab.Screen
          name="list-of-cities"
          component={ListOfCitiesStack}
          options={{ title: "Lista de Ciudades" }}
        />

        <Tab.Screen
          name="about-us"
          component={AboutUsStack}
          options={{ title: "Quienes Somos" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
