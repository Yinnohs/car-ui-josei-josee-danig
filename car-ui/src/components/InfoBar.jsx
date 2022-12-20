import React from "react";
import { useState } from "react";
import { PixelRatio, StyleSheet, Text, View } from "react-native";
import { Clock, IconButton } from "../molecules";

export function InfoBar() {
  const [isFanOn, setIsFanOn] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handleFanStatus = () => {
    setIsFanOn(!isFanOn);
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <View style={[styles.flexRow, styles.container, styles.shadow]}>
      <Text style={{ color: "#55F538", fontSize: 25, fontWeight: "800" }}>
        {" "}
        15 ºC
      </Text>
      <View>
        <Text style={{ color: "#FFF", fontSize: 20 }}>
          {isFanOn ? "ON " : "OFF"}
        </Text>
        <IconButton
          iconName={"fan"}
          iconColor={"#FFF"}
          iconSize={32}
          action={() => handleFanStatus()}
        />
      </View>

      <Text style={{ fontSize: 40, color: "#FFF" }}> -- </Text>
      <IconButton
        iconName={isMuted ? "volume-mute" : "volume-high"}
        iconColor={"#5995F4"}
        iconSize={32}
        action={()=> handleMute() }
      />
      <View style={styles.flexRow}>
        <IconButton
          iconName={"map-marker"}
          iconColor={"#5995F4"}
          iconSize={32}
        />
        <IconButton iconName={"cog"} iconColor={"#FFF"} iconSize={32} />
      </View>
      <Clock textColor={"#FFF"} clockSize={25} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: PixelRatio.getPixelSizeForLayoutSize(30),
    backgroundColor: "#111",
    borderBottomWidth: 2.2,
    borderBottomColor: "#55F538",
    alignItems: "center",
    justifyContent: "space-around",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
  text: {
    color: "#FFF",
  },

  shadow: {
    shadowColor: "#51C234",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.2,
    elevation: 15,
  },
});
