import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import AppStyles from "../../../styles/AppStyles";
import { Entypo, Feather, MaterialIcons } from "@expo/vector-icons";
import { ActivityIndicator, Divider, Switch } from "react-native-paper";
import EditProfileBanner from "../../../components/EditProfileBanner.components";
import KYCBannercomponents from "../../../components/KYCBanner.components";
import SettingsButton from "../../../components/SettingsButton.components";
import { AuthContext } from "../../../context/AuthContext";
import TitleCase from "../../../utils/TitleCase";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

export default function Settings({ route, navigation }) {
  const {
    Logout,
    setSwitch,
    isLoading,
    isVisible,
    uploadFile,
    userData,
    getUserData,
    Notify,
  } = useContext(AuthContext);

  const toggleSwitch = async () => {
    await setSwitch(!userData?.User?.Visible);
    getUserData();
  };

  useEffect(() => {
    getUserData();
  }, []);

  const requestGalleryPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    if (status !== "granted") {
      alert("Permission to access the photo library was denied.");
      return;
    }
  };

  if (userData === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="small" />
      </View>
    );
  }

  const pickFile = async () => {
    // await requestGalleryPermission();

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
        aspect: [4, 4],
        base64: false,
      });

      if (!result.canceled) {
        // Upload the selected file
        await uploadFile(result.assets[0].uri);
        getUserData();
      }
    } catch (error) {
      console.error("Error picking file:", error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* purple top banner */}
      <View
        style={[
          AppStyles.upper,
          { justifyContent: "flex-end", overflow: "visible", marginBottom: 75 },
        ]}
      >
        <View style={styles.profileImage}>
          {userData?.ProfilePicture ? (
            <Image
              style={{ borderRadius: 75, width: "100%", height: "100%" }}
              source={{ uri: userData?.ProfilePicture }}
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
                {userData?.User?.Fullname?.charAt(0)}
              </Text>
            </View>
          )}

          <Pressable
            onPress={pickFile}
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: 35,
              height: 35,
              borderRadius: 20,
              backgroundColor: "white",
              shadowColor: "#7472E0",
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: .4,
              shadowRadius: 8,
              elevation: 3,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Entypo name="plus" size={24} color="black" />
          </Pressable>
        </View>
      </View>
      <View style={{ alignItems: "center", padding: 20, paddingBottom: 0 }}>
        <Text style={[AppStyles.heading, { fontSize: 16 }]}>
          {/* {TitleCase((userData?.User?.Fullname).trim())} */}
        </Text>
        <Pressable onPress={() => navigation.navigate("Profile")}>
          <Text style={[AppStyles.heading, { fontSize: 12, color: "#7472E0" }]}>
            View Profile
          </Text>
        </Pressable>
      </View>

      <Divider style={{ marginBottom: 20, marginTop: 30 }} />

      <ScrollView>
        <View
          alwaysBounceVertical={true}
          bounces={true}
          contentContainerStyle={{ flex: 1, justifyContent: "space-between" }}
          style={AppStyles.body}
        >
          <View>
            <View style={styles.column}>
            {userData?.User.Verified2 !== true ? <EditProfileBanner /> : null}

              {/* user visibility */}
              <Pressable
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  <MaterialIcons
                    name={
                      userData?.User?.Visible === true
                        ? "visibility"
                        : "visibility-off"
                    }
                    size={24}
                    color="#7472E0"
                  />
                  <Text style={styles.upperText}>Visibility</Text>
                </View>

                <Switch
                  trackColor={{ false: "#C0C0C0", true: "#EBEBEB" }}
                  thumbColor={
                    userData?.User?.Visible === true ? "#7472E0" : "#f4f3f4"
                  }
                  ios_backgroundColor="#C0C0C0"
                  onValueChange={toggleSwitch}
                  value={userData?.User?.Visible}
                />
              </Pressable>

              {/* others */}
              <SettingsButton
                iconName="check-circle"
                text="Verify Identity"
                contentContainerStyle={
                  userData?.User.Verified3 === true ? { opacity: 0.4 } : null
                }
                onPress={() => {
                  if (userData?.User.Verified1 !== true) {
                    return Notify("Verfiy your email address first!");
                  } else if (userData?.User.Verified2 !== true) {
                    return Notify(
                      "Update your recomendation information to continue!"
                    );
                  } else if (userData?.User.Verified3 !== true) {
                    navigation.navigate("VerificationStack", {
                      screen: "NINUpload",
                    });
                  } else {
                    return Notify("Verfication complete!");
                  }
                }}
              />
              <SettingsButton
                iconName="bell"
                text="Notifications"
                onPress={() => navigation.navigate("NotificationsStack", {
                  screen: "Notifications",
                })}
              />
              {userData?.User.Verified2 === true ? (
                <SettingsButton
                  iconName="activity"
                  text="Recomendation Information"
                  onPress={() =>
                    navigation.navigate("VerificationStack", {
                      screen: "Page1",
                    })
                  }
                />
              ) : null}
              <SettingsButton
                iconName="help-circle"
                text="Get Help"
                onPress={() => navigation.navigate("Help")}
              />
              <SettingsButton
                iconName="log-out"
                text="Sign Out"
                onPress={() => Logout()}
              />
            </View>
          </View>

          {/* KYC banner */}
          {userData?.User.Verified2 !== true ? (
            <KYCBannercomponents
              navigator={() =>
                navigation.navigate("VerificationStack", {
                  screen: "Page1",
                })
              }
            />
          ) : null}
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
});
