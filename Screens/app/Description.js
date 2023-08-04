import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import AppStyles from "../../styles/AppStyles";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { Divider } from "react-native-paper";
import { ActivityIndicator } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";
import axios from "axios";
import formatNumberWithCommas from "../../utils/formatNumberWithCommas";
import TitleCase from "../../utils/TitleCase";

export default function Description({ route, navigation }) {
  const { data } = route.params;
  const [DataLoading, setDataLoading] = useState(true);
  const { userToken, Notify, Contact, userData, isLoading, setLoading } = useContext(AuthContext);

  const [descriptorDetails, setDescriptorDetails] = useState({});

  useEffect(() => {
    async function getData() {
      setDataLoading(true);

      let config = {
        headers: {
          Authorization: userToken,
        },
      };

      await axios
        .get(`${BASE_URL}/users/other?ref=${data}`, config)
        .then((res) => {
          if (res.data.Access === true && res.data.Error === false) {
            setDescriptorDetails(res.data.Data);
            setDataLoading(false);
          }
        })
        .catch((err) => console.error(err));

      setDataLoading(false);
    }

    getData();
  }, []);

  const HandleContact = async () => {
    if (!userData?.User?.Verified3) {
      return Notify("Action not allowed, Verify your account to continue!");
    }

    if (descriptorDetails?.Contacted === true) {
      return Notify("User contacted previously");
    }
    await Contact(descriptorDetails?.User?._id);
  };

  if (DataLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <StatusBar style="dark" />
        <ActivityIndicator color="#7472E0" size="small" />
      </View>
    );
  }

  if (!descriptorDetails?.User) {
    return (
      <View style={styles.container}>
        <StatusBar style="light" />
        <View
          style={[
            AppStyles.upper,
            {
              paddingHorizontal: 24,
              alignItems: "flex-end",
              height: "14%",
            },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons
                name="ios-chevron-back-outline"
                size={24}
                color="#ffffff"
              />
            </Pressable>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                color: "white",
                fontSize: 22,
              }}
            >
              User Match
            </Text>
            <Ionicons
              name="ios-chevron-back-outline"
              size={24}
              color="#ffffff"
              style={{ opacity: 0 }}
            />
          </View>
        </View>

        {/* body */}
        <View
          style={{
            flex: 1,
            padding: 24,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 18 }}>
            User Unvailable
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 12,
              color: "#00000080",
            }}
          >
            Unfortunately this user isn't available
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar
        style="inverted"
        //  backgroundColor="#000000A1"
      />
      {/* purple top banner */}
      <View style={AppStyles.upperBanner}>
        <ImageBackground
          style={AppStyles.upperBannerImage}
          source={{ uri: descriptorDetails?.ProfilePicture }}
        >
          <SafeAreaView style={{ padding: 12, paddingTop: 22 }}>
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons
                name="ios-chevron-back-outline"
                size={24}
                color="#7472E0"
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
        <Text style={styles.nameText}>
          {TitleCase(descriptorDetails?.User?.Fullname)}
        </Text>

        <Text style={[styles.text, { marginVertical: 12 }]}>
          {formatNumberWithCommas(descriptorDetails?.OtherDetails?.RentBudget)}{" "}
          /{" "}
          <Text style={styles.textInner}>
            {descriptorDetails?.OtherDetails?.ResidenceType}
          </Text>
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
            <Ionicons name="location-sharp" size={14} style={{ marginHorizontal: 7 }} color="#7472E0" />
            <Text style={styles.rowText}>
              {descriptorDetails?.OtherDetails?.State}
            </Text>
          </View>
          <View style={styles.row}>
            <Entypo name="dot-single" size={24} color="#7472E0" />
            <Text style={styles.rowText}>
              {descriptorDetails?.OtherDetails?.ResidenceType}
            </Text>
          </View>
          <View style={styles.row}>
            <Entypo name="dot-single" size={24} color="#7472E0" />
            <Text style={styles.rowText}>
              {descriptorDetails?.OtherDetails?.RentSplit}
            </Text>
          </View>
        </View>

        <Divider style={{ marginVertical: 24 }} />

        <View>
          <View style={styles.subGroup}>
            <Text style={styles.subHeading}>Description</Text>
            <Text style={styles.subText}>
              {descriptorDetails?.OtherDetails?.Bio}
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
                <Text style={styles.rowText}>
                  {descriptorDetails?.OtherDetails?.Gender}
                </Text>
              </View>
              <View style={styles.row}>
                <Ionicons name="md-checkmark" size={24} color="#7472E0" />
                <Text style={styles.rowText}>
                  Earns {descriptorDetails?.OtherDetails?.IncomeMonthly}
                </Text>
              </View>
              <View style={styles.row}>
                <Ionicons name="md-checkmark" size={24} color="#7472E0" />
                <Text style={styles.rowText}>
                  {descriptorDetails?.OtherDetails?.Occupation}
                </Text>
              </View>
            </View>
          </View>

          <Pressable onPress={HandleContact} style={AppStyles.contactButton}>
            <Text
              style={[
                AppStyles.contactButtonText,
                descriptorDetails?.Contacted === true ? { opacity: 0.5 } : null,
              ]}
            >
              {descriptorDetails?.Contacted === true
                ? "Contacted"
                : "Contact now"}
            </Text>
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
    fontSize: 12,
  },
});
