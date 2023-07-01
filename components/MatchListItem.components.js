import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image } from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";

export default function MatchListItemComponents({ navigation }) {
  const [data, setData] = useState({
    cell: "687-685-697",
    dob: { age: 25, date: "1998-02-09T08:26:10.657Z" },
    email: "noelia.herrero@example.com",
    gender: "female",
    id: { name: "DNI", value: "19021255-C" },
    location: {
      city: "Asokoro",
      coordinates: { latitude: "-32.1184", longitude: "148.5367" },
      country: "Nigeria",
      postcode: 87375,
      state: "Abuja",
      street: { name: "Avenida de Castilla", number: 3284 },
      timezone: {
        description: "Western Europe Time, London, Lisbon, Casablanca",
        offset: "0:00",
      },
    },
    login: {
      md5: "dd95b480609d4441ea6f313e70ecb963",
      password: "1994",
      salt: "J4QX0Rc9",
      sha1: "22a01da3635d684d28eb863f22f72a1325583336",
      sha256:
        "2c7031096d4f2959b1b201ba89970e55eb44651fc319e9da9dad8627aefbdb8d",
      username: "yellowcat840",
      uuid: "b68751c8-d9ea-4cfb-8f0f-2dff5821116c",
    },
    name: { first: "Noelia", last: "Herrero", title: "Mrs" },
    nat: "ES",
    phone: "951-010-384",
    picture: {
      large: "https://randomuser.me/api/portraits/women/34.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/34.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/34.jpg",
    },
    registered: { age: 1, date: "2021-07-11T03:57:54.351Z" },
  });

  if (data === null) {
    return <Text>Loading...</Text>;
  }

  return (
    <Pressable
      onPress={() => navigation.navigate("Description", { data: data })}
      style={styles.container}
    >
      <Image style={styles.image} source={{ uri: data.picture.large }} />
      <View style={styles.column}>
        <Text style={styles.nameText}>
          {data.name.first} {data.name.last}
        </Text>
        <Text style={styles.text}>
          ₦ 80,000 / <Text style={styles.textInner}>per year</Text>
        </Text>
        <View style={styles.rowContainer}>
          <View style={styles.row}>
            <Ionicons name="location-sharp" size={14} color="#7472E0" />
            <Text style={styles.rowText}>
              {data.location.city}, {data.location.state}
            </Text>
          </View>
          <View style={styles.row}>
            <Entypo name="dot-single" size={24} color="#2DD35C" />
            <Text style={styles.rowText}>
              Available
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
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 2,
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
    alignItems: "center"
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
