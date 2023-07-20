import { StyleSheet, Text, View } from "react-native";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppStyles from "../../../styles/AppStyles";

export default function Notification(props) {
  const {
    route: {
      params: { Body, Status, Title, updatedAt },
    },
    navigation,
  } = props;

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
            Notification
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
        <View
          style={{
            paddingVertical: 14,
            gap: 8,
          }}
        >
          <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 18 }}>
            {Title}
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 15,
              color: "#00000090",
            }}
          >
            {Body}
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 12,
              color: "#00000080",
            }}
          >
            {Date(updatedAt)}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
