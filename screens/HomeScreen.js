import { StyleSheet, View } from "react-native";
import React from "react";
import Search from "../components/Search";
import Carousel from "../components/Carousel";
import CategoriesTab from "../components/CategoriesTab";
import NewRelease from "../components/NewRelease";

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <Search />
      <Carousel />
      <CategoriesTab />
      <NewRelease />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 15,
    height: "100%",
    // backgroundColor: "#FFF",
    borderRadius: 10,
  },
});
