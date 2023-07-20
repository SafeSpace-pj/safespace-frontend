import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

export default function NotificationsItem(props) {

  const { Body, Status, Title, onPress } = props

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={{ position: "relative" }}>
          <Feather name="bell" size={24} color="#7472E0" />
          {Status === false && <View style={styles.unread} />}
        </View>
      </View>
      <View style={styles.textConatiner}>
        <Text style={styles.lowerText}>
          {Body}
        </Text>
      </View>
    </Pressable>
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
    alignItems: "center"
  },
  iconContainer: {
    backgroundColor: "#7472E033",
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    position: "relative",
  },
  textConatiner: {
    // gap: 8,
    flex: 1,
  },
  lowerText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: "#000000CC",
  },
  unread: {
    backgroundColor: "red",
    width: 6,
    height: 6,
    borderRadius: 5,
    position: "absolute",
    top: 3,
    right: 3,
  },
});
