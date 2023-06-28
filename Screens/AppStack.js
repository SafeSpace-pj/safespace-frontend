import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from "./app/Home";

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="AppEntryPage"
      screenOptions={{
        headerShown: false,
      }}
    >
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}
