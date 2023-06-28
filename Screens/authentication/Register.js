import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Divider, RadioButton, TextInput } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AntDesign } from "@expo/vector-icons";
import FormsStyles from "../../styles/Forms.styles";
import { AuthContext } from "../../context/AuthContext";

export default function Register({ navigation }) {

  const { Register } = useContext(AuthContext)

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    formError: "",
    emailError: false,
    passwordError: false,
    fullNameError: false,
    confirmPasswordError: false,
  });

  const checkPasswordMatch = () => {
    if (formData.password.trim() !== formData.confirmPassword.trim()) {
      return setError({
        ...error,
        formError: "Passwords do not match",
        confirmPasswordError: true,
      });
    } else {
      return setError({
        ...error,
        formError: "",
        confirmPasswordError: false,
      });
    }
  };

  const checkEmailValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      // console.log(emailRegex.test(formData.email));
      return setError({
        ...error,
        formError: "Invalid Email, Please enter a valid email.",
        emailError: true,
      });
    } else {
      return setError({
        ...error,
        formError: "",
        emailError: false,
      });
    }
  };

  const checkNameLenght = () => {
    if (
      formData.fullName.trim().length >= 4 &&
      formData.fullName.trim().length <= 32
    ) {
      return setError({
        ...error,
        formError: "",
        fullNameError: false,
      });
    } else {
      return setError({
        ...error,
        formError: "Please enter a name between 4 and 32 characters.",
        fullNameError: true,
      });
    }
  };

  const checkPasswordLenght = () => {
    if (
      formData.password.trim().length >= 8 &&
      formData.password.trim().length <= 32
    ) {
      return setError({
        ...error,
        formError: "",
        passwordError: false,
      });
    } else {
      return setError({
        ...error,
        formError: "Please enter a secure password between 8 and 32 characters.",
        passwordError: true,
      });
    }
  };

  const ButtonAction = () => {
    // Extra validation in case any fails somehow 🤷‍♂️
    console.log(formData);

    checkEmailValid()
    checkNameLenght()
    checkPasswordLenght()
    checkPasswordMatch()

    Register(formData.email.toLocaleLowerCase(), formData.password, formData.fullName.toLocaleLowerCase())
  }

  return (
    <Pressable
      onPress={() => Keyboard.dismiss()}
      style={{ flex: 1, backgroundColor: "white" }}
    >
      {/* purple top banner */}
      <View style={FormsStyles.upper} />

      {/* body  */}
      <View style={FormsStyles.body}>
        {/* titles */}
        <View style={[FormsStyles.uppertexts, { marginBottom: 22 }]}>
          <Text style={FormsStyles.upperTitle}>Safe Space</Text>
          <Text style={FormsStyles.subtitle}>Ultimate roomate finder</Text>
        </View>

        {/* Form */}
        <View style={FormsStyles.formView}>
          <KeyboardAwareScrollView
            style={{ width: "100%" }}
            showsVerticalScrollIndicator={false}
          >
            <View style={FormsStyles.formText}>
              <Text style={FormsStyles.formTitle}>Sign Up to Continue</Text>
              <Text style={FormsStyles.formsubtext}>{error.formError}</Text>
            </View>

            {/* input  */}
            <View style={{ flexDirection: "column", gap: 8 }}>
              <TextInput
                error={error.fullNameError}
                contentStyle={FormsStyles.input}
                style={{ backgroundColor: "white" }}
                outlineColor="#0000001A"
                mode="outlined"
                label="Full-Name"
                autoComplete="given-name"
                autoFocus
                value={formData.fullName}
                onChangeText={(text) =>
                  setFormData({
                    ...formData,
                    fullName: text,
                  })
                }
                onEndEditing={checkNameLenght}
              />

              <TextInput
                error={error.emailError}
                contentStyle={FormsStyles.input}
                style={{ backgroundColor: "white" }}
                mode="outlined"
                outlineColor="#0000001A"
                label="Email Address"
                autoComplete="email"
                keyboardType="email-address"
                value={formData.email}
                onChangeText={(text) =>
                  setFormData({
                    ...formData,
                    email: text,
                  })
                }
                onEndEditing={checkEmailValid}
              />

              <TextInput
                error={error.passwordError}
                contentStyle={FormsStyles.input}
                style={{ backgroundColor: "white" }}
                mode="outlined"
                outlineColor="#0000001A"
                label="Password"
                autoComplete="new-password"
                secureTextEntry
                value={formData.password}
                onChangeText={(text) =>
                  setFormData({
                    ...formData,
                    password: text,
                  })
                }
                onEndEditing={checkPasswordLenght}
              />

              <TextInput
                error={error.confirmPasswordError}
                contentStyle={FormsStyles.input}
                style={{ backgroundColor: "white" }}
                mode="outlined"
                outlineColor="#0000001A"
                label="Confirm password"
                autoComplete="new-password"
                secureTextEntry
                value={formData.confirmPassword}
                onChangeText={(text) =>
                  setFormData({
                    ...formData,
                    confirmPassword: text,
                  })
                }
                onEndEditing={checkPasswordMatch}
              />

              {/* register */}
              <TouchableOpacity
                style={[FormsStyles.submitBtn, { marginTop: 10 }]}
                onPress={ButtonAction}
              >
                <Text style={FormsStyles.submitBtntxt}>Register</Text>
              </TouchableOpacity>
            </View>

            <Divider style={{ marginVertical: 30 }} />

            <View style={FormsStyles.formText}>
              <Text style={FormsStyles.formsubtext}>or Sign in with</Text>
            </View>

            <View style={FormsStyles.AuthView}>
              {/* Auth0 buttons */}
              <View style={FormsStyles.AuthBtn}>
                <TouchableOpacity style={FormsStyles.AuthBtnItem}>
                  <AntDesign name="facebook-square" size={26} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={FormsStyles.AuthBtnItem}>
                  <AntDesign name="google" size={26} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={FormsStyles.AuthBtnItem}>
                  <AntDesign name="twitter" size={26} color="black" />
                </TouchableOpacity>
              </View>

              {/* reset password  */}
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity onPress={() => navigation.replace("Login")}>
                  <Text style={FormsStyles.ResetText}>
                    Already have an account?{" "}
                    <Text
                      style={{
                        fontFamily: "Poppins_500Medium",
                        color: "#7472E0",
                      }}
                    >
                      Login
                    </Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
