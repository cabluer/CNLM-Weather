import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListOfCities from "../screens/ListOfCities";

const Stack = createStackNavigator();

const ListOfCitiesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="list-of-cities"
        component={ListOfCities}
        options={{
          title:
            "Listado de ciudades que se agregaron en la screen de busqueda",
        }}
      />
    </Stack.Navigator>
  );
};

export default ListOfCitiesStack;
