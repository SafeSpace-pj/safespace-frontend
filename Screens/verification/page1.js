import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import DropdownElement from "../../components/DropdownElement.components";
import AppStyles from "../../styles/AppStyles";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import EditProfileBanner from "../../components/EditProfileBanner.components";
import { TextInput } from "react-native";
import FormsStyles from "../../styles/Forms.styles";
import { TouchableOpacity } from "react-native";
import formatNumberWithCommas from "../../utils/formatNumberWithCommas";
import { AuthContext } from "../../context/AuthContext";
import { StatusBar } from "expo-status-bar";

export default function Page1({ navigation }) {
  const { Notify } = useContext(AuthContext);

  const [occupation, setOccupation] = useState("");
  const [phone, setPhone] = useState("");
  const [stateRecidence, setStateRecidence] = useState("");
  const [bio, setBio] = useState("");
  const [income, setIncome] = useState("");
  const [budget, setBudget] = useState("");
  const [recidence, setRecidence] = useState("");
  const [rentSplit, setRentSplit] = useState("");
  const [gender, setgender] = useState("");
  const [formatedValue, setFormatedValue] = useState("");

  const ButtonAction = () => {
    if (
      !occupation ||
      !phone ||
      !stateRecidence ||
      !bio ||
      !income ||
      !budget ||
      !rentSplit ||
      !gender
    ) {
      return Notify("Fill form acordingly");
    }
    navigation.replace("Page2", {
      occupation: occupation,
      phone: phone,
      stateRecidence: stateRecidence,
      bio: bio,
      income: income,
      budget: budget,
      rentSplit: rentSplit,
      gender: gender,
    });
  };

  // const setBudgetValue = (val) => {
  //   setBudget(val)
  //   // let newVal = parseInt(val).toLocaleString();

  //   // newVal = newVal.toString()

  //   setBudget(val)

  //   let newVal = formatNumberWithCommas(val)

  //   setFormatedValue(newVal)

  //   // if (newVal === "NaN") {
  //   //   console.log("Nan value present");
  //   //   setFormatedValue("")
  //   // } else {
  //   //   setFormatedValue(newVal)
  //   // }
  // }

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
            Edit Profile
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
          contentContainerStyle={{ gap: 12, padding: 24, paddingTop: 0 }}
        >
          <EditProfileBanner contentContainerStyle={{ marginBottom: 12 }} />

          {/* phone */}
          <View style={styles.inputConatiner}>
            <TextInput
              placeholder="Your phone number"
              placeholderTextColor="black"
              style={styles.placeholderStyle}
              cursorColor="black"
              value={phone}
              onChangeText={(val) => setPhone(val)}
              autoComplete="tel"
              keyboardType="phone-pad"
            />
          </View>

          {/* Bio */}
          <View
            style={[
              styles.inputConatiner,
              { height: 120, justifyContent: "flex-start" },
            ]}
          >
            <TextInput
              placeholder="Bio"
              placeholderTextColor="black"
              style={[styles.placeholderStyle, { textAlignVertical: "top", paddingVertical: 10, flex: 1 }]}
              cursorColor="black"
              value={bio}
              onChangeText={(val) => setBio(val)}
              multiline
              numberOfLines={8}
            />
          </View>

          {/* occupation */}
          <DropdownElement
            data={[
              { label: "Self Employed", value: "Self Employed" },
              { label: "9 - 5 job", value: "9 - 5 job" },
              { label: "Student", value: "Student" },
            ]}
            name="Occupation"
            setValue={(val) => setOccupation(val)}
            value={occupation}
          />

          {/* State dropdown */}
          <DropdownElement
            data={[
              { label: "Abia", value: "Abia" },
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
            name="State of residence"
            setValue={(val) => setStateRecidence(val)}
            value={stateRecidence}
          />

          {/* monthly income */}
          <DropdownElement
            data={[
              { label: "5k - 10k", value: "5k - 10k" },
              { label: "10k - 20k", value: "10k - 20k" },
              { label: "20k - 50k", value: "20k - 50k" },
              { label: "100k - 200k", value: "100k - 200k" },
              { label: "200k - 300k", value: "200k - 300k" },
              { label: "300k - upwards", value: "300k - upwards" },
            ]}
            name="Monthly income"
            setValue={(val) => setIncome(val)}
            value={income}
          />

          {/* rent budget */}
          <View style={styles.inputConatiner}>
            <TextInput
              placeholder="Rent budget"
              placeholderTextColor="black"
              style={styles.placeholderStyle}
              cursorColor="black"
              value={budget}
              onChangeText={(val) => setBudget(val.toString())}
              keyboardType="number-pad"
              maxLength={13}
            />
          </View>

          {/* Residence type */}
          <DropdownElement
            data={[
              { label: "Annually", value: "Annually" },
              { label: "3 months", value: "3 months" },
              { label: "6 months", value: "6 months" },
              { label: "9 months", value: "9 months" },
            ]}
            name="Residence type"
            setValue={(val) => setRecidence(val)}
            value={recidence}
          />

          {/* Rent split */}
          <DropdownElement
            data={[
              { label: "50/50 split", value: "50/50 split" },
              { label: "40/60 split", value: "40/60 split" },
              { label: "30/70 split", value: "30/70 split" },
              { label: "80/20 split", value: "80/20 split" },
            ]}
            name="Rent split"
            setValue={(val) => setRentSplit(val)}
            value={rentSplit}
          />

          {/* Gender type */}
          <DropdownElement
            data={[
              { label: "Male", value: "Male" },
              { label: "Female", value: "Female" },
            ]}
            name="Gender"
            setValue={(val) => setgender(val)}
            value={gender}
          />

          <TouchableOpacity
            style={[FormsStyles.submitBtn, { marginTop: 10 }]}
            onPress={ButtonAction}
          >
            <Text
              style={[
                FormsStyles.submitBtntxt,
                { fontFamily: "Poppins_400Regular_Italic" },
              ]}
            >
              1/4 NEXT
            </Text>
          </TouchableOpacity>

          <KeyboardAvoidingView />
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
