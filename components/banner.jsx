import { StyleSheet, Image, Text, View } from "react-native";
import Logo from "../assets/planeiconnobg.png";

export default function Banner() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo} />
      <Text style={styles.banner_text}>PlaneSpotter</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection: "row",
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
    width: 100,
    height: 100,
  },
});
