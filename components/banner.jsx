import { StyleSheet, Image, Text, View } from "react-native";

export default function Banner() {
  return (
    <View style={styles.container}>
      <Text style={styles.banner_text}>PlaneSpotter</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 450,
    paddingTop: 25,
    height: 25,
    backgroundColor: "#0021CC",
    alignItems: "center",
    justifyContent: "center",
  },
  banner_text: {
    color: "white",
    fontSize: 40,
    fontStyle: "italic",
  },
  logo: {
    width: 25,
    height: 25,
  },
});
