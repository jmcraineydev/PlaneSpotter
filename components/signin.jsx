import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import Logo from "../assets/planeiconnobg.png";

export default function SignIn() {
  //STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  //USEEFFECTS

  //HANDLERS
  const handleRegister = () => {
    //const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((err) => alert(err.message));
  };
  const handleSignIn = () => {
    //const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((err) => alert(err.message));
  };

  //RENDER
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View>
        <Image style={styles.logo} source={Logo} />
        <Text style={styles.banner_text}>PlaneSpotter</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={(text) => {
              setUsername(text);
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
            secureTextEntry
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSignIn} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleRegister}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

//STYLE

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0021CC",
    alignItems: "center",
    //justifyContent: "flex-start",
  },
  banner_text: {
    color: "white",
    fontSize: 40,
    fontStyle: "italic",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 25,
  },
  // inputContainer: {
  //   width: "80%",
  // },
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
});
