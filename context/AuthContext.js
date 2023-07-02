import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "../utils/config";
import { Alert, Platform, ToastAndroid } from "react-native";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [isLoading, setLoading] = React.useState(false);
  const [isVisible, setVisibility] = React.useState(null);
  const [userToken, setUserToken] = React.useState(null);
  const [userData, setUserData] = React.useState(null);

  const Notify = (message) => {
    if (Platform.OS === "android") {
      ToastAndroid.showWithGravityAndOffset(
        message,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
    } else {
      Alert.alert("", message, [{}]);
    }
  };

  // Login a user
  const Login = async (Email, Password) => {
    setLoading(true);
    await axios
      .post(`${BASE_URL}/login`, { Email: Email, Password: Password })
      .then(async (res) => {
        if (res.data.Access === true && res.data.Error === false) {
          // AsyncStorage.setItem("userData", JSON.stringify(res.data.Data));
          AsyncStorage.setItem("userToken", res.data.Data.Auth);
          // AsyncStorage.setItem(
          //   "Visibility",
          //   res.data.Data.User.Visible.toString()
          // );
          // setUserData(res.data.Data);
          setUserToken(res.data.Data.Auth);
          // setVisibility(res.data.Data.User.Visible);

          let config = {
            headers: {
              Authorization: userToken,
            },
          };

          await axios.get(`${BASE_URL}/users/i`, config).then(async (res) => {
            if (res.data.Access === true && res.data.Error === false) {
              await AsyncStorage.setItem(
                "userData",
                JSON.stringify(res.data.Data)
              );
              await AsyncStorage.setItem(
                "Visibility",
                res.data.Data.User.Visible.toString()
              );
              await setUserData(res.data.Data);
              await setVisibility(res.data.Data.User.Visible);
            }
          });
          return Notify("Signed in sucessfully");
        }
        Notify(res.data.Error);
      })
      .catch((err) => {
        Notify("Someting went wrong");
        console.log(err);
      });
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
        if (res.data.Access === true && res.data.Error === false) {
          AsyncStorage.setItem("userData", JSON.stringify(res.data.Data));
          AsyncStorage.setItem("userToken", res.data.Data.Auth);
          AsyncStorage.setItem(
            "Visibility",
            res.data.Data.User.Visible.toString()
          );
          setUserData(res.data.Data);
          setUserToken(res.data.Data.Auth);
          setVisibility(res.data.Data.User.Visible);
          Notify("Account created sucessfully");
        }
      })
      .catch((err) => {
        Notify("Someting went wrong");
        console.log(err);
      });
    setLoading(false);
  };

  // Remove user
  const Logout = async () => {
    await setLoading(true);
    await setUserToken(null);
    await AsyncStorage.multiRemove(["userToken", "userData", "Visibility"]);
    setVisibility(null);
    await setUserToken(null);
    setLoading(false);
    Notify("Logged out sucessfully");
  };

  // Check authentication state
  const isAuthenticated = async () => {
    setLoading(true);
    try {
      let userToken = await AsyncStorage.getItem("userToken");
      let userData = await AsyncStorage.getItem("userData");
      userData = JSON.parse(userData);

      if (userData) {
        setUserData(userData);
        setUserToken(userToken);
        setVisibility(userData?.User?.Visible);
      }
    } catch (error) {
      console.log(`isAuthenticated in error state: ${error}`);
    }
    setLoading(false);
  };

  // check if authenticated when user token changes
  useEffect(() => {
    isAuthenticated();
  }, [userToken]);

  // get user data
  const getUserData = async () => {
    let usersDetialResponse;

    let config = {
      headers: {
        Authorization: userToken,
      },
    };

    await axios.get(`${BASE_URL}/users/i`, config).then((res) => {
      if (res.data.Access === true && res.data.Error === false) {
        AsyncStorage.setItem("userData", JSON.stringify(res.data.Data));
        setUserData(res.data.Data);
      }
    });
  };

  // switch current user visibility
  const setSwitch = async (previousState) => {
    setLoading(true);

    let setSwitchResponse;

    let config = {
      headers: {
        Authorization: userToken,
      },
    };

    console.log(userData);

    await axios
      .get(`${BASE_URL}/users/switch`, config)
      .then(async (res) => {
        setSwitchResponse = res.data;
        if (setSwitchResponse?.Error === false) {
          await axios.get(`${BASE_URL}/users/i`, config).then((res) => {
            if (res.data.Access === true && res.data.Error === false) {
              AsyncStorage.setItem("userData", JSON.stringify(res.data.Data));
              setUserData(res.data.Data);
            }
          });
          await AsyncStorage.setItem(
            "Visibility",
            setSwitchResponse.Switch.toString()
          );
          await setVisibility(setSwitchResponse.Switch);
          Notify("Visibility changed successfully");
        } else {
          setVisibility(previousState);
          Notify(setSwitchResponse.Error);
        }
      })
      .catch((err) => {
        Notify("Something went wrong!");
        console.log(err);
      });

    setLoading(false);
  };

  // Send Reset Mail
  const SendReset = async (email) => {
    setLoading(true);

    let sendResetEmailResponse;

    await axios
      .post(`${BASE_URL}/reset/1`, {
        Email: email,
      })
      .then((res) => {
        sendResetEmailResponse = res.data;
      })
      .catch((err) => {
        ResetResponse = err;
      });

    setLoading(false);

    console.log(sendResetEmailResponse);

    return sendResetEmailResponse;
  };

  // Reset Password
  const Reset = async (email, otp, password) => {
    setLoading(true);

    let ResetResponse;

    await axios
      .post(`${BASE_URL}/reset/2`, {
        Email: email,
        OTPNum: otp,
        Password: password,
      })
      .then((res) => {
        ResetResponse = res.data;
        console.log(ResetResponse);
      })
      .catch((err) => {
        Notify("Someting went wrong");
        ResetResponse = err;
      });

    setLoading(false);

    return ResetResponse;
  };

  // upload profile picture
  const uploadFile = async (uri) => {
    setLoading(true);
    try {
      const fileUri = uri;
      const formData = new FormData();

      formData.append("Profile", {
        uri: fileUri,
        name: "Profile",
        type: "application/octet-stream", // Modify the type based on your server requirements
      });

      let config = {
        headers: {
          Authorization: userToken,
        },
      };

      let config1 = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: userToken,
        },
      };

      await axios
        .post(`${BASE_URL}/upload/profileupload`, formData, config1)
        .then(async (res) => {
          if (res.data.Access === true && res.data.Error === false) {
            await axios.get(`${BASE_URL}/users/i`, config).then((res) => {
              if (res.data.Access === true && res.data.Error === false) {
                AsyncStorage.setItem("userData", JSON.stringify(res.data.Data));
                setUserData(res.data.Data);
              }
            });
            return Notify("Profile photo updated sucessfully");
          }
          Notify(res.data.Error);
        })
        .catch((err) => {
          Notify("Someting went wrong");
          console.log(err);
        });
    } catch (error) {
      console.log(`isAuthenticated in error state: ${error}`);
    }

    setLoading(false);
  };

  const Contact = async (data) => {
    let config = {
      headers: {
        Authorization: userToken,
      },
    };

    await axios
      .post(`${BASE_URL}/contact`, { ContactID: data }, config)
      .then(async (res) => {
        if (res.data.Access === true && res.data.Error === false && res.data.Contact === true) {
          return Notify("User contacted sucessfully");
        } else if (res.data.Access === true && res.data.Error !== false) {
          return Notify("Update your profile to use this feature");
        }
        Notify(res.data.Error);
      })
      .catch((err) => {
        Notify("Someting went wrong");
        console.log(err);
      });
  };

  const EditProfile = async (data) => {
    let config = {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: userToken,
      },
    };

    await axios
      .post(`${BASE_URL}/upload/editProfile`, data, config)
      .then(async (res) => {
        if (res.data.Access === true && res.data.Error === false) {
          console.log(res.data);
          await axios.get(`${BASE_URL}/users/i`, config).then(async (res) => {
            if (res.data.Access === true && res.data.Error === false) {
              await AsyncStorage.setItem("userData", JSON.stringify(res.data.Data));
              console.log(res.data.Data);
              await setUserData(res.data.Data);
            }
          });
          setLoading(false);
          Notify("Profile updated successfully add your NIN to complete your profile!");
        }
        return Notify(res.data.Error)
      })
      .catch((err) => {return Notify(err)});
  };

  return (
    <AuthContext.Provider
      value={{
        Login,
        Logout,
        isLoading,
        userToken,
        Register,
        isAuthenticated,
        SendReset,
        Reset,
        Notify,
        getUserData,
        setSwitch,
        isVisible,
        uploadFile,
        userData,
        Contact,
        setLoading,
        EditProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
