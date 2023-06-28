import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Divider, RadioButton, TextInput } from "react-native-paper";
import FormsStyles from "../../styles/Forms.styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Gradientcomponent from "../../components/Gradient.components";
import { AntDesign } from "@expo/vector-icons";
import MaskEmail from "../../utils/MaskedEmail";
import { AuthContext } from "../../context/AuthContext";

export default function Otp({ route, navigation }) {

  const { Reset } = useContext(AuthContext)

  const { resetEmail } = route.params;

  const [PAssword, setPAssword] = useState("");
  const [passworderror, setPassworderror] = useState(false);

  const [OTP, setOTP] = useState("");
  const [otperror, setOtperror] = useState(false);

  const [Error, setError] = useState(
    `we have sent an otp code to ${MaskEmail(
      resetEmail
    )}, fill it in with your new password to continue`
  );

  const checkPasswordLenght = () => {
    if (PAssword.trim().length >= 8 && PAssword.trim().length <= 32) {
      return setError(
        `we have sent an otp code to ${MaskEmail(
          resetEmail
        )}, fill it in with your new password to continue`
      );
    } else {
      return setError(
        "Please enter a secure password between 8 and 32 characters."
      );
    }
  };

  const hangleOnPressed = async () => {
    const sucess = await Reset( resetEmail.toLocaleLowerCase(), OTP.trim(), PAssword.trim().toLocaleLowerCase());

    if (sucess.Sent === true) {
      return navigation.popToTop("Login")
    } else {
      return setError(sucess.Error);
    }
  };

  return (
    <Pressable
      onPress={() => Keyboard.dismiss()}
      style={{ flex: 1, backgroundColor: "white" }}
    >

      {/* top banner */}
      <View style={FormsStyles.upper}/>

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
              <Text style={FormsStyles.formTitle}>Reset your password</Text>
              <Text style={FormsStyles.formsubtext}>{Error}</Text>
            </View>

            {/* input  */}
            <View>
              <TextInput
                error={otperror}
                mode="outlined"
                style={{ backgroundColor: "white", marginTop: 10 }}
                outlineColor="#000000"
                label="OTP"
                autoComplete="sms-otp"
                keyboardType="phone-pad"
                value={OTP}
                onChangeText={setOTP}
                maxLength={4}
                minLength={4}
              />

              <TextInput
                error={passworderror}
                contentStyle={FormsStyles.input}
                style={{ backgroundColor: "white", marginBottom: 10 }}
                mode="outlined"
                outlineColor="#000000"
                label="Password"
                autoComplete="new-password"
                secureTextEntry
                value={PAssword}
                onChangeText={setPAssword}
                onEndEditing={checkPasswordLenght}
              />

              {/* Reset */}
              <TouchableOpacity
                onPress={hangleOnPressed}
                style={[FormsStyles.submitBtn, { marginTop: 10 }]}
              >
                <Text style={FormsStyles.submitBtntxt}>Reset</Text>
              </TouchableOpacity>

              {/* Go back */}
              <TouchableOpacity
                onPress={() => navigation.pop()}
                style={[
                  FormsStyles.submitBtn,
                  { marginTop: 10, backgroundColor: "#00000011" },
                ]}
              >
                <Text
                  style={[FormsStyles.submitBtntxt, { color: "#000000A1" }]}
                >
                  Go Back
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
