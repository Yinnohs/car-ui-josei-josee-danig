import React from "react";
import { useState } from "react";
import { PixelRatio, StyleSheet, Text, View } from "react-native";
import { Clock, IconButton, Weather } from "../molecules";
import { theme } from "../theme";


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
      <Weather/>
      <View>
        <Text style={{ color: theme.textColor, fontSize: 20 }}>
          {isFanOn ? "ON " : "OFF"}
        </Text>
        {/* TODO: FIX: ADD MONOSPACED FONT */}
        <IconButton
          iconName={"fan"}
          iconColor={theme.textColor}
          iconSize={theme.iconSize}
          action={() => handleFanStatus()}
        />
      </View>

      <Text style={{ fontSize: 40, color: theme.textColor }}> -- </Text>
      <IconButton
        iconName={isMuted ? "volume-mute" : "volume-high"}
        iconColor={theme.secondaryColor}
        iconSize={theme.iconSize}
        action={() => handleMute()}
      />
      <View style={styles.flexRow}>
        <IconButton
          iconName={"map-marker"}
          iconColor={theme.secondaryColor}
          iconSize={theme.iconSize}
        />
        <IconButton iconName={"cog"} iconColor={theme.textColor} iconSize={theme.iconSize} />
      </View>
      <Clock textColor={theme.primaryColor} clockSize={theme.textMainSize} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top:0,
    left:0,
    width: "100%",
    height: PixelRatio.getPixelSizeForLayoutSize(30),
    backgroundColor: theme.backGroundHeaderColor,
    borderBottomWidth: 2.2,
    borderBottomColor: theme.primaryColor,
    alignItems: "center",
    justifyContent: "space-around",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
  text: {
    color: theme.textColor,
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
  temperature: {
    color: theme.primaryColor,
    fontSize: theme.textMainSize,
    fontWeight: "800"
  },
});
