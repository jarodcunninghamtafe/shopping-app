import React from "react";
import { Surface, Text, Switch } from "react-native-paper";
import { StyleSheet, Button } from "react-native";

export default function ShopViewScreen(props) {
  return (
    <Surface style={styles.container}>
      <Text variant="displaySmall" style={styles.title}>
        Shop View Screen
      </Text>
      <Button
        title="View Product"
        onPress={() => {
          props.navigation.navigate("ProductViewScreen");
        }}
      />
    </Surface>
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
