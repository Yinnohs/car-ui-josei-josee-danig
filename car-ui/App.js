import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Clock, IconButton } from "./src/molecules";

export default function App() {
  return (
    <View style={[styles.flexRow,styles.container]}>
      <View style={styles.flexRow}>
        <IconButton iconName={"map"} iconColor={"#5995F4"} iconSize={32} />
        <IconButton iconName={"gear"} iconColor={"#FFF"} iconSize={32} />
      </View>
      <Clock textColor={"#FFF"} clockSize={25} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181216",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  flexRow:{
    display: 'flex',
    flexDirection:'row',
  },
  text: {
    color: "#FFF",
  },
});
