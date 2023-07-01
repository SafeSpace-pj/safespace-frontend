import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import AppStyles from "../../styles/AppStyles";
import { StatusBar } from "expo-status-bar";
import KYCBannercomponents from "../../components/KYCBanner.components";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { Divider } from "react-native-paper";
// import { ScrollView } from "react-native-gesture-handler";

export default function Description({ route, navigation }) {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* purple top banner */}
      <View style={AppStyles.upperBanner}>
        <ImageBackground
          style={AppStyles.upperBannerImage}
          source={{ uri: data.picture.large }}
        >
          <SafeAreaView style={{ padding: 12 }}>
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons
                name="ios-chevron-back-outline"
                size={24}
                color="#ffffff"
              />
            </Pressable>
          </SafeAreaView>
        </ImageBackground>
      </View>

      <ScrollView
        alwaysBounceVertical={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
        style={AppStyles.minusBody}
      >
        <KYCBannercomponents containerStyle={{ marginBottom: 10 }} navigator={() => navigation.navigate("Search")} />

        <Text style={styles.nameText}>
          {data.name.first} {data.name.last}
        </Text>

        <Text style={[styles.text, { marginVertical: 12 }]}>
          ₦ 80,000 / <Text style={styles.textInner}>per year</Text>
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <View style={styles.row}>
            <Ionicons name="location-sharp" size={14} color="#7472E0" />
            <Text style={styles.rowText}>
              {data.location.city}, {data.location.state}
            </Text>
          </View>
          <View style={styles.row}>
            <Entypo name="dot-single" size={24} color="#7472E0" />
            <Text style={styles.rowText}>Anually</Text>
          </View>
          <View style={styles.row}>
            <Entypo name="dot-single" size={24} color="#7472E0" />
            <Text style={styles.rowText}>50/50 split</Text>
          </View>
        </View>

        <Divider style={{ marginVertical: 24 }} />

        <View>
          <View style={styles.subGroup}>
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.subText}>
              1 big hall room for rent at lalitpur, ktm with the facilities of
              bike parking and tap water . it offers 1 bedroom,and a 1 common
              bathroom for whole flat. It is suitable for student only. Price is
              negotiable for student only.
            </Text>
          </View>
          <View style={styles.subGroup}>
            <Text style={styles.subHeading}>Priority match</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              <View style={styles.row}>
                <Ionicons name="md-checkmark" size={24} color="#7472E0" />
                <Text style={styles.rowText}>Male</Text>
              </View>
              <View style={styles.row}>
                <Ionicons name="md-checkmark" size={24} color="#7472E0" />
                <Text style={styles.rowText}>2 Bedroom apartment</Text>
              </View>
              <View style={styles.row}>
                <Ionicons name="md-checkmark" size={24} color="#7472E0" />
                <Text style={styles.rowText}>Employed</Text>
              </View>
            </View>
          </View>

          <Pressable style={AppStyles.contactButton}>
              <Text style={AppStyles.contactButtonText}>Contact now</Text>
            </Pressable>
          <View
            style={{
              height: 36,
              width: "100%",
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD",
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
  row: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
  rowText: {
    fontSize: 12,
    color: "#00000080",
    fontFamily: "Poppins_400Regular",
    minWidth: "35%",
  },
  subGroup: {
    marginBottom: 24,
  },
  subHeading: {
    marginBottom: 4,
    fontSize: 15,
    fontFamily: "Poppins_500Medium",
  },
  subText: {
    fontFamily: "Poppins_400Regular",
    color: "#00000080",
    fontSize: 12
  },
});
