import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import useGenres from "../hooks/useGenres";

const CategoriesTab = () => {
  const { genres, loading } = useGenres();

  return (
    <View style={{ marginVertical: 15 }}>
      <Text style={styles.title}>Categories</Text>

      <FlatList
        style={{ marginVertical: 15 }}
        data={genres}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              backgroundColor: "#3669C9",
              borderRadius: 20,
              paddingHorizontal: 16,
              paddingVertical: 8,
              marginRight: 8,
            }}
          >
            <Text style={{ color: "#FFF", fontWeight: "500" }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  );
};

export default CategoriesTab;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
