import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather, MaterialIcons } from "@expo/vector-icons";

export default function SettingsButton({
  onPress,
  iconName,
  text,
  iconComponent,
  contentContainerStyle
}) {
  return (
    <Pressable
      style={[{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 4,
      }, contentContainerStyle]}
      onPress={onPress}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 14 }}>
        {iconComponent ? (
          iconComponent
        ) : (
          <Feather name={iconName} size={24} color="#7472E0" />
        )}
        <Text style={styles.upperText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  upperText: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    color: "#000000",
  },
});
