import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

export default function NotificationsItem() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Feather name="bell" size={24} color="#7472E0" />
      </View>
    <View style={styles.textConatiner}>
    <Text style={styles.lowerText}>Welcome, Don’t forget to complete your personal info.</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#7472E01A",
    borderWidth: StyleSheet.hairlineWidth,
    padding: 18,
    borderRadius: 12,
    flexDirection: "row",
    gap: 12,
  },
  iconContainer: {
    backgroundColor: "#7472E033",
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  textConatiner: {
    // gap: 8,
    flex: 1,
  },
  lowerText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: "#000000CC"
  },
});
