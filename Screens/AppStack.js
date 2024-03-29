import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "./app/Home";
import Description from "./app/Description";
import Search from "./app/Search/Search";
import SearchDetails from "./app/Search/SearchDetails";
import Settings from "./app/Settings/Settings";
import Profile from "./app/Profile/Profile";
import VerificationStack from "./VerificationStack";

import { Ionicons } from "@expo/vector-icons";
import Help from "./app/Help";
import NotificationsStack from "./NotificationsStack";
import { Platform } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="TabNavigation"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name="Description" component={Description} />
      <Stack.Screen name="SearchDetails" component={SearchDetails} />
      <Stack.Screen name="VerificationStack" component={VerificationStack} />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="NotificationsStack" component={NotificationsStack} />
    </Stack.Navigator>
  );
}

function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle:
          Platform.OS === "android" ? { padding: 2, height: 56 } : null,
        tabBarLabelStyle:
          Platform.OS === "android" ? { paddingBottom: 4 } : null,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "md-home" : "ios-home-outline";
          } else if (route.name === "Search") {
            iconName = "search";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "ios-person" : "ios-person-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#7472E0",
        tabBarInactiveTintColor: "#808080",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
