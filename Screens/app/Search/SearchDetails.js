import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext, useEffect, useState, useRef } from "react";
import AppStyles from "../../../styles/AppStyles";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import EditProfileBanner from "../../../components/EditProfileBanner.components";
import { AuthContext } from "../../../context/AuthContext";
import { StatusBar } from "expo-status-bar";
import MatchListItemComponents from "../../../components/MatchListItem.components";
import axios from "axios";
import { BASE_URL } from "../../../utils/config";

export default function SearchDetails({ route, navigation }) {
  const { Notify, userData, userToken } = useContext(AuthContext);
  const [loadingData, setLoadingData] = useState(true);
  const [data, setData] = useState([]);

  const { state, price, type } = route.params;

  // Function to filter the data based on User.state, OtherDetails.RentBudget, and OtherDetails.ResidenceType
  const filterData = (data, state, rentBudget, residenceType) => {
    // Calculate the range for rent budget (50% increment and decrease)
    const rentBudgetMin = rentBudget * 0.5;
    const rentBudgetMax = rentBudget * 1.5;

    return data.filter((item) => {
      const userState = item.User.State;
      const itemRentBudget = item.OtherDetails.RentBudget;
      const itemResidenceType = item.OtherDetails.ResidenceType;

      return (
        userState === state &&
        itemResidenceType === residenceType &&
        itemRentBudget >= rentBudgetMin &&
        itemRentBudget <= rentBudgetMax
      );
    });
  };

  useEffect(() => {
    const getData = async () => {
      setLoadingData(true);

      let config = {
        headers: {
          Authorization: userToken,
        },
      };

      await axios.get(`${BASE_URL}/users/all`, config).then(async (res) => {
        if (res.data.Access === true && res.data.Error === false) {
          const i = await filterData(res.data.Data, state, price, type)
          console.log(i);
          return setData(i);
        }
      });

      setLoadingData(false);
    };

    getData();
    setLoadingData(false);
  }, [data]);

  const onRefresh = React.useCallback(() => {
    const getData = async () => {
      setLoadingData(true);

      let config = {
        headers: {
          Authorization: userToken,
        },
      };

      await axios.get(`${BASE_URL}/users/all`, config).then((res) => {
        if (res.data.Access === true && res.data.Error === false) {
          return setData(filterData(res.data.Data, state, price, type));
        }
      });

      setLoadingData(false);
    };

    getData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View
        style={[
          AppStyles.upper,
          {
            paddingHorizontal: 24,
            alignItems: "flex-end",
            height: "14%",
          },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons
              name="ios-chevron-back-outline"
              size={24}
              color="#ffffff"
            />
          </Pressable>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              color: "white",
              fontSize: 22,
            }}
          >
            Search
          </Text>
          <Ionicons
            name="ios-chevron-back-outline"
            size={24}
            color="#ffffff"
            style={{ opacity: 0 }}
          />
        </View>
      </View>

      {/* body */}
      <View style={{ flex: 1, paddingTop: 24 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={loadingData} onRefresh={onRefresh} />
          }
          bounces={true}
          alwaysBounceVertical={true}
          style={{ flex: 1 }}
          contentContainerStyle={{
            gap: 12,
            padding: 24,
            paddingTop: 0,
            flex: 1,
          }}
        >
          {userData?.User.Verified2 !== true ? (
            <EditProfileBanner contentContainerStyle={{ marginBottom: 12 }} />
          ) : null}

          {/* flatlist of users */}
          {loadingData === true ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActivityIndicator size="small" color="#7472E0" />
            </View>
          ) : !data?.lenght || data === [] ? (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ opacity: 1, fontSize: 32 }}>No users found with your search 😩</Text>
            </View>
          ) : (
            <FlatList
              scrollEnabled={false}
              style={{ flex: 1 }}
              data={data}
              renderItem={({ item }) => (
                <MatchListItemComponents
                  containerStyle={{ marginVertical: 10, overflow: "visible" }}
                  navigation={navigation}
                  data={item}
                />
              )}
              keyExtractor={(item) => item.User._id}
            />
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  inputConatiner: {
    height: 50,
    borderColor: "#7472E0",
    borderWidth: 0.5,
    borderRadius: 6,
    paddingHorizontal: 12,
    justifyContent: "center",
  },
  placeholderStyle: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },
});
