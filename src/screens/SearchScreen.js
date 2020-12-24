import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
//import yelp from "../api/yelp";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errormsg] = useResults();

  //console.log(results);

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Man könnte auch einfach <></> statt dem <View> nehmen */}
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => {
          searchApi(term);
        }}
      />
      {errormsg ? <Text>{errormsg}</Text> : null}
      <ScrollView>
        <ResultsList results={filterResultsByPrice("€")} headerText='Günstig' />
        <ResultsList results={filterResultsByPrice("€€")} headerText='Mittel' />
        <ResultsList results={filterResultsByPrice("€€€")} headerText='Teuer' />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
