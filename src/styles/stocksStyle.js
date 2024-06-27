import { Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MAINCOLORS } from "../Common/Color";
const { width } = Dimensions.get("window");

export const stocksStyle = {
  container: {
    justifyContent: "space-between",
    marginTop: "12%",
    marginRight: "7%",
    flexDirection: "row",
    marginLeft: "7%",
  },

  backIconContainer: {
    marginTop: "15%",
    marginRight: "7%",
    flexDirection: "row",
    marginLeft: "7%",
    gap: 115,
    alignItems: "center",
  },

  backIcon: { resizeMode: "cover", height: 20, width: 15 },

  stocksListTitle: { fontSize: 16, fontWeight: "700", textAlign: "center" },

  mainTitle: {
    marginTop: "2%",
    textAlign: "left",
    fontSize: 20,
    fontWeight: "700",
    marginLeft: "8%",
    marginBottom: "5%",
  },

  subTitle: {
    width: wp("88%"),
    height: hp("20%"),
    // height: "auto",
    objectFit: "contain",
    padding: 15,
    marginTop: 18,
    // elevation: 1.8,
    borderBlockColor: "#fff",
    borderStyle: "solid",
    overflow: "hidden",
    borderRadius: 25,
    // backgroundColor: "#fff",
  },

  cardAlign: { alignItems: "center", overflow: "hidden" },

  shimerMain: { borderRadius: 12, height: 15, width: 100 },

  dateTitle: { fontSize: 12, fontWeight: "500", marginLeft: 10, color: "#fff" },

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

  activitiesMian: { marginVertical: "10%", marginHorizontal: "7%" },

  activitiesSub: {
    flex: 1,
    flexDirection: "row",
    // justifyContent: "space-between",
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

  btnMain: { marginHorizontal: 14, alignItems: "center" },

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

  cardBhaipayImg: { resizeMode: "cover", height: 28, width: 28 },
  BhaipayImgText: { resizeMode: "cover", height: 10, width: 60, margin: 10 },

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

  modalMain: {
    backgroundColor: "#000",
    marginTop: "13%",
    elevation: 1,
    zIndex: 1,
  },

  modalCenter: { alignItems: "center" },

  modalPadding: { padding: 10 },

  modalCloseBtn: { height: 5, width: 46, padding: 5 },

  modalCloseBtnIcon: {
    resizeMode: "cover",
    height: 5,
    width: 46,
    opacity: 0.8,
  },

  justifyContentBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  marginBhaiPay: {
    alignSelf: "center",
    flexDirection: "row",
    marginVertical: "auto",
  },

  buyMain: {
    backgroundColor: "#fff",
    height: 60,
    width: 140,
    borderRadius: 27,
    overflow: "hidden",
  },
  buySub: {
    flex: 1,
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginHorizontal: 10,
  },

  buyImg: {
    height: 39,
    width: 39,
    marginTop: 10,
    resizeMode: "contain",
  },

  disableSell: {
    height: 60,
    width: 140,
    borderRadius: 27,
    overflow: "hidden",
  },
  disableBuy: {
    height: 60,
    width: 140,
    borderRadius: 27,
    overflow: "hidden",
  },
  disableBuyNSellText: {
    textAlign: "center",
    paddingTop: 20,
    fontSize: 13,
    color: "#848484",
  },

  listContainer: {
    height: 370,
    width,
    backgroundColor: "#fff",
    borderTopRightRadius: 47,
    borderTopLeftRadius: 47,
    alignSelf: "center",
  },

  shareText: {
    marginLeft: "4%",
    fontSize: 12,
    fontWeight: "700",
    color: "grey",
  },
  listMain: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
  },
  listIcon: { height: 35, width: 35, borderRadius: 30 },

  listName: {
    fontSize: 12,
    fontWeight: "700",
    padding: 6,
    marginLeft: 10,
  },

  incrementPrice: {
    fontSize: 10,
    color: "#38B000",
    textAlign: "right",
  },
  bannerMain: {
    height: 60,
    backgroundColor: "#93e7932b",
    overflow: "hidden",
    padding: 1,
  },

  bannerImg: {
    height: 28,
    width: 28,
    resizeMode: "contain",
  },

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  touchable: {
    overflow: "hidden",
    marginLeft: 10,
  },
  blurView: {
    height: 120,
    width: 160,
    borderRadius: 12,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    backgroundColor: MAINCOLORS.primary,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "baseline",
    marginBottom: "auto",
    marginTop: "10%",
  },
  row: {
    flexDirection: "row",
    marginHorizontal: 7,
  },
  icon: {
    height: 20,
    width: 20,
  },
  positiveText: {
    fontSize: 10,
    color: "green",
  },
  negativeText: {
    fontSize: 10,
    color: "red",
  },
  centerContent: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  currentPrice: {
    fontSize: 11,
    fontWeight: "500",
    color: "black",
  },
  indexName: {
    fontSize: 13,
    fontWeight: "500",
    color: "black",
  },
};
