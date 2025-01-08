import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Audio } from "expo-av";

const App = () => {
  const [sound, setSound] = useState();

  const playSound = async (audio) => {
    const { sound } = await Audio.Sound.createAsync(audio);
    setSound(sound);
    await sound.playAsync();
  };
  const soundList = [
    require("./assets/one.wav"),
    require("./assets/two.wav"),
    require("./assets/three.wav"),
    require("./assets/four.wav"),
    require("./assets/five.wav"),
    require("./assets/six.wav"),
    require("./assets/seven.wav"),
    require("./assets/eight.wav"),
    require("./assets/nine.wav"),
    require("./assets/ten.wav"),
  ];

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.logo} source={require("./assets/logo.png")} />
      <View style={styles.gridContainer}>
        {soundList.map((sound) => {
          return (
            <TouchableOpacity
              key={sound}
              style={styles.box}
              onPress={() => playSound(sound)}
            >
              <Text style={styles.text}>{sound}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b262c",
  },
  logo: {
    alignSelf: "center",
    marginTop: 15,
  },
  gridContainer: {
    flex: 1,
    margin: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
  box: {
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    width: "45%",
    marginVertical: 6,
    backgroundColor: "#0f4c75",
    borderRadius: 5,
    shadowColor: "#393e46",
    elevation: 5,
    shadowRadius: 4,
  },
  text: {
    fontSize: 50,
    color: "#ff4301",
  },
});
