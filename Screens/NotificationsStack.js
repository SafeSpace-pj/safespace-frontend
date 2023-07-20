import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Notifications from "./app/Notifications/Notifications";
import Notification from "./app/Notifications/Notification";

const Stack = createNativeStackNavigator();

export default function NotificationsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Notifications"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  );
}
