import { StyleSheet, Text, View, Image } from "react-native";

const GameCard = ({ game }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: game.background_image }} />
      <Text style={{ fontSize: 16, fontWeight: "600" }}>{game?.name}</Text>
      <Text style={{ color: "#6A6A6A" }}>release date: {game.released}</Text>
    </View>
  );
};

export default GameCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 15,
    marginRight: 15,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
  },
  image: {
    width: "100%",
    height: 150,
  },
});
