import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import AppStyles from "../../styles/AppStyles";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import VerificationCheckboxElement from "../../components/VerificationCheckboxElement.components";
import { TouchableOpacity } from "react-native";
import FormsStyles from "../../styles/Forms.styles";
import { BASE_URL } from "../../utils/config";
import axios from "axios";
import { StackActions } from "@react-navigation/native";

export default function Page4({ route, navigation }) {
  const { Notify, EditProfile } = useContext(AuthContext);

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
    house,
    houseState,
    roomieOccupation,
    roomieIncome,
    roomieGender,
  } = route.params;

  const [livingHabits, setLivingHabits] = useState(null);
  const [cleanHabits, setCleanHabits] = useState(null);
  const [personalSpace, setPersonalSpace] = useState(null);
  const [sharedResp, setSharedRes] = useState(null);
  const [niose, setNiose] = useState(null);
  const [food, setFood] = useState(null);
  const [greenPract, setGreenPract] = useState(null);
  const [guest, setGuest] = useState(null);
  const [communication, setCommunication] = useState(null);
  const [routines, setRoutines] = useState(null);
  const [pets, setPets] = useState(null);
  const [study, setStudy] = useState(null);
  const [climate, setClimate] = useState(null);
  const [homeDecor, setHomeDecor] = useState(null);

  const ButtonAction = async () => {
    if (
      livingHabits === null ||
      cleanHabits === null ||
      personalSpace === null ||
      sharedResp === null ||
      niose === null ||
      food === null ||
      greenPract === null ||
      guest === null ||
      communication === null ||
      routines === null ||
      pets === null ||
      study === null ||
      climate === null ||
      homeDecor === null
    ) {
      return Notify("Fill form acordingly");
    }

    const data = {
      Beneficiary: {
        Email: email,
        Fullname: fullname,
        Location: location,
      },
      Details: {
        ResidenceType: house,
        Occupation: occupation,
        State: stateRecidence,
        IncomeMonthly: income,
        Gender: gender,
        Bio: bio,
        PhoneNo: phone,
        RentSplit: rentSplit,
        RentBudget: budget,
      },
      Roomie: {
        HouseType: house,
        Occupation: roomieOccupation,
        State: houseState,
        IncomeMonthly: roomieIncome,
        Gender: roomieGender,
        Questions: [
          livingHabits === true ? "LivingHabit" : "NoLivingHabit",
          cleanHabits === true ? "Chores" : "NoChores",
          personalSpace === true ? "PersonalSpace" : "NoPersonalSpace",
          sharedResp === true
            ? "SharedResponsibility"
            : "NoSharedResponsibility",
          niose === true ? "Noise" : "NoNoise",
          food === true ? "FoodKitchen" : "NoFoodKitchen",
          greenPract === true ? "GreenPractices" : "NoGreenPractices",
          guest === true ? "Guests" : "NoGuests",
          communication === true
            ? "CommunicationConflict"
            : "NoCommunicationConflict",
          routines === true ? "PersonalRoutines" : "NoPersonalRoutines",
          pets === true ? "PetsAllergies" : "NoPetsAllergies",
          study === true ? "StudyWorks" : "NoStudyWorks",
          cleanHabits === true ? "ClimateTemprature" : "NoClimateTemprature",
          homeDecor === true ? "HomeDecore" : "NoHomeDecore",
        ],
      },
    };

    EditProfile(data)

    // const popAction = StackActions.pop(4);
    const popAction = StackActions.popToTop();
    return navigation.dispatch(popAction)
  };

  // setLoading(false);

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
          <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 15 }}>
            Your Roomie Preferences
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={true}
          alwaysBounceVertical={true}
          style={{ flex: 1 }}
          contentContainerStyle={{ gap: 12, padding: 24 }}
        >
          <VerificationCheckboxElement
            heading="General Living Habits"
            paragraphs="Do you prioritize cleanliness and organization in shared living spaces and are you proactive in maintaining a clean and tidy environment?"
            value={livingHabits}
            setValue={setLivingHabits}
          />
          <VerificationCheckboxElement
            heading="Cleaning and Chores"
            paragraphs="Are you willing to contribute to regular cleaning tasks, such as vacuuming, dusting, and bathroom upkeep and  can you follow a cleaning schedule or participate in rotating chore responsibilities?"
            value={cleanHabits}
            setValue={setCleanHabits}
          />
          <VerificationCheckboxElement
            heading="Personal Spaces"
            paragraphs="Do you keep your personal space neat and organized and are you respectful of others' personal spaces and their need for privacy?"
            value={personalSpace}
            setValue={setPersonalSpace}
          />
          <VerificationCheckboxElement
            heading="Shared Responsibilities"
            paragraphs="Are you open to discussing and dividing responsibilities for shared household tasks and are you willing to contribute to shared expenses and maintenance costs?"
            value={sharedResp}
            setValue={setSharedRes}
          />
          <VerificationCheckboxElement
            heading="Noise and Quiet Hours"
            paragraphs="Can you adhere to designated quiet hours or noise restrictions in the living space and are you considerate of others' need for a peaceful environment, especially during rest or study times?"
            value={niose}
            setValue={setNiose}
          />
          <VerificationCheckboxElement
            heading="Food and Kitchen"
            paragraphs="Are you comfortable sharing kitchen space and coordinating meal planning with housemates and do you prioritize cleanliness and organization in the kitchen and shared food storage areas?"
            value={food}
            setValue={setFood}
          />
          <VerificationCheckboxElement
            heading="Green Practices"
            paragraphs="Are you conscious of environmental sustainability and interested in implementing eco-friendly practices in the living space and are you open to discussing and implementing recycling, energy-saving, or water-conserving initiatives?"
            value={greenPract}
            setValue={setGreenPract}
          />
          <VerificationCheckboxElement
            heading="Guests and Socializing"
            paragraphs="Are you open to discussing guidelines for guests in the living space and are you willing to host social events or follow agreed-upon guest visitation policies?"
            value={guest}
            setValue={setGuest}
          />
          <VerificationCheckboxElement
            heading="Communication and Conflict Resolution"
            paragraphs="Are you comfortable with open communication and addressing conflicts that may arise and can you engage in discussions and seek mutually agreeable solutions?"
            value={communication}
            setValue={setCommunication}
          />
          {/* <VerificationCheckboxElement
            heading="Cleaning and Chores"
            paragraphs="Are you willing to contribute to regular cleaning tasks, such as vacuuming, dusting, and bathroom upkeep and can you follow a cleaning schedule or participate in rotating chore responsibilities?"
            value={cleanHabits}
            setValue={setCleanHabits}
          /> */}
          <VerificationCheckboxElement
            heading="Personal Routines"
            paragraphs="Do you have specific routines or preferences that may impact shared spaces or daily schedules and are you willing to accommodate and respect others' routines and preferences?"
            value={routines}
            setValue={setRoutines}
          />
          <VerificationCheckboxElement
            heading="Pets and Allergies"
            paragraphs="Do you have any allergies or sensitivities that may affect cohabitation with pets and are you open to discussing and establishing guidelines for pet ownership within the living space?"
            value={pets}
            setValue={setPets}
          />
          <VerificationCheckboxElement
            heading="Study or Work Spaces"
            paragraphs="Do you require a dedicated study or work area within the living space and Is it important for you to maintain an organized and quiet environment for your work or study needs?"
            value={study}
            setValue={setStudy}
          />
          <VerificationCheckboxElement
            heading="Climate and Temperature Preferences"
            paragraphs="Are you adaptable to different climate conditions or do you have specific temperature preferences for the living space and are you open to discussing and finding compromises regarding heating, cooling, or ventilation preferences?"
            value={climate}
            setValue={setClimate}
          />
          <VerificationCheckboxElement
            heading="Home Decor and Aesthetics"
            paragraphs="Are you open to collaborating on home decor decisions and creating a cohesive living environment and do you have any specific design preferences or concerns regarding shared living spaces?"
            value={homeDecor}
            setValue={setHomeDecor}
          />

          {/* send */}
          <TouchableOpacity
            style={[FormsStyles.submitBtn, { marginTop: 10 }]}
            onPress={ButtonAction}
          >
            <Text
              style={[
                FormsStyles.submitBtntxt,
                // { fontFamily: "Poppins_400Regular_Italic" },
              ]}
            >
              Update Profile
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
