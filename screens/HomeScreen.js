import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import Search from "../components/Search";
import Carousel from "../components/Carousel";
import CategoriesTab from "../components/CategoriesTab";
import Row from "../components/Row";

const HomeScreen = () => {
  return (
    <View style={{ height: "100%" }}>
      <ScrollView style={styles.screen}>
        <Search />
        <Carousel
          url={
            "/games/lists/greatest?discover=true&page=1&page_size=10&ordering=-added"
          }
        />
        <CategoriesTab />

        <Row
          title={"New Releases"}
          url={
            "/games/lists/main?discover=true&page=1&page_size=2&ordering=-released"
          }
        />

        <Carousel
          url={
            "/games/lists/greatest?discover=true&page=2&page_size=10&ordering=-added"
          }
        />
        <Row
          title={"Top Games"}
          url={"/games/lists/popular?discover=true&page=1&page_size=2"}
        />

        <Carousel
          url={
            "/games/lists/greatest?discover=true&page=3&page_size=10&ordering=-added"
          }
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 15,
    height: "100%",
    borderRadius: 10,
  },
});
