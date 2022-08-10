import { StyleSheet, Image, Text, View } from "react-native";

export default function Map() {
  return (
    <View style={styles.container}>
      <Text>Your Planes: </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 450,
    paddingTop: 1,
    height: 1,
    backgroundColor: "#FFFFFF",
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
