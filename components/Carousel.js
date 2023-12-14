import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import useGames from "../hooks/useGames";
import CarouselItem from "./CarouselItem";

const Carousel = ({ url }) => {
  const { games, loading } = useGames(url);

  return (
    <View style={{ marginVertical: 16 }}>
      <FlatList
        data={games}
        renderItem={({ item }) => <CarouselItem game={item} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
