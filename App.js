import { useFonts,Poppins_400Regular, Poppins_700Bold, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './Screens/Home';
import Login from './Screens/login';
import Register from './Screens/RegisterSelection';
import RegisterSelection from './Screens/RegisterSelection';
// import Register from './Screens/RegisterSelection';

const Stack= createNativeStackNavigator()
export default function App() {
  let [fontsLoaded]=useFonts({Poppins_400Regular,Poppins_700Bold,Poppins_500Medium})
  if(!fontsLoaded){
    return null
  }
  return (
    <SafeAreaProvider style={{flex:1}}>
      <NavigationContainer style={{flex:1}}>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} options={{
            headerShown:false
          }} />
          <Stack.Screen name='Register' component={Register} options={{
            headerShown:false
          }} />
          <Stack.Screen name='Login' component={Login} options={{
            headerShown:false
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
