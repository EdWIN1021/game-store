import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import useNewRelease from "../hooks/useNewRelease";
import GameCard from "./GameCard";

const NewRelease = () => {
  const { games, loading } = useNewRelease(2);

  return (
    <View>
      <Text style={styles.title}>New Release</Text>
      <FlatList
        numColumns={2}
        data={games}
        renderItem={({ item }) => <GameCard game={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default NewRelease;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 18,
  },
});
