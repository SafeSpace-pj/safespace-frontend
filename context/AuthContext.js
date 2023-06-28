import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "../utils/config";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [isLoading, setLoading] = React.useState(false);
  const [userToken, setUserToken] = React.useState(null);
  const [userData, setUserData] = React.useState(null);

  // Login a user
  const Login = async (Email, Password) => {
    setLoading(true);
    await axios
      .post(`${BASE_URL}/login`, { Email: Email, Password: Password })
      .then((res) => {
        if (res.data.Access === true && res.data.Error === false) {
          AsyncStorage.setItem("userData", JSON.stringify(res.data.Data));
          AsyncStorage.setItem("userToken", res.data.Data.Auth);
          setUserData(res.data.Data);
          setUserToken(res.data.Data.Auth);
          console.log(userToken, userData);
        }
      })
      .catch((err) => console.log(err));
    setLoading(false);
  };

  // Register new user
  const Register = async (Email, Password, Fullname) => {
    setLoading(true);
    await axios
      .post(`${BASE_URL}/register`, {
        Email: Email,
        Password: Password,
        Fullname: Fullname,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.Access === true && res.data.Error === false) {
          AsyncStorage.setItem("userData", JSON.stringify(res.data.Data));
          AsyncStorage.setItem("userToken", res.data.Data.Auth);
          setUserData(res.data.Data);
          setUserToken(res.data.Data.Auth);
        }
      })
      .catch((err) => console.log(err));
    setLoading(false);
  };

  // Remove user
  const Logout = async () => {
    // console.log("Logout");
    // console.log(userData, userToken);
    await setLoading(true);
    await setUserToken(null);
    await AsyncStorage.removeItem("userToken");
    await AsyncStorage.removeItem("userData");
    await setUserToken(null);
    setLoading(false);
  };

  // Check authentication state
  const isAuthenticated = async () => {
    try {
      setLoading(true);
      let userToken = await AsyncStorage.getItem("userToken");
      let userData = await AsyncStorage.getItem("userData");
      userData = JSON.parse(userData);

      if (userData) {
        setUserData(userData);
        setUserToken(userToken);
      }

      setLoading(false);
    } catch (error) {
      console.log(`isAuthenticated in error state: ${error}`);
    }
  };

  useEffect(() => {
    isAuthenticated();
  }, [userToken]);


  // Send Reset Mail
  const SendReset = (email) => {
    return null
  }

  return (
    <AuthContext.Provider
      value={{ Login, Logout, isLoading, userToken, Register, isAuthenticated, SendReset }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
