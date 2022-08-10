import { StyleSheet, Image, Text, View } from "react-native";

export default function Map() {
  return (
    <View style={styles.container}>
      <Text>MAP Container</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 450,
    paddingTop: 25,
    height: 25,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
