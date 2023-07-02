import { Pressable, StyleSheet, Text, View } from "react-native";
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
  const { Logout, isLoading, userToken } = useContext(AuthContext);

  const [data, setData] = useState(null);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoadingData(true);

      let config = {
        headers: {
          Authorization: userToken,
        },
      };

      await axios
        .get(`${BASE_URL}/users/personalizeduser`, config)
        .then((res) => {
          if (res.data.Access === true && res.data.Error === false) {
            return setData(res.data.Data);
          }
        });

      setLoadingData(false);
    };
    
    getData();
  }, [isLoading]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* purple top banner */}
      <View style={AppStyles.upper}>
        <Text style={AppStyles.upperTitle}>SafeSpace</Text>
      </View>
      <View style={[AppStyles.body, { flex: 1 }]}>
        <Text style={AppStyles.heading}>Possible Matches</Text>

        {/* Update info banner if user Verifcation level is less than 3 */}
        <KYCBannercomponents
          containerStyle={{ marginVertical: 10 }}
          navigator={() => navigation.navigate("Search")}
        />

        {/* flatlist of users */}
        {data === null || data === undefined ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size="small" color="#7472E0" />
          </View>
        ) : (
          <FlatList
            scrollEnabled={true}
            style={{ flex: 1 }}
            data={data}
            renderItem={({ item }) => (
              <MatchListItemComponents
                containerStyle={{ marginVertical: 10 }}
                navigation={navigation}
                data={item}
              />
            )}
            keyExtractor={(item) => item.User._id}
          />
        )}

        {/* go to search */}
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
