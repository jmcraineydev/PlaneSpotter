import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import { signOut } from "@firebase/auth";
import { auth } from "./firebase";

import Banner from "./components/banner";
import Map from "./components/map";
import List from "./components/list";
import SignIn from "./components/signin";

export default function App() {
  //STATES
  const [hasSignedIn, setHasSignedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  //USEEFFECTS
  useEffect(() => {
    if (userInfo.email) {
      setHasSignedIn(true);
    }
  }, [userInfo]);

  //HANDLERS
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setHasSignedIn(false);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <SafeAreaView style={styles.container}>
      {!hasSignedIn ? (
        <SignIn setUserInfo={setUserInfo} />
      ) : (
        <View>
          {/* <Banner /> */}
          <Map />
          <List />
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleSignOut} style={styles.button}>
              <Text>Sign Out</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
              <Text>Add Plane</Text>
            </TouchableOpacity>
          </View>
          <StatusBar style="auto" />
        </View>
      )}
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 25,
  },
  button: {
    backgroundColor: "#03f0fc",
    width: 100,
    padding: 15,
    borderRadius: "50%",
    alignItems: "center",
  },
});
