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

      {/* body */}
      <View style={{ flex: 1, padding: 24 }}>
        <Text style={{ fontFamily: "Poppins_500Medium", color: "#000000", fontSize: 16, marginBottom: 16 }}>Frequent Asked Questions</Text>
      <ScrollView showsVerticalScrollIndicator={false} bounces={true} alwaysBounceVertical={true} style={{ flex: 1 }} contentContainerStyle={{ gap: 12 }}>
        <FaqItem question="What do we get here in this app?" answer="That which doesn't kill you makes you stronger, right? Unless it almost kills you, and renders you weaker. Being strong is pretty rad though, so go ahead." />
        <FaqItem question="What is the use of this App?" answer="Sometimes, you've just got to say 'the party starts here'. Unless you're not in the place where the aforementioned party is starting. Then, just shut up." />
        <FaqItem question="How to get from location A to B?" answer="If you believe in yourself, go double or nothing. Well, depending on how long it takes you to calculate what double is. If you're terrible at maths, don't." />
        <FaqItem question="Why this app?" answer="Cause I'm a baboon, I live in the Zoo, Zazuu 🐐." />
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
