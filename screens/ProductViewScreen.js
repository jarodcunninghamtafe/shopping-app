import React from "react";
import { Surface, Text, Switch } from "react-native-paper";
import { StyleSheet, Button } from "react-native";

export default function ProductViewScreen(props) {
  return (
    <Surface style={styles.container}>
      <Text variant="displaySmall" style={styles.title}>
        Product View Screen
      </Text>
      <Button
        title="Edit Product"
        onPress={() => {
          props.navigation.navigate("ProductEditScreen");
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
