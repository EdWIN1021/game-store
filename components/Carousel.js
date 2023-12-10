import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import useGames from "../hooks/useGames";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
  const { games, loading } = useGames();

  return (
    <View>
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
