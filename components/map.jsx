import { StyleSheet, Image, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

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

export default function Map(props) {
  const { aircraftFollows } = props;
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
    >
      {aircraftFollows
        ? aircraftFollows.map((aircraft) => (
            <Marker
              coordinate={{ latitude: aircraft.lat, longitude: aircraft.lng }}
              title={aircraft.reg_number}
            >
              <Image
                source={require("../assets/markericon.png")}
                style={[
                  styles.mapMarker,
                  { transform: [{ rotate: `${aircraft.dir - 90}deg` }] },
                ]}
              />
            </Marker>
          ))
        : ""}
    </MapView>
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
  mapMarker: {
    height: 30,
    width: 30,
  },
});

<Marker coordinate={{ latitude: 38.71, longitude: 140.46 }} title={"JA743A"}>
  <Image
    source={require("../assets/markericon.png")}
    style={styles.mapMarker}
  />
</Marker>;
