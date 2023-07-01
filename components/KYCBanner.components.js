import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function KYCBannercomponents({ navigator, containerStyle }) {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.row}>
        <AntDesign name="questioncircleo" size={18} color="#7472E0" />
        <View style={styles.column}>
          <Text style={styles.upperText}>
            results are not accustomed to you
          </Text>
          <Text style={styles.lowerText}>Update recommendation info</Text>
        </View>
      </View>
      <Pressable style={styles.button} onPress={navigator}>
        <Text style={styles.buttonText}>Update</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#7472E01A",
    padding: 18,
    borderRadius: 8,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    gap: 8,
  },
  column: {
    flexDirection: "column",
    gap: 1,
  },
  button: {
    backgroundColor: "#7472E0",
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  upperText: {
    fontSize: 9,
    fontFamily: "Poppins_400Regular",
  },
  lowerText: {
    fontSize: 11,
    fontFamily: "Poppins_400Regular",
  },
  buttonText: {
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
    color: "#FFFFFF",
  },
});
