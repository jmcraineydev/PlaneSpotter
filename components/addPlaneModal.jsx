import React, { useState } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function AddPlaneModal(props) {
  const { userInfo, setShowAddPlaneModal, planeList, setPlaneList } = props;

  //STATE
  const [planeReg, setPlaneReg] = useState("");

  //USEEFFECT

  //HANDLER

  const addNewPlaneFollow = async () => {
    await axios
      .post(`${process.env.REACT_APP_API_PATH}follows`, {
        user_name: `${userInfo.email}`,
        plane_reg: `${planeReg}`,
      })
      .then((res) => {
        res.status === 200
          ? alert(`You are now following: ${planeReg}`)
          : console.log(res);
      })
      .catch((err) => alert(err.message));
    getPlaneList(userInfo.email);
    setShowAddPlaneModal(false);
  };

  const getPlaneList = async (email) => {
    await axios
      .get(`${process.env.REACT_APP_API_PATH}follows/${email}`)
      .then((res) => {
        setPlaneList(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const closeModal = () => {
    setShowAddPlaneModal(false);
  };

  //RENDER

  return (
    <Modal>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Plane Tail Number"
            value={planeReg}
            onChangeText={(text) => {
              setPlaneReg(text);
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={addNewPlaneFollow} style={styles.button}>
            <Text style={styles.buttonText}>Follow This Plane</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={closeModal}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

//STYLE

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0021CC",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 25,
  },
  button: {
    backgroundColor: "#03f0fc",
    width: 250,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#0021CC",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutline: {
    backgroundColor: "#0021CC",
    marginTop: 15,
    borderColor: "#03f0fc",
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: "#03f0fc",
    fontWeight: "700",
    fontSize: 16,
  },
  input: {
    width: 300,
    justifyContent: "center",
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: "white",
  },
});
