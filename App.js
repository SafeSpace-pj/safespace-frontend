import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_500Medium,
  Poppins_800ExtraBold,
  Poppins_400Regular_Italic,
} from "@expo-google-fonts/poppins";
import { StyleSheet, Text, View } from "react-native";
import * as NavigationBar from 'expo-navigation-bar';
import AuthProvider from "./context/AuthContext";
import AppNav from "./Screens/AppNav";


export default function App() {
  NavigationBar.setBackgroundColorAsync("white");
  
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_800ExtraBold,
    Poppins_400Regular_Italic,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
      <AuthProvider>
        <AppNav />
      </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
