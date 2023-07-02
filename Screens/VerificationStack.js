import Page2 from "./verification/Page2";
import Page3 from "./verification/Page3";
import Page4 from "./verification/Page4";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Page1 from "./verification/page1";
import NINUpload from "./verification/NINUpload"

const Stack = createNativeStackNavigator();

export default function VerificationStack() {
  return (
    <Stack.Navigator
      initialRouteName="Page1"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Page1" component={Page1} />
      <Stack.Screen name="Page2" component={Page2} />
      <Stack.Screen name="Page3" component={Page3} />
      <Stack.Screen name="Page4" component={Page4} />
      <Stack.Screen name="NINUpload" component={NINUpload} />
    </Stack.Navigator>
  );
}
