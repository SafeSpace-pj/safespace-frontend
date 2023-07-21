import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image } from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import TitleCase from "../utils/TitleCase";
import formatNumberWithCommas from "../utils/formatNumberWithCommas";

export default function MatchListItemComponents({
  navigation,
  containerStyle,
  data,
}) {
  
  if (data === null) {
    return <Text>Loading...</Text>;
  }

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Description", { data: data?.User?._id })
      }
      style={[styles.container, containerStyle]}
    >
      <Image style={styles.image} source={{ uri: data?.Profile }} />
      <View style={styles.column}>
        <Text style={styles.nameText}>
          {data?.User?.Fullname ? TitleCase(data?.User?.Fullname) : null}
        </Text>
        <Text style={styles.text}>
          ₦ {data?.OtherDetails?.RentBudget ? formatNumberWithCommas(data?.OtherDetails?.RentBudget) : null} / <Text style={styles.textInner}>per year</Text>
        </Text>
        <View style={styles.rowContainer}>
          <View style={styles.row}>
            <Ionicons name="location-sharp" size={14} color="#7472E0" />
            <Text style={styles.rowText}>Asokoro, Abuja</Text>
          </View>
          <View style={styles.row}>
            <Entypo
              name="dot-single"
              size={24}
              color={data?.User?.Visible ? "#2DD35C" : "#FD3131"}
            />
            <Text style={styles.rowText}>
              {data?.User?.Visible ? "Available" : "Unvailable"}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderColor: "#7472E0",
    borderWidth: 0.5,
    padding: 12,
    borderRadius: 8,
    flexDirection: "row",
    gap: 12,
  },
  image: {
    width: "25%",
    height: "100%",
    borderRadius: 6,
    minHeight: 85,
  },
  column: {
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
  },
  nameText: {
    color: "#000000B2",
    fontFamily: "Poppins_500Medium",
    fontSize: 18,
  },
  text: {
    color: "#7472E0",
    fontSize: 15,
    fontFamily: "Poppins_500Medium",
  },
  textInner: {
    color: "#4D4D4D",
    fontSize: 14,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
  rowText: {
    fontSize: 12,
    color: "#00000080",
    fontFamily: "Poppins_400Regular",
  },
});
