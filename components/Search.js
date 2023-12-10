import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

const Search = () => {
  return (
    <View style={styles.search}>
      <TextInput
        style={styles.textInput}
        placeholderTextColor="#6B6B6B"
        placeholder="Search..."
        autoCapitalize="none"
        autoComplete="off"
      />
      <Feather name="search" size={20} color="black" />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    backgroundColor: "#FAFAFA",
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginVertical: 15,
    borderRadius: 10,

    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  textInput: {
    flex: 1,
    alignSelf: "center",
    paddingHorizontal: 10,
  },
});
