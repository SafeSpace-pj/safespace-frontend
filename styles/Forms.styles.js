import { StyleSheet } from "react-native";
import { windowHeight } from "../utils/Dimensions";

export default StyleSheet.create({
  upper: {
    height: "40%",
    borderBottomRightRadius: 22,
    borderBottomLeftRadius: 22,
    width: "100%",
    backgroundColor: "#7472E0",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  upperTitle: {
    color: "white",
    fontFamily: "Poppins_700Bold",
    fontSize: 24,
  },
  body: {
    paddingHorizontal: "8%",
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: windowHeight / 12
  },
  uppertexts: {
    alignItems: "center",
    marginBottom: 54,
  },
  subtitle: {
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    color: "white",
  },

  //   forms
  formView: {
    width: "100%",
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    paddingVertical: 28,
    paddingHorizontal: 30,
    borderRadius: 22,
    alignItems: "center",
    width: "100%",
  },
  formText: {
    alignItems: "center",
  },
  formTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 18,
    paddingTop: 6,
    color: "#616161",
  },
  formsubtext: {
    fontFamily: "Poppins_400Regular",
    fontSize: 11,
    color: "#616161",
  },
  input: {
    // backgroundColor:'white',
    color: "#616161",
    fontFamily: "Poppins_400Regular",
  },
  radioMView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
  },
  radioitem: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioLabel: {
    fontFamily: "Poppins_400Regular",
    fontSize: 11,
  },
  submitBtn: {
    height: 50,
    borderRadius: 4,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7472E0",
  },
  submitBtntxt: {
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    color: "white",
  },
  ResetView: {
    width: "100%",
    alignItems: "flex-end",
    marginTop: 8,
  },
  ResetText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
  },

  //auth View
  AuthView: {
    width: "100%",
  },
  AuthBtn: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 24,
    marginVertical: 20,
    overflow: "hidden",
  },
  AuthBtnItem: {
    padding: 4
  }
});
