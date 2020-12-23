import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
//import { FlatList } from "react-native-gesture-handler";

const ResultsList = ({ headerText, results }) => {
  return (
    <View>
      <Text style={styles.title}>{headerText}</Text>
      <Text>Restaurants:{results.length}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => {
          return result.id;
        }}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
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
