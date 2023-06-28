import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Home({ navigation }) {
  const { Logout, isLoading } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Pressable onPress={Logout}>
        <Text>Logout here!!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
