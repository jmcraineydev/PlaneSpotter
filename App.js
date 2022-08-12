import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { signOUt } from "@firebase/auth";
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

  return (
    <SafeAreaView style={styles.container}>
      {!hasSignedIn ? (
        <SignIn setUserInfo={setUserInfo} />
      ) : (
        <View>
          {/* <Banner /> */}
          <Map />
          <List />
          <Text>This is a place holder for text</Text>
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
});
