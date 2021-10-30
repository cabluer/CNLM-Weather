import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchCities from "../screens/SearchCities";

const Stack = createStackNavigator();

const SearchCitiesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="search-cities"
        component={SearchCities}
        options={{
          title:
            "busqueda de ciudades de las cuales se desea obtener datos del clima en tiempo real",
        }}
      />
    </Stack.Navigator>
  );
};

export default SearchCitiesStack;
