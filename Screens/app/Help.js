import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppStyles from "../../styles/AppStyles";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import FaqItem from "../../components/FaqItem.components";

export default function Help({ navigation }) {
  return (
    <View style={styles.container}>
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
            Help
          </Text>
          <Ionicons
            name="ios-chevron-back-outline"
            size={24}
            color="#ffffff"
            style={{ opacity: 0 }}
          />
        </View>
      </View>

      {/* contact button */}
      {/* <View style={{ padding: 24, paddingBottom: 0, backgroundColor: "#ffffff" }}>
        <Pressable>Conta</Pressable>
      </View> */}

      {/* body */}
      <View style={{ flex: 1, padding: 24, paddingBottom: 0, backgroundColor: "#ffffff" }}>
        <Text style={{ fontFamily: "Poppins_500Medium", color: "#000000", fontSize: 16, marginBottom: 16 }}>Frequent Asked Questions</Text>
      <ScrollView showsVerticalScrollIndicator={false} bounces={true} alwaysBounceVertical={true} style={{ flex: 1 }} contentContainerStyle={{ gap: 12 }}>
        <FaqItem question="How does the roommate matching app work?" answer="The roommate matching app uses advanced algorithms to analyze your profile information, including your interests, personality traits, and preferences. Based on this data, the system suggests potential roommates who have similar characteristics and compatibility factors. You can then review these roommate suggestions and connect with those who seem like a good fit to start a conversation and explore shared living opportunities." />
        <FaqItem question="Is my personal information safe and secure?" answer="Yes, we take the security and privacy of your personal information seriously. Your data is encrypted and stored securely on our servers. We adhere to strict data protection regulations to ensure your information is kept confidential and only used for the purpose of roommate matching. Rest assured that your data is never shared with third parties without your consent." />
        <FaqItem question="Can I communicate with potential roommates through the app?" answer="Our app provides a contact feature that allows you to send your contact information to any potential match you are interested in connecting with. This enables you to discuss preferences, arrange meetups, and get to know each other better before making any housing decisions. We encourage users to meet in public places." />
        <FaqItem question="What if I don't find a compatible roommate right away?" answer="Finding the perfect roommate may take some time, but don't worry! Our app continually refines its suggestions based on your feedback and user interactions. You can update your preferences and profile to receive more tailored roommate matches. Additionally, our user base is constantly growing, so new potential roommates are joining every day." />
        <FaqItem question="Can I use the app to find roommates for different living arrangements, such as shared houses or apartments?" answer="Absolutely! Our app is designed to cater to various living arrangements, including shared houses, apartments, and other types of joint accommodation. You can specify your living preferences in your profile, and the app will provide roommate matches that align with your desired living situation." />
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
