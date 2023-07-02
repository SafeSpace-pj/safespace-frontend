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
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export default function Settings({ route, navigation }) {
  const { Logout, setSwitch, isLoading, isVisible, uploadFile, userData, getUserData, Notify } = useContext(AuthContext);

  const [isEnabled, setIsEnabled] = useState(isVisible);

  const toggleSwitch = async () => {
    await setSwitch(isVisible);
    setIsEnabled(isVisible)
  };

  const [userDetails, setUserDetails] = useState(userData);

  useEffect(() =>setUserDetails(userData),[isLoading, userData]);

  const requestGalleryPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    if (status !== 'granted') {
      alert('Permission to access the photo library was denied.');
      return;
    }
  };

  if (userDetails === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="small" />
      </View>
    )
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
        await uploadFile(result.assets[0].uri)
        getUserData()
      }
    } catch (error) {
      console.error('Error picking file:', error);
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
          {userDetails?.ProfilePicture ? (
            <Image
              style={{ borderRadius: 75, width: "100%", height: "100%" }}
              source={{ uri: userDetails?.ProfilePicture }}
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
              <Text style={styles.profileLetter}>{(userDetails?.User?.Fullname)?.charAt(0)}</Text>
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
                shadowColor: "rgba(0, 0, 0, 1)",
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 1,
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
        {/* {TitleCase((userDetails?.User?.Fullname).trim())} */}
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
              <EditProfileBanner />

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
                    name={isEnabled === true ? "visibility" : "visibility-off"}
                    size={24}
                    color="#7472E0"
                  />
                  <Text style={styles.upperText}>Visibility</Text>
                </View>

                <Switch
                  trackColor={{ false: "#C0C0C0", true: "#EBEBEB" }}
                  thumbColor={isEnabled === true ? "#7472E0" : "#f4f3f4"}
                  ios_backgroundColor="#C0C0C0"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </Pressable>

              {/* others */}
              <SettingsButton
                iconName="check-circle"
                text="Verify Identity"
                onPress={() => {
                  if (userDetails?.User.Verified1 !== true) {
                    return Notify("Verfiy your email address first!")
                  }
                  else if (userDetails?.User.Verified2 !== true) {
                    return navigation.navigate("VerificationStack", { screen: "Page1" })
                  } else if (userDetails?.User.Verified3 === true) {
                    navigation.navigate("VerificationStack", { screen: "NINUpload" })
                  } else {
                    return Notify("Verfication complete!")
                  }
                }}
              />
              <SettingsButton
                iconName="bell"
                text="Notifications"
                onPress={() => navigation.navigate("Notifications")}
              />
              {/* <SettingsButton
                iconName="activity"
                text="Recent Viewed"
                onPress={() => console.log("Recent Viewed")}
              /> */}
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
          <KYCBannercomponents />
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
    fontSize: 88
  },
});
