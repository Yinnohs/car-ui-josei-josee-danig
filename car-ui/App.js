import { StyleSheet, View } from "react-native";
import { InfoBar } from "./src/components";

export default function App() {
  
  return (
    <View style={[styles.flexCol ,styles.container]}>
      <InfoBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181216",
  },
  flexCol:{
    display: 'flex',
  },
  text: {
    color: "#FFF",
  },
});
