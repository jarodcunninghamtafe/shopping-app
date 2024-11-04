import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ShopViewScreen from "../screens/ShopViewScreen.js";
import ProductViewScreen from "../screens/ProductViewScreen.js";
import ProductEditScreen from "../screens/ProductEditScreen.js";

const Stack = createStackNavigator();

export default function ShopNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="ShopViewScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ShopViewScreen" component={ShopViewScreen} />
      <Stack.Screen
        name="ProductViewScreen"
        component={ProductViewScreen}
        options={{ title: "View Product" }}
      />
      <Stack.Screen
        name="ProductEditScreen"
        component={ProductEditScreen}
        options={{ title: "Edit Product" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
