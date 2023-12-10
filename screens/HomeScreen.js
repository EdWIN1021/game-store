import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import Search from "../components/Search";
import Carousel from "../components/Carousel";
import CategoriesTab from "../components/CategoriesTab";
import NewRelease from "../components/NewRelease";
import TopGames from "../components/TopGames";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.screen}>
      <Search />
      <Carousel />
      <CategoriesTab />
      <NewRelease />
      <TopGames />
    </ScrollView>
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
