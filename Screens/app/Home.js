import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { StatusBar } from 'expo-status-bar'
import AppStyles from "../../styles/AppStyles";
import { AuthContext } from "../../context/AuthContext";
import KYCBannercomponents from "../../components/KYCBanner.components";
import MatchListItemComponents from "../../components/MatchListItem.components";

export default function Home({ navigation }) {
  const { Logout, isLoading } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      {/* purple top banner */}
      <View style={AppStyles.upper}>
        <Text style={AppStyles.upperTitle}>SafeSpace</Text>
      </View>
      <View style={AppStyles.body}>
        <Text style={AppStyles.heading}>Possible Matches</Text>

        {/* Update info banner if user Verifcation level is less than 3 */}
        <KYCBannercomponents containerStyle={{ marginVertical: 10 }} navigator={()=>navigation.navigate("Search")} />

        {/* flatlist of users */}
          <MatchListItemComponents navigation={navigation} />

        {/* go to search */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD"
  },
});
