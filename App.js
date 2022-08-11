import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Banner from "./components/banner";
import Map from "./components/map";
import List from "./components/list";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Banner />
      <Map />
      <List />
      <Text>This is a place holder for text</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
