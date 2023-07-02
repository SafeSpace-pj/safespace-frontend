import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Checkbox } from "react-native-paper";

export default function VerificationCheckboxElement({
  value,
  setValue,
  heading,
  paragraphs,
}) {

  return (
    <View style={{ padding: 24, backgroundColor: "#7472E01A", borderRadius: 8 }}>
      <Text style={{ color: "#7472E0", fontFamily: "Poppins_500Medium", fontSize: 15 }}>{heading}</Text>
      <Text style={{ color: "#00000080", fontFamily: "Poppins_400Regular", fontSize: 12 }}>{paragraphs}</Text>
      <View style={styles.row}>
        <Checkbox
          status={value === true ? "checked" : "unchecked"}
          onPress={() => setValue(true)}
          uncheckedColor="#E4E4E4"
          color="#6979F8"
        />
        <Text style={styles.rowText}>Yes</Text>
      </View>
      <View style={styles.row}>
        <Checkbox
          status={value === false ? "checked" : "unchecked"}
          onPress={() => setValue(false)}
          uncheckedColor="#E4E4E4"
          color="#6979F8"
        />
        <Text  style={styles.rowText}>No</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 4, 
        gap: 4,
    },
    rowText: {
        fontFamily: "Poppins_400Regular",
    },
});
