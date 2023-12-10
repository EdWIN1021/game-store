import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import GameCard from "./GameCard";
import useTopGames from "../hooks/useTopGames";

const TopGames = () => {
  const { games, loading } = useTopGames(2);

  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "baseline" }}>
        <Text style={styles.title}>Top Games</Text>
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

export default TopGames;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 16,
    flex: 1,
  },
});
