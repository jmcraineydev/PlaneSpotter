import { StyleSheet, Image, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  mapMarker: {
    height: 30,
    width: 30,
  },
});
