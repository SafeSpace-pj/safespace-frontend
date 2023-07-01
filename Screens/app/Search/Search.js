import { Keyboard, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import AppStyles from "../../../styles/AppStyles";
import KYCBannercomponents from "../../../components/KYCBanner.components";
import SearchInputComponent from "../../../components/SearchInput.components";

export default function Search({ route, navigation }) {
  return (
    <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
      <StatusBar style="light" />
      {/* purple top banner */}
      <View style={AppStyles.upper}>
        <Text style={AppStyles.upperTitle}>SafeSpace</Text>
      </View>

      {/* body */}
      <View style={[AppStyles.minusBody, styles.minusBodyExtra]}>
        <View style={AppStyles.formView}>
          <Text style={AppStyles.heading}>Advanced Search</Text>

          {/* form container */}
          <View style={styles.formContainer}>
            <SearchInputComponent iconName="location-sharp" placeHolder="Enter an address or city" />
            <SearchInputComponent iconName="pricetag" placeHolder="Enter a price range" />
            <SearchInputComponent iconName="md-business-outline" placeHolder="Resident Type" />
          </View>

          <Pressable style={AppStyles.contactButton}>
              <Text style={AppStyles.contactButtonText}>Search now</Text>
            </Pressable>
        </View>

        <KYCBannercomponents />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  minusBodyExtra: {
    backgroundColor: "rgba(0,0,0,0)",
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 0,
  },
  subHeading: {
    marginBottom: 4,
    fontSize: 15,
    fontFamily: "Poppins_500Medium",
  },
  formContainer: {
    flexDirection: "column",
    gap: 6,
    paddingVertical: 10,
  }
});
