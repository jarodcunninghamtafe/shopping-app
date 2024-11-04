import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ShopViewScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Shop View Screen</Text>
      <Button
        title="View Product"
        onPress={() => {
          props.navigation.navigate("ProductViewScreen");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
