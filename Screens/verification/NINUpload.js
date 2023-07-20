import { Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useContext, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import AppStyles from "../../styles/AppStyles";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Image } from "react-native";
import { manipulateAsync } from 'expo-image-manipulator';
import FormsStyles from "../../styles/Forms.styles";
import { AuthContext } from "../../context/AuthContext";
import { StackActions } from "@react-navigation/native";

export default function NINUpload({ navigation }) {
  const { Notify, uploadNIN } = useContext(AuthContext)

  const [NINNumber, setNINNumber] = useState();
  const [uploadFile, setUploadFile] = useState();
  const NINNumberInputRef = useRef()

  const pickFile = async () => {
    // await requestGalleryPermission();

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
        aspect: [4, 2],
        base64: false,
      });

      if (!result.canceled) {
        // // Get correct aspect on ios
        // if (Platform.OS === "ios") {
        //   const manipResult = await manipulateAsync(
        //       result.assets[0].uri,
        //       [{ resize: { width: result.assets[0].width, height: result.assets[0].height * 0.6 } }],
        //       { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG }
        //     );
        // }

        await setUploadFile(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Error picking file:", error);
    }
  };

  const ButtonAction = async () => {
    if (!NINNumber) {
      NINNumberInputRef.current.focus()
      return Notify("Input your NIN Number")
    }

    if (!uploadFile) {
      return Notify("Select an Image")
    }

    await uploadNIN(uploadFile, NINNumber);
    const popAction = StackActions.popToTop();
    return navigation.dispatch(popAction);
  }

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
            NIN Upload
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
      <View style={{ flex: 1, paddingTop: 24 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={true}
          alwaysBounceVertical={true}
          style={{ flex: 1 }}
          contentContainerStyle={{
            gap: 12,
            padding: 24,
            paddingTop: 0,
            flex: 1,
          }}
        >
          {/* phone */}
          <View style={styles.inputConatiner}>
            <TextInput
            ref={NINNumberInputRef}
              placeholder="Your NIN Number"
              placeholderTextColor="black"
              style={styles.placeholderStyle}
              cursorColor="black"
              value={NINNumber}
              onChangeText={(val) => setNINNumber(val)}
              autoComplete="tel"
              keyboardType="phone-pad"
            />
          </View>
          {uploadFile ? (
            <Image
              style={{ width: "100%", height: undefined, aspectRatio: 4/2, borderRadius: 6 }}
              source={{ uri: uploadFile }}
            />
          ) : null}
          <Pressable
            onPress={pickFile}
            style={[
              styles.inputConatiner,
              {
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              },
            ]}
          >
            <Text>Upload NIN Document</Text>
            <Ionicons name="ios-cloud-upload-outline" size={24} color="black" />
          </Pressable>

          {/* send */}
          <TouchableOpacity
            style={[FormsStyles.submitBtn, { marginTop: 10 }]}
            onPress={ButtonAction}
          >
            <Text
              style={[
                FormsStyles.submitBtntxt,
                // { fontFamily: "Poppins_400Regular_Italic" },
              ]}
            >
              Update Profile
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  inputConatiner: {
    height: 50,
    borderColor: "#7472E0",
    borderWidth: 0.5,
    borderRadius: 6,
    paddingHorizontal: 12,
    justifyContent: "center",
  },
  placeholderStyle: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },
});
