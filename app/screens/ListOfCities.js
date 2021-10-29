import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ListOfCities = () => {
  return (
    <View style={styles.container}>
      <Text>Listado de tus Ciudades favoritas..</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ListOfCities;
