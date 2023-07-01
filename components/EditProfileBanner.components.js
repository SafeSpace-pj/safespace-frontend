import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function EditProfileBanner({ contentContainerStyle }) {
  return (
    <Pressable style={[styles.container, contentContainerStyle]}>
      <View style={styles.row}>
        <AntDesign name="user" size={18} color="#7472E0" />
        <View style={[styles.column, { gap: 4 }]}>
          <Text style={styles.upperText}>Edit Profile</Text>
          <View style={styles.column}>
            <Text style={styles.lowerText}>
              Edit all the basic profile information and recommendation
              settings. Typically takes 10 minutes
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#7472E01A",
    padding: 18,
    borderRadius: 8,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    gap: 12,
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
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    color: "#7472E0",
  },
  lowerText: {
    fontSize: 11,
    fontFamily: "Poppins_400Regular",
    color: "#000000B7",
  },
  buttonText: {
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
    color: "#FFFFFF",
  },
});
