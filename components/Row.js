import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import GameCard from "./GameCard";
import useGames from "../hooks/useGames";

const Row = ({ title, url }) => {
  const { games, loading } = useGames(url);

  return (
    <View style={{ marginVertical: 16 }}>
      <View style={{ flexDirection: "row", alignItems: "baseline" }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={{ fontSize: 12, color: "#3669C9" }}>See All</Text>
      </View>

      <FlatList
        columnWrapperStyle={{ gap: 10 }}
        numColumns={2}
        data={games}
        renderItem={({ item }) => <GameCard game={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
    flex: 1,
  },
});
