import React, { useState, useEffect } from "react";
import { Text } from "react-native";

const ONE_MINUTE = 60_000;

export const Clock = ({textColor}) => {
  const [time, setTime] = useState(new Date());
  const udpateTime = () => {
    setTime(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(udpateTime, ONE_MINUTE);
    return function clean() {
      clearInterval(timerId);
    };
  }, []);

  return <Text style={{color:textColor}}
  >{time.getHours()} : {time.getMinutes()}</Text>;
};

export default Clock.molecule;
