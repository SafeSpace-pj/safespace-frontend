import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Divider, RadioButton, TextInput } from "react-native-paper";
import FormsStyles from "../../styles/Forms.styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AntDesign } from "@expo/vector-icons";

export default function Reset({ navigation }) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [Error, setError] = useState(
    "Don’t worry! It happens. Please enter the email associated with your account."
  );

  const checkEmailValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      // console.log(emailRegex.test(formData.email));
      setEmailError(true)
      return setError("Invalid Email, Please enter a valid email.");
    } else {
      setEmailError(false)
      return setError("Don’t worry! It happens. Please enter the email associated with your account.");
    }
  };

  const hangleOnPressed = async () => {
    checkEmailValid()

    navigation.navigate("Otp", { resetEmail: email })
  }

  return (
    <Pressable
      onPress={() => Keyboard.dismiss()}
      style={{ flex: 1, backgroundColor: "white" }}
    >
      <View style={FormsStyles.upper}></View>

      {/* body  */}
      <View style={FormsStyles.body}>
        {/* titles */}
        <View
          style={[
            FormsStyles.uppertexts,
            { marginBottom: 10, marginTop: "-40%" },
          ]}
        >
          <Text style={FormsStyles.upperTitle}>Safe Space</Text>
          <Text style={[FormsStyles.subtitle, { marginBottom: 10 }]}>Ultimate roomate finder</Text>
        </View>

        {/* Form */}
        <View style={FormsStyles.formView}>
          <KeyboardAwareScrollView
            style={{ width: "100%" }}
            showsVerticalScrollIndicator={false}
          >
            <View style={FormsStyles.formText}>
              <Text style={FormsStyles.formTitle}>Forgot password?</Text>
              <Text style={FormsStyles.formsubtext}>{Error}</Text>
            </View>

            {/* input  */}
            <View>
              <TextInput
                error={emailError}
                contentStyle={FormsStyles.input}
                style={{ backgroundColor: "white", marginVertical: 10 }}
                mode="outlined"
                outlineColor="#0000001A"
                label="Email Address"
                autoComplete="email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                onEndEditing={checkEmailValid}
              />

              {/* Reset */}
              <TouchableOpacity
                onPress={hangleOnPressed}
                style={[FormsStyles.submitBtn, { marginTop: 10 }]}
              >
                <Text style={FormsStyles.submitBtntxt}>Reset</Text>
              </TouchableOpacity>

              {/* Reset */}
              <TouchableOpacity
                onPress={() => navigation.pop()}
                style={[FormsStyles.submitBtn, { marginTop: 10, backgroundColor: "#00000011" }]}
              >
                <Text style={[FormsStyles.submitBtntxt, { color: "#000000A1" }]}>Go Back</Text>
              </TouchableOpacity>

            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
    </Pressable>
  );
}
