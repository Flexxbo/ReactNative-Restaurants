import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ResultsList = ({ headerText, results }) => {
  return (
    <View>
      <Text style={styles.title}>{headerText}</Text>
      <Text>Restaurants:{results.length}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResultsList;
