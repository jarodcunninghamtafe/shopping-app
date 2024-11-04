import React from "react";
import { Surface, Text, Switch } from "react-native-paper";
import { StyleSheet } from "react-native";

export default function ProductEditScreen(props) {
  return (
    <Surface style={styles.container}>
      <Text variant="displaySmall" style={styles.title}>
        Product Edit View
      </Text>
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
