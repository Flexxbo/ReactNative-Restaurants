import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name='search' style={styles.iconStyle} />
      <TextInput placeholder='Suche Restaurant' style={styles.textinput} />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginTop: 15,
    marginHorizontal: 10,
    flexDirection: "row",
  },

  iconStyle: {
    fontSize: 40,
    marginHorizontal: 15,
    alignSelf: "center",
  },

  textinput: {
    flex: 1,
    paddingLeft: 5,
    fontSize: 18,
  },
});

export default SearchBar;
