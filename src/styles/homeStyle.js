import { Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const { width } = Dimensions.get("window");

export const homeStyle = {
  container: {
    justifyContent: "space-between",
    marginTop: "12%",
    marginRight: "7%",
    flexDirection: "row",
    marginLeft: "7%",
  },

  mainTitle: {
    marginTop: "5%",
    textAlign: "left",
    fontSize: 20,
    fontWeight: "700",
    marginLeft: "8%",
    marginBottom: "5%",
  },

  subTitle: {
    width: wp("88%"),
    height: hp("18%"),
    padding: 15,
    marginTop: 18,
    // elevation: 1.8,
    backgroundColor: "#fff",
    borderBlockColor: "#fff",
    borderStyle: "solid",
    overflow: "hidden",
    borderRadius: 25,
    flexDirection: "row",
    position: "relative",
  },

  cardAlign: { alignItems: "center", overflow: "hidden" },

  shimerMain: { borderRadius: 12, height: 15, width: 100 },

  shimerMainDate: { borderRadius: 12, height: 15, width: 100, marginTop: 10 },

  assetTitle: { fontSize: 12, fontWeight: "500", marginLeft: 10 },

  dateTitle: { fontSize: 12, fontWeight: "500", marginLeft: 10, marginTop: 15 },

  cardAmount: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 15,
  },

  cardAmountShimmer: { borderRadius: 12, height: 35, width: 190 },

  currencyShimmer: { borderRadius: 12, height: 35, width: 80 },

  currencyTitle: { fontSize: 32, fontWeight: "700" },

  miniCardMain: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
    borderRadius: 21,
  },
  dashboardProfileOpen: {
    height: 36,
    width: 36,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "grey",
  },

  dashboardProfileClose: {
    height: 36,
    width: 36,
    borderRadius: 20,
    borderWidth: 1,
  },

  miniCardSub: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },

  miniCardBlurView: {
    width: 58,
    height: 58,
    elevation: 1.8,
    overflow: "hidden",
    borderRadius: 18,
    alignItems: "center",
    backgroundColor: "#fff",
  },

  walletImgAndTran: {
    height: 30,
    width: 30,
    marginTop: 14,
    resizeMode: "cover",
    aspectRatio: 1,
  },

  addFundImg: {
    height: 44,
    width: 44,
    marginTop: 6,
    resizeMode: "cover",
    aspectRatio: 1,
  },

  miniCardText: {
    fontSize: 10,
    fontWeight: "500",
    alignItems: "center",
    marginTop: 10,
  },

  miniCardTextAndImg: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },

  cardDetailsImg: {
    height: 26,
    width: 26,
    marginTop: 16,
    resizeMode: "cover",
    aspectRatio: 1,
  },

  activitiesMain: { marginVertical: "10%", marginHorizontal: "7%" },

  activitiesSub: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  activitiesTitle: { fontSize: 20, fontWeight: "700" },

  weeklyMain: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    height: 33,
    width: 80,
    elevation: 1.2,
  },

  weeklyTitle: { color: "#263238", fontSize: 12, fontWeight: "500" },

  btnMain: { marginHorizontal: 14, alignItems: "center", marginBottom: "20%" },

  btnGradient: {
    marginTop: 20,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    height: 50,
    width: 194,
    zIndex: 99,
  },

  btnGradientColour: ["#4c54d285", "#806bff"],

  btnTitle: { color: "#fff", fontSize: 12, fontWeight: "700" },

  // dropDown
  dropdown1: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    height: 33,
    width: 90,
    elevation: 1.2,
    position: "relative",
  },
  icon1: {
    marginRight: 5,
  },

  activeDrop: "#4c54d285",

  label1: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle1: {
    fontSize: 12,
    // color: 'grey',

    marginLeft: "20%",
    fontWeight: "700",
  },
  selectedTextStyle1: {
    fontSize: 12,
    fontWeight: "700",
    color: "#000",
    borderRadius: 12,
    marginLeft: "20%",
  },
  iconStyle1: {
    width: 20,
    height: 20,
  },
  inputSearchStyle1: {
    height: 40,
    fontSize: 16,
  },

  itemTextStyle: { color: "#000", fontWeight: "700", fontSize: 12 },

  iconStyleDrop: { marginRight: 3 },

  dropContainer: {
    borderRadius: 12,
    fontSize: 12,
    color: "#000",
  },
  powerbyMain: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    height: 50,
  },
  cardBhaipayImg: { resizeMode: "cover", height: 28, width: 28 },
  BhaipayImgText: { resizeMode: "cover", height: 10, width: 60, margin: 10 },

  bhaiFinnaceImg: { resizeMode: "cover", height: 30, width: 110 },

  cardBhaipayImgTitle: {
    fontSize: 10,
    fontWeight: "700",
    color: "#2F2D3D",
    marginTop: 6,
  },

  cardWrapper: {
    borderRadius: 8,
    overflow: "hidden",
  },

  card: {
    width: width * 0.9,
    height: width * 0.5,
  },
  cornerLabel: {
    position: "absolute",
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 8,
  },
  cornerLabelText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "600",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },
};
