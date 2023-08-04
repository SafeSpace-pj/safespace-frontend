import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import AppStyles from '../../styles/AppStyles';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import FormsStyles from '../../styles/Forms.styles';
import DropdownElement from '../../components/DropdownElement.components';
import { StatusBar } from 'expo-status-bar';

export default function Page3({ route, navigation }) {
  const { Notify } = useContext(AuthContext);

  const {
    occupation,
    phone,
    stateRecidence,
    bio,
    income,
    budget,
    rentSplit,
    gender,
    email,
    fullname,
    location,
  } = route.params;

  const [house, setHouse] = useState("")
  const [houseState, setHouseState] = useState("")
  const [roomieOccupation, setRoomieOccupation] = useState("")
  const [roomieIncome, setRoomieIncome] = useState("")
  const [roomieGender, setRoomieGender] = useState("")

  const ButtonAction = () => {
    if (!house || !houseState || !roomieOccupation || !roomieIncome || !roomieGender) {
      return Notify("Fill form acordingly");
    }
    navigation.replace("Page4", {
      occupation: occupation,
      phone: phone,
      stateRecidence: stateRecidence,
      bio: bio,
      income: income,
      budget: budget,
      rentSplit: rentSplit,
      gender: gender,
      email: email,
      fullname: fullname,
      location: location,
      house: house,
      houseState: houseState,
      roomieOccupation: roomieOccupation,
      roomieIncome: roomieIncome,
      roomieGender: roomieGender,
    });
  }


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
            Verification
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
        <View style={{ paddingHorizontal: 24 }}>
          <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 15 }}>Your Roomie Preferences</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={true}
          alwaysBounceVertical={true}
          style={{ flex: 1 }}
          contentContainerStyle={{ gap: 12, padding: 24 }}
        >

          {/* House type */}
          <DropdownElement
            data={[
              { label: "Self con apt", value: "Self con apt" },
              { label: "1 bedroom apt", value: "1 bedroom apt" },
              { label: "2 bedroom apt", value: "2 bedroom apt" },
              { label: "3 bedroom apt", value: "3 bedroom apt" },
            ]}
            name="House type"
            setValue={(val) => setHouse(val)}
            value={house}
          />

          {/* State dropdown */}
          <DropdownElement
            data={[
              { label: "Abia", value: "Abia" },{ label: "Abuja", value: "Abuja" },
              { label: "Adamawa", value: "Adamawa" },
              { label: "Akwa Ibom", value: "Akwa Ibom" },
              { label: "Anambra", value: "Anambra" },
              { label: "Bauchi", value: "Bauchi" },
              { label: "Bayelsa", value: "Bayelsa" },
              { label: "Benue", value: "Benue" },
              { label: "Borno", value: "Borno" },
              { label: "Cross River", value: "Cross River" },
              { label: "Delta", value: "Delta" },
              { label: "Ebonyi", value: "Ebonyi" },
              { label: "Edo", value: "Edo" },
              { label: "Ekiti", value: "Ekiti" },
              { label: "Enugu", value: "Enugu" },
              { label: "Gombe", value: "Gombe" },
              { label: "Imo", value: "Imo" },
              { label: "Jigawa", value: "Jigawa" },
              { label: "Kaduna", value: "Kaduna" },
              { label: "Kano", value: "Kano" },
              { label: "Katsina", value: "Katsina" },
              { label: "Kebbi", value: "Kebbi" },
              { label: "Kogi", value: "Kogi" },
              { label: "Kwara", value: "Kwara" },
              { label: "Lagos", value: "Lagos" },
              { label: "Nasarawa", value: "Nasarawa" },
              { label: "Niger", value: "Niger" },
              { label: "Ogun", value: "Ogun" },
              { label: "Ondo", value: "Ondo" },
              { label: "Osun", value: "Osun" },
              { label: "Oyo", value: "Oyo" },
              { label: "Plateau", value: "Plateau" },
              { label: "Rivers", value: "Rivers" },
              { label: "Sokoto", value: "Sokoto" },
              { label: "Taraba", value: "Taraba" },
              { label: "Yobe", value: "Yobe" },
              { label: "Zamfara", value: "Zamfara" },
            ]}
            name="State of residence"
            setValue={(val) => setHouseState(val)}
            value={houseState}
          />

          {/* occupation */}
          <DropdownElement
            data={[
              { label: "Self Employed", value: "Self Employed" },
              { label: "9 - 5 job", value: "9 - 5 job" },
              { label: "Student", value: "Student" },
            ]}
            name="Occupation"
            setValue={(val) => setRoomieOccupation(val)}
            value={roomieOccupation}
          />

          {/* monthly income */}
          <DropdownElement
            data={[
              { label: "5k - 10k", value: "5k - 10k" },
              { label: "10k - 20k", value: "10k - 20k" },
              { label: "20k - 50k", value: "20k - 50k" },
              { label: "100k - 200k", value: "100k - 200k" },
              { label: "200k - 300k", value: "200k - 300k" },
              { label: "300k - upwards", value: "300k - upwards" },
            ]}
            name="Monthly income"
            setValue={(val) => setRoomieIncome(val)}
            value={roomieIncome}
          />

          {/* Gender type */}
          <DropdownElement
            data={[
              { label: "Male", value: "Male" },
              { label: "Female", value: "Female" },
            ]}
            name="Gender"
            setValue={(val) => setRoomieGender(val)}
            value={roomieGender}
          />

          {/* spacer */}
          <View style={{ flex: 1 }} />

          {/* send */}
          <TouchableOpacity
            style={[FormsStyles.submitBtn, { marginTop: 10 }]}
            onPress={ButtonAction}
          >
            <Text
              style={[
                FormsStyles.submitBtntxt,
                { fontFamily: "Poppins_400Regular_Italic" },
              ]}
            >
              3/4 NEXT
            </Text>
          </TouchableOpacity>

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

