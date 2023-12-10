import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const CarouselItem = ({ game }) => {
  return (
    <View style={{ marginRight: 20 }}>
      <Image style={styles.image} source={{ uri: game.background_image }} />
    </View>
  );
};

export default CarouselItem;

const styles = StyleSheet.create({
  image: {
    width: 330,
    height: 200,
    borderRadius: 25,
  },
});
