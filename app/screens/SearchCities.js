import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SearchCities = () => {
  return (
    <View style={styles.container}>
      <Text>Busca tus Ciudades favoritas.. </Text>
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
export default SearchCities;
