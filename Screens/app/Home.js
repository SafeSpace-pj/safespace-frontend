import {
  Pressable,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import AppStyles from "../../styles/AppStyles";
import { AuthContext } from "../../context/AuthContext";
import KYCBannercomponents from "../../components/KYCBanner.components";
import MatchListItemComponents from "../../components/MatchListItem.components";
import axios from "axios";
import { BASE_URL } from "../../utils/config";
import { ActivityIndicator } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function Home({ navigation }) {
  const { Logout, isLoading, userToken, userData } = useContext(AuthContext);

  const [data, setData] = useState([]);
  const [unMatched, setUnmatched] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    async function getData() {
      setLoadingData(true);

      let config = {
        headers: {
          Authorization: userToken,
        },
      };

      await axios
        .get(`${BASE_URL}/users/personalizeduser`, config)
        .then(async (res) => {
          if (res.data.Access === true && res.data.Error === false) {
            await setData(res.data.Data);
                       await axios
              .get(`${BASE_URL}/users/all`, config)
              .then(async (res) => {
                if (res.data.Access === true && res.data.Error === false) {
                  // Filter list B and remove users that appear in list A
                  const filteredListB = await res.data.Data.filter((itemB) => {
                    // Check if the User._id exists in list A
                    return !data.some(
                      (itemA) => itemA.User._id === itemB.User._id
                    );
                  });
                  setUnmatched(filteredListB);
                }
              });

            setLoadingData(false);
          }
        });
    }

    getData();
    setLoadingData(false);
  }, []);

  const onRefresh = React.useCallback(() => {
    const getData = async () => {
      setLoadingData(true);

      let config = {
        headers: {
          Authorization: userToken,
        },
      };

      await axios
        .get(`${BASE_URL}/users/personalizeduser`, config)
        .then(async (res) => {
          if (res.data.Access === true && res.data.Error === false) {
            await setData(res.data.Data);

            await axios
              .get(`${BASE_URL}/users/all`, config)
              .then(async (res) => {
                if (res.data.Access === true && res.data.Error === false) {
                  // Filter list B and remove users that appear in list A
                  const filteredListB = await res.data.Data.filter((itemB) => {
                    // Check if the User._id exists in list A
                    return !data.some(
                      (itemA) => itemA.User._id === itemB.User._id
                    );
                  });
                  setUnmatched(filteredListB);
                }
              });

            setLoadingData(false);
            console.log(loadingData);
          }
        });
    };

    getData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* purple top banner */}
      <View style={AppStyles.upper}>
        <Text style={AppStyles.upperTitle}>SafeSpace</Text>
      </View>
      <View style={[AppStyles.body, { flex: 1, overflow: "visible" }]}>
        <Text style={AppStyles.heading}>Possible Matches</Text>
        {/* KYC banner */}
        {userData?.User.Verified2 !== true ? (
          <KYCBannercomponents
            navigator={() =>
              navigation.navigate("VerificationStack", {
                screen: "Page1",
              })
            }
          />
        ) : null}
        {/* flatlist of users */}
        {loadingData === true ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size="small" color="#7472E0" />
          </View>
        ) : data !== [] ? (
          <FlatList
            refreshControl={
              <RefreshControl refreshing={loadingData} onRefresh={onRefresh} />
            }
            scrollEnabled={true}
            data={data}
            style={{ flex: 1 }}
            renderItem={({ item }) => {
              return (
                <MatchListItemComponents
                  containerStyle={{ marginVertical: 10, overflow: "visible" }}
                  navigation={navigation}
                  data={item}
                />
              );
            }}
            keyExtractor={(item) => item?.User?._id}
          />
        ) : null}
        {/* Show other user after matched users */}(
        <>
          {/* Banner to show that they arent a match */}
          {/* <KYCBannercomponents
              navigator={() =>
                navigation.navigate("VerificationStack", {
                  screen: "Page1",
                })
              }
            /> */}
          {/* <FlatList
              refreshControl={
                <RefreshControl
                  refreshing={loadingData}
                  onRefresh={onRefresh}
                />
              }
              scrollEnabled={true}
              data={unMatched}
              style={{ flex: 1 }}
              renderItem={({ item }) => {
                return (
                  <MatchListItemComponents
                    containerStyle={{ marginVertical: 10, overflow: "visible" }}
                    navigation={navigation}
                    data={item}
                  />
                );
              }}
              keyExtractor={(item) => item?.User?._id}
            /> */}
        </>
        )
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD",
  },
});
