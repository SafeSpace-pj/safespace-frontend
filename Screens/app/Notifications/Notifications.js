import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import AppStyles from "../../../styles/AppStyles";
import NotificationsItem from "../../../components/NotificationsItem.components";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import { BASE_URL } from "../../../utils/config";

export default function Notifications({ navigation }) {
  const { userData, userToken, getUserData } =
    useContext(AuthContext);

  const [Loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getUserData();
  }, []);

  if (userData === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="#7472E0" size="small" />
      </View>
    );
  }

  const onRefresh = React.useCallback(() => {
    setLoading(true);
    setRefreshing(true);
    async function getData() {
      let config = {
        headers: {
          authorization: userToken,
        },
      };

      await axios
        .get(`${BASE_URL}/users/all/notification`, config)
        .then((res) => {
          if (res.data.Access === true && res.data.Error === false) {
            setData(res.data.Notifications);
          }
        })
        .catch((err) => console.log(err));
    }

    getData();
    setLoading(false);
    setRefreshing(false);
  }, []);

  useEffect(() => {
    setLoading(true)
    async function getData() {
      let config = {
        headers: {
          Authorization: userToken,
        },
      };

      await axios
        .get(`${BASE_URL}/users/all/notification`, config)
        .then((res) => {
          if (res.data.Access === true && res.data.Error === false) {
            setData(res.data.Notifications);
          }
        })
        .catch((err) => console.log(err));
    }

    getData();
    setLoading(false)
  }, []);

  return (
    <View style={styles.container}>
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
            Notifications
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
      <View style={{ flex: 1, padding: 24 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "baseline",
            paddingVertical: 14,
          }}
        >
          <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 15 }}>
            All messages
          </Text>
          <Pressable>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 12,
                color: "#00000080",
              }}
            >
              Mark all read
            </Text>
          </Pressable>
        </View>
        <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
          showsVerticalScrollIndicator={false}
          bounces={true}
          alwaysBounceVertical={true}
          style={{ flex: 1 }}
          contentContainerStyle={{ gap: 12 }}
        >
          {Loading === true ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ActivityIndicator size="small" color="#7472E0" />
              </View>
            ) : data === [] ? (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>No Notifications</Text>
              </View>
            ) : (
              <FlatList
                scrollEnabled={false}
                style={{ flex: 1 }}
                data={data}
                renderItem={({ item }) => {
                  return <NotificationsItem {...item} onPress={()=>navigation.navigate("Notification", {...item})} />
                }}
                keyExtractor={(item) => item._id}
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
  },
});
