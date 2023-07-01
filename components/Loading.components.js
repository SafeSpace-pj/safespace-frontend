import { Animated, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ActivityIndicator } from "react-native-paper";
// import Animated from 'react-native-reanimated';

export default function LoadingComponents({ children }) {
  const { isLoading } = useContext(AuthContext);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (isLoading === true) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [isLoading, fadeAnim]);

  return (
    <>
      {children}
      <Animated.View pointerEvents={isLoading === true ? "auto" : "none"} style={[styles.overlay, { opacity: fadeAnim }]}>
        <ActivityIndicator
          animating={isLoading === true}
          size="large"
          color="#7472E0"
        />
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    flex: 1,
    zIndex: 10,
    backgroundColor: "#000000A1",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
