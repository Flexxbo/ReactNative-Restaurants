import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <>
      {result.image_url ? (
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: result.image_url }} />

          <Text style={styles.name}>{result.name}</Text>
          <Text style={styles.info}>
            {result.rating} Stars, {result.review_count} Reviews
          </Text>
        </View>
      ) : null}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginBottom: 5,
    marginTop: 5,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 15,
  },
  info: {
    fontSize: 13,
  },
});

export default ResultsDetail;
