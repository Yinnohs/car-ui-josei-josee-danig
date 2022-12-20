import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Clock, IconButton } from "./src/molecules";

export default function App() {
  const [isFanOn, setISFanOn] = useState(false)
  return (
    <View style={[styles.flexRow,styles.container]}>
      <Text style={{color:'#55F538', fontSize:25}} > 15 ºC</Text>
      <View>
        <Text style={{color:'#FFF', fontSize:20}}>{isFanOn ? "ON": "OFF"}</Text>
        <IconButton iconName={"fan"} iconColor={"#FFF"} iconSize={32} />
      </View>
      
      <Text style ={{fontSize:40, color: '#FFF'}}>--</Text>
      <IconButton iconName={"volume-high"} iconColor={"#5995F4"} iconSize={32} />
      <View style={styles.flexRow}>
        <IconButton iconName={"map-marker"} iconColor={"#5995F4"} iconSize={32} />
        <IconButton iconName={"cog"} iconColor={"#FFF"} iconSize={32} />
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
