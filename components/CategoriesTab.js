import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import useGenres from "../hooks/useGenres";

const CategoriesTab = () => {
  const { genres, loading } = useGenres();

  const [active, setActive] = useState("Action");

  return (
    <View style={{ marginTop: 16 }}>
      <Text style={styles.title}>Categories</Text>

      <FlatList
        style={{ marginVertical: 16 }}
        data={genres}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              backgroundColor: active === item.name ? "#3669C9" : "#FFF",
              borderRadius: 20,
              paddingHorizontal: 16,
              paddingVertical: 8,
              marginRight: 8,
            }}
          >
            <Text
              style={{
                color: active === item.name ? "#FFF" : "#000",
                fontWeight: "500",
              }}
            >
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
