import { StyleSheet } from "react-native";
import { windowHeight } from "../utils/Dimensions";

export default StyleSheet.create({
  upper: {
    height: "18%",
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    width: "100%",
    backgroundColor: "#7472E0",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "6%"
  },
  upperTitle: {
    color: "white",
    fontFamily: "Poppins_700Bold",
    fontSize: 24,
  },
  body: {
    padding: 24,
    paddingTop: 16
  },
  heading: {
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
    color: "#000000B2",
    textAlign: "left",
  },
  upperBanner: {
    height: "40%",
    width: "100%",
    backgroundColor: "#7472E0",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  upperBannerImage: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  minusBody: {
    marginTop: -24,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    flex: 1
  },
  contactButton: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#7472E0",
    borderRadius: 4,
    paddingVertical: 10
  },
  contactButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
  },
  formView: {
    width: "100%",
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    padding: 24,
    borderRadius: 22,
    width: "100%",
  },
});
