import { StyleSheet, Image, Text, View } from "react-native";
import MapView from "react-native-maps";

// export default class Map extends Component<Props> {
//   render() {
//     return (
//       <MapView
//         style={{ flex: 1 }}
//         region={{
//           latitude: 42.882004,
//           longitude: 74.582748,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//         showsUserLocation={true}
//       />
//     );
//   }
// }

export default function Map() {
  return (
    <MapView
      style={styles.container}
      // region={{
      //   latitude: 42.882004,
      //   longitude: 74.582748,
      //   latitudeDelta: 0.0922,
      //   longitudeDelta: 0.0421,
      // }}
      showsUserLocation={false}
    />
    // <Text>MAP Container</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    // width: 450,
    // paddingTop: 25,
    // height: 25,
    // borderColor: "black",
    // borderWidth: 1,
    // backgroundColor: "#FFFFFF",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
