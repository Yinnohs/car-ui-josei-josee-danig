import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import { getWeatherInformation } from "../connection";
import { theme } from "../theme";

export function Weather() {

  const [weatherInfo, setWeatherInfo] = useState({});

  const handleMount = async () => {
    const data = await getWeatherInformation();
    setWeatherInfo(data);
  };

  useEffect(() => {
    handleMount();
  }, []);
  return <Text style={styles.text}>{weatherInfo?.current?.temp_c} ºC</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: theme.textMainSize,
    color: theme.primaryColor,
  },
});
