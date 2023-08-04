import { Keyboard, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import AppStyles from "../../../styles/AppStyles";
import KYCBannercomponents from "../../../components/KYCBanner.components";
import { AuthContext } from "../../../context/AuthContext";
import SearchSelectComponent from "../../../components/SearchSelect.components";
import SearchInputComponent from "../../../components/SearchInput.components";

export default function Search({ route, navigation }) {
  const { userData, Notify } = useContext(AuthContext);

  const [formState, setFormState] = useState();
  const [price, setFormP] = useState();
  const [fortypemData, setFormD] = useState();

  const ButtonAction = async () => {
    if (!formState || !price || !fortypemData) {
      return Notify("Form data required");
    }
    navigation.navigate("SearchDetails", {
      state: formState,
      price: price,
      type: fortypemData,
    });
    setFormState("");
    setFormP("");
    setFormD("");
  };

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
            <SearchSelectComponent
              iconName="location-sharp"
              data={[
                { label: "Abia", value: "Abia" },{ label: "Abuja", value: "Abuja" },
                { label: "Adamawa", value: "Adamawa" },
                { label: "Akwa Ibom", value: "Akwa Ibom" },
                { label: "Anambra", value: "Anambra" },
                { label: "Bauchi", value: "Bauchi" },
                { label: "Bayelsa", value: "Bayelsa" },
                { label: "Benue", value: "Benue" },
                { label: "Borno", value: "Borno" },
                { label: "Cross River", value: "Cross River" },
                { label: "Delta", value: "Delta" },
                { label: "Ebonyi", value: "Ebonyi" },
                { label: "Edo", value: "Edo" },
                { label: "Ekiti", value: "Ekiti" },
                { label: "Enugu", value: "Enugu" },
                { label: "Gombe", value: "Gombe" },
                { label: "Imo", value: "Imo" },
                { label: "Jigawa", value: "Jigawa" },
                { label: "Kaduna", value: "Kaduna" },
                { label: "Kano", value: "Kano" },
                { label: "Katsina", value: "Katsina" },
                { label: "Kebbi", value: "Kebbi" },
                { label: "Kogi", value: "Kogi" },
                { label: "Kwara", value: "Kwara" },
                { label: "Lagos", value: "Lagos" },
                { label: "Nasarawa", value: "Nasarawa" },
                { label: "Niger", value: "Niger" },
                { label: "Ogun", value: "Ogun" },
                { label: "Ondo", value: "Ondo" },
                { label: "Osun", value: "Osun" },
                { label: "Oyo", value: "Oyo" },
                { label: "Plateau", value: "Plateau" },
                { label: "Rivers", value: "Rivers" },
                { label: "Sokoto", value: "Sokoto" },
                { label: "Taraba", value: "Taraba" },
                { label: "Yobe", value: "Yobe" },
                { label: "Zamfara", value: "Zamfara" },
              ]}
              name="Residence location"
              setValue={(val) => setFormState(val)}
              value={formState}
            />
            {/* <SearchSelectComponent
              iconName="pricetag"
              data={[
                { label: "5k - 10k", value: "5k - 10k" },
                { label: "10k - 20k", value: "10k - 20k" },
                { label: "20k - 50k", value: "20k - 50k" },
                { label: "100k - 200k", value: "100k - 200k" },
                { label: "200k - 300k", value: "200k - 300k" },
                { label: "300k - upwards", value: "300k - upwards" },
              ]}
              name="Price Range"
              setValue={(val) =>
                setFormP(val)
              }
              value={price}
            /> */}
            <SearchInputComponent
              onChangeText={(val) => setFormP(val)}
              iconName="md-business-outline"
              placeHolder="Price Range / Budget"
              value={price}
              keyboardType="phone-pad"
            />
            <SearchSelectComponent
              iconName="md-business-outline"
              data={[
                { label: "Self con apt", value: "Self con apt" },
                { label: "1 bedroom apt", value: "1 bedroom apt" },
                { label: "2 bedroom apt", value: "2 bedroom apt" },
                { label: "3 bedroom apt", value: "3 bedroom apt" },
              ]}
              name="Resident Type"
              setValue={(val) => setFormD(val)}
              value={fortypemData}
            />
            {/* <SearchSelectComponent iconName="md-business-outline" placeHolder="Resident Type" /> */}
          </View>

          <Pressable onPress={ButtonAction} style={AppStyles.contactButton}>
            <Text style={AppStyles.contactButtonText}>Search now</Text>
          </Pressable>
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
  },
});
