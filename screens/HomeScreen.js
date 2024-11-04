import React from "react";
import { StyleSheet } from "react-native";
import { Surface, Text, Switch } from "react-native-paper";

export default function HomeScreen(props) {
  return (
    <Surface style={styles.container}>
      <Text variant="displaySmall" style={styles.title}>
        Home Screen
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
