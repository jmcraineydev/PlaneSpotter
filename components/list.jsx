import { useEffect, useState } from "react";
import axios from "axios";
import { StyleSheet, Image, Text, View, FlatList } from "react-native";

export default function List(props) {
  const { userInfo, hasSignedIn } = props;
  //STATE
  const [planeList, setPlaneList] = useState([]);

  //USEEFFECT
  useEffect(() => {
    if (userInfo.email) {
      getPlaneList(userInfo.email);
    }
  }, []);

  //HANDLER
  const getPlaneList = async (email) => {
    await axios
      .get(`${process.env.REACT_APP_API_PATH}follows/${email}`)
      .then((res) => {
        console.log(res.data);
        setPlaneList(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  //RENDER

  return (
    <View style={styles.container}>
      {/* <Text>Your Planes: </Text> */}
      {planeList ? (
        <FlatList
          data={planeList}
          renderItem={({ item }) => (
            <View style={styles.listItemContainer}>
              <View style={styles.listItemHeader}>
                <Text style={styles.aircraftNumber}>
                  {item.airline_iata}: {item.reg_number}
                </Text>
                <Text style={styles.airportText}>{item.status}</Text>
              </View>
              <View style={styles.airportBar}>
                <Text style={styles.airportText}>{item.dep_iata}</Text>
                <Image
                  source={require(`../assets/airplane_straight_track.png`)}
                  style={styles.listGraphic}
                />
                <Text style={styles.airportText}>{item.arr_iata}</Text>
              </View>
              <View style={styles.flightInfoContainer}>
                <Text style={styles.flightInfo}>ALT: {item.alt}</Text>
                <Text style={styles.flightInfo}>SPEED: {item.speed}</Text>
                <Text style={styles.flightInfo}>HEADING: {item.dir}</Text>
                <Text style={styles.flightInfo}>
                  VERT SPEED: {item.v_speed}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.reg_number}
        />
      ) : (
        <Text>Your List is loading ...</Text>
      )}
    </View>
  );
}

//STYLE

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
  aircraftNumber: {
    fontWeight: "700",
    fontSize: 20,
  },

  airportBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  airportText: {
    fontWeight: "500",
    fontSize: 18,
    marginHorizontal: 20,
  },
  flightInfo: {
    marginVertical: 1,
    width: "50%",
  },
  flightInfoContainer: {
    width: "80%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  listGraphic: {
    width: 200,
    resizeMode: "contain",
  },
  listItemContainer: {
    borderColor: "grey",
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
  },
  listItemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
