import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AppEntryPage from "./onboarding/AppEntryPage";
import Register from "./authentication/Register";
import Login from "./authentication/Login";
import Reset from "./authentication/Reset";
import Otp from "./authentication/Otp";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="AppEntryPage"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AppEntryPage" component={AppEntryPage} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Reset" component={Reset} />
      <Stack.Screen name="Otp" component={Otp} />
    </Stack.Navigator>
  );
};

export default AuthStack;
