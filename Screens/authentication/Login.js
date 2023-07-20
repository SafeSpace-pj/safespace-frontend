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

export default function Login({ navigation }) {
  const { Login, Notify } = useContext(AuthContext)

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    formError: "",
    emailError: false,
    passwordError: false,
  });


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

    checkEmailValid()
    checkPasswordLenght()

    Login(formData.email.toLocaleLowerCase(), formData.password)
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
              <Text style={FormsStyles.formTitle}>Sign in to Continue</Text>
              <Text style={FormsStyles.formsubtext}>{error.formError}</Text>
            </View>

            {/* input  */}
            <View style={{ flexDirection: "column", gap: 8 }}>

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
                    email: text.toLocaleLowerCase(),
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

              {/* Login */}
              <TouchableOpacity
                style={[FormsStyles.submitBtn, { marginTop: 10 }]}
                onPress={ButtonAction}
              >
                <Text style={FormsStyles.submitBtntxt}>Log in</Text>
              </TouchableOpacity>

              {/* reset password  */}
              <View style={FormsStyles.ResetView}>
                <TouchableOpacity onPress={()=>navigation.navigate('Reset')}>
                  <Text style={FormsStyles.ResetText}>Reset Password</Text>
                </TouchableOpacity>
              </View>
            </View>

            <Divider style={{ marginVertical: 30 }} />

            <View style={FormsStyles.formText}>
              <Text style={FormsStyles.formsubtext}>or Sign in with</Text>
            </View>

            <View style={FormsStyles.AuthView}>
              {/* Auth0 buttons */}
              <View style={FormsStyles.AuthBtn}>
                <TouchableOpacity  style={FormsStyles.AuthBtnItem}>
                  <AntDesign onPress={()=>Notify("Feature unavailable or coming soon")} name="facebook-square" size={26} color="black" />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>Notify("Feature unavailable or coming soon")} style={FormsStyles.AuthBtnItem}>
                  <AntDesign name="google" size={26} color="black" />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>Notify("Feature unavailable or coming soon")} style={FormsStyles.AuthBtnItem}>
                  <AntDesign name="twitter" size={26} color="black" />
                </TouchableOpacity>
              </View>

              {/* reset password  */}
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity onPress={() => navigation.replace("Register")}>
                  <Text style={FormsStyles.ResetText}>
                    Dont have an account?{" "}
                    <Text
                      style={{
                        fontFamily: "Poppins_500Medium",
                        color: "#7472E0",
                      }}
                    >
                      Sign up
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

const styles = StyleSheet.create({})