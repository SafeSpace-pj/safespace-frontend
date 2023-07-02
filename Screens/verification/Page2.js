import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useState } from "react";
import AppStyles from "../../styles/AppStyles";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import FormsStyles from "../../styles/Forms.styles";
import { AuthContext } from "../../context/AuthContext";
import { StatusBar } from "expo-status-bar";

export default function Page2({ route, navigation }) {
  const { Notify } = useContext(AuthContext);

  const {
    occupation,
    phone,
    stateRecidence,
    bio,
    income,
    budget,
    rentSplit,
    gender,
  } = route.params;

  const [email, setEmail] = useState("")
  const [fullname, setFullname] = useState("")
  const [location, setLocation] = useState("")

  const ButtonAction = () => {
    if (!email || !fullname || !location) {
      return Notify("Fill form acordingly");
    }
    navigation.replace("Page3", {
      occupation: occupation,
      phone: phone,
      stateRecidence: stateRecidence,
      bio: bio,
      income: income,
      budget: budget,
      rentSplit: rentSplit,
      gender: gender,
      email: email,
      fullname: fullname,
      location: location,
    });
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
            Verification
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
        <View style={{ paddingHorizontal: 24 }}>
          <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 15 }}>Your Beneficiary Details</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={true}
          alwaysBounceVertical={true}
          style={{ flex: 1 }}
          contentContainerStyle={{ gap: 12, padding: 24 }}
        >

          {/* beneficiary email address */}
          <View style={styles.inputConatiner}>
            <TextInput
              placeholder="Your beneficiary email address"
              placeholderTextColor="black"
              style={styles.placeholderStyle}
              cursorColor="black"
              value={email}
              onChangeText={(val) => setEmail(val)}
              autoComplete="email"
              keyboardType="email-address"
            />
          </View>

          {/*  beneficiary fullname */}
          <View style={styles.inputConatiner}>
            <TextInput
              placeholder="Your beneficiary fullname"
              placeholderTextColor="black"
              style={styles.placeholderStyle}
              cursorColor="black"
              value={fullname}
              onChangeText={(val) => setFullname(val)}
              autoComplete="name"
              keyboardType="default"
            />
          </View>

          {/*  beneficiary address */}
          <View style={styles.inputConatiner}>
            <TextInput
              placeholder="Your beneficiary address"
              placeholderTextColor="black"
              style={styles.placeholderStyle}
              cursorColor="black"
              value={location}
              onChangeText={(val) => setLocation(val)}
              autoComplete="street-address"
              keyboardType="default"
            />
          </View>

          <View style={{ flex: 1 }} />

          {/* send */}
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
              2/4 NEXT
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

