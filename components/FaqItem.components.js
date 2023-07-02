import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function FaqItem({ question, answer }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
      <FontAwesome name="book" size={24} color="#7472E0" />
      </View>
      <View style={styles.textConatiner}>
        <Text style={styles.upperText}>{question}</Text>
        <Text style={styles.lowerText}>{answer}</Text>
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
  upperText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
  },
  lowerText: {
    fontFamily: "Poppins_400Regular",
    color: "#000000CC",
    fontSize: 12
  },
});
