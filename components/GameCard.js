import { StyleSheet, Text, View, Image } from "react-native";

const GameCard = ({ game }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: game.background_image }} />
      <Text
        style={{
          fontSize: 14,
          textAlign: "center",
          flex: 1,
          fontWeight: "600",
        }}
      >
        {game?.name}
      </Text>
      <Text style={{ color: "#6A6A6A" }}>
        release {game.released.replaceAll("-", "/")}
      </Text>
      <Text style={{ color: "#6A6A6A" }}>{"$79.99"}</Text>
    </View>
  );
};

export default GameCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingBottom: 12,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  image: {
    width: "100%",
    height: 150,
    marginBottom: 5,
  },
});
