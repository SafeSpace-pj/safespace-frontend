import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import AppStyles from "../../../styles/AppStyles";
import { Feather, Octicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import TitleCase from "../../../utils/TitleCase";
import { ActivityIndicator } from "react-native";
import { ScrollView } from "react-native";
import { Divider } from "react-native-paper";
import MatchListItemComponents from "../../../components/MatchListItem.components";

export default function Profile() {
  const [userData, setUserData] = useState(null);

  const { getUserData } = useContext(AuthContext);

  useEffect(() => setUserData(getUserData), [getUserData]);

  console.log(userData);

  if (userData === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="small" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* purple top banner */}
      <View
        style={[
          AppStyles.upper,
          {
            justifyContent: "flex-end",
            overflow: "visible",
            marginBottom: 75,
            height: Dimensions.get("window").height * 0.25,
          },
        ]}
      >
        <Text
          style={[
            AppStyles.upperTitle,
            { marginBottom: Dimensions.get("window").height * 0.025 },
          ]}
        >
          Profile
        </Text>
        <View style={styles.profileImage}>
          {userData?._j?.ProfilePicture ? (
            <Image
              style={{ borderRadius: 75, width: "100%", height: "100%" }}
              source={{ uri: userData._j.ProfilePicture }}
            />
          ) : (
            <View
              style={{
                borderRadius: 75,
                width: "100%",
                height: "100%",
                backgroundColor: "#EEEEF9",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.profileLetter}>
                {(userData?._j?.User?.Fullname).charAt(0)}
              </Text>
            </View>
          )}

          {userData?._j?.Verified3 ? (
            <View
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: 35,
                height: 35,
                borderRadius: 20,
                backgroundColor: "white",
                shadowColor: "rgba(0, 0, 0, 1)",
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 1,
                shadowRadius: 8,
                elevation: 3,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Octicons name="verified" size={26} color="#7472E0" />
            </View>
          ) : null}
        </View>
      </View>
      <View style={{ alignItems: "center", padding: 20, paddingBottom: 0 }}>
        <Text style={[AppStyles.heading, { fontSize: 16 }]}>
          {TitleCase((userData?._j?.User?.Fullname).trim())}
        </Text>
        <Pressable>
          <Text style={[AppStyles.heading, { fontSize: 12, color: "#7472E0" }]}>
            {userData?._j?.User?.Verified1 === false ? (
              "Email not verified"
            ) : userData?._j?.User?.Verified2 === false ? (
              "Profile not set"
            ) : userData?._j?.User?.Verified3 === true ? (
              <Text>Edit Profile</Text>
            ) : (
              "Preference not set"
            )}
          </Text>
        </Pressable>
      </View>

      {/* body */}
      <ScrollView style={{ flex: 1 }}>
        <View style={AppStyles.body}>
          {/* user profile details */}
          <View style={styles.profileDetailsContainer}>
            <View style={styles.profileDetailItem}>
              <Text style={styles.profileDetailItemLabel}>Email</Text>
              <Text style={styles.profileDetailItemText}>
                {(userData?._j?.User?.Email).trim()}
              </Text>
            </View>
            <Divider style={{ color: "#7472E0" }} />
            <View style={styles.profileDetailItem}>
              <Text style={styles.profileDetailItemLabel}>Location</Text>
              <Text style={styles.profileDetailItemText}>
                {userData?._j?.Other
                  ? (userData?._j?._j?.Other?.State).trim()
                  : "Location not set"}
              </Text>
            </View>
            <Divider style={{ color: "#7472E0" }} />
            <View style={styles.profileDetailItem}>
              <Text style={styles.profileDetailItemLabel}>Phone No</Text>
              <Text style={styles.profileDetailItemText}>
                {userData?._j?.Other
                  ? (userData?._j?._j?.Other?.PhoneNo).trim()
                  : "Phone number not set"}
              </Text>
            </View>
          </View>
          <View style={styles.contactedContainer}>
            <Text style={styles.contactedHeading}>Recently Contacted</Text>
            <View
              style={{
                flex: 1,
                minHeight: 200,
                flexDirection: "column",
                gap: 20,
              }}
            >
              <MatchListItemComponents />
              <MatchListItemComponents />
              <MatchListItemComponents />
              <MatchListItemComponents />
              <MatchListItemComponents />
              <MatchListItemComponents />
              <MatchListItemComponents />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  profileImage: {
    width: 150,
    height: 150,
    marginBottom: -75,
    borderWidth: 4,
    borderColor: "#7472E0",
    borderRadius: 75,
    position: "relative",
  },
  column: {
    flexDirection: "column",
    gap: 22,
    paddingBottom: 24,
  },
  upperText: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    color: "#000000",
  },
  profileLetter: {
    fontFamily: "Poppins_400Regular",
    color: "#7472E0",
    fontSize: 88,
  },
  profileDetailsContainer: {
    borderColor: "#7472E0",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 16,
    flexDirection: "column",
    gap: 12,
    paddingTop: 12,
    paddingBottom: 24,
  },
  profileDetailItem: {
    padding: 12,
    paddingBottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  profileDetailItemLabel: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
  },
  profileDetailItemText: {
    fontFamily: "Poppins_400Regular",
  },
  contactedContainer: {
    paddingVertical: 24,
    gap: 12,
  },
  contactedHeading: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
  },
});
