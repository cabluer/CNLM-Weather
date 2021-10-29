import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AboutUS = () => {
  return (
    <View style={styles.container}>
      <Text>Sobre Nosotros... </Text>
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
export default AboutUS;
