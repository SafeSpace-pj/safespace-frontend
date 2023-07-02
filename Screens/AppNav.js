import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import { useContext, } from "react";
import { AuthContext } from "../context/AuthContext";
import AppStack from "./AppStack";
import LoadingComponents from "../components/Loading.components";

export default function AppNav() {
  const { userToken } = useContext(AuthContext);
  
  return (
    <LoadingComponents>
      <NavigationContainer>
        {userToken === null || "" ? <AuthStack /> : <AppStack />}
      </NavigationContainer>
    </LoadingComponents>
  );
}

