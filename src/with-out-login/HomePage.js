import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import Carousel, { PaginationLight } from "react-native-x-carousel";
import {
  ARBITRATION_LIST,
  COLOURS,
  ICONS,
  LINE_CHART_CONFIG,
  LINE_CHART_CONFIG_GREEN,
  LINE_CHART_DATA,
  LINE_CHART_DATA_GREEN,
  LINE_CHART_DATA_RED,
  LIVE_MARKET_LIST,
  OUR_FEATURES,
  data1,
} from "../constants/Contant";
import { stocksStyle } from "../styles/stocksStyle";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DataTable } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Modal from "react-native-modal";
import { LineChart } from "react-native-chart-kit";
import { MaterialIcons } from "@expo/vector-icons";
import { GradientHOC } from "../HOC/Gradient.hoc";
import { cronAPI, formatPrice, stockAPI } from "../services/Auth.service";
import { MAINCOLORS } from "../Common/Color";
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
const screenWidth = Dimensions.get("window").width;
const HomePage = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isShowShimmerLoader, setIsShowShimmerLoader] = useState(false);
  const [isDisableBuyAnSellBtn, setIsDisableBuyAnSellBtn] = useState(false);
  const [isCarouselPage, setIsCarouselPage] = useState("");
  const [isVisibleChart, setVisibleChart] = useState("green");

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const DATA = [
    {
      name: "Days on the market",
      cornerLabelText: "1",
      upValue: "23.0%",
      // downValue: "0.89%",
      count: 1839,
      // downImg: ICONS.downArrowImgImg,
      upImg: ICONS.upArrowImg,
    },

    {
      name: "Members",
      cornerLabelText: "2",
      upValue: "23.0%",
      // downValue: "0.89%",
      count: 5812,
      // downImg: ICONS.downArrowImgImg,
      upImg: ICONS.upArrowImg,
    },

    {
      name: "Arbitrage pools",
      cornerLabelText: "3",
      // upValue: "23.0%",
      downValue: "0.89%",
      count: "$374 103",
      downImg: ICONS.downArrowImgImg,
      // upImg: ICONS.upArrowImg,
    },

    {
      name: "Total paid",
      cornerLabelText: "9",
      upValue: "23.0%",
      // downValue: "0.89%",
      count: "$100 812",
      // downImg: ICONS.downArrowImgImg,
      upImg: ICONS.upArrowImg,
    },
  ];

  const ADDS = [
    {
      bannerImg: ICONS.home1Img,
      idx: 1,
    },
    {
      bannerImg: ICONS.home2Img,
      idx: 2,
    },
    {
      bannerImg: ICONS.home3Img,
      idx: 3,
    },
  ];

  setTimeout(() => {
    setIsShowShimmerLoader(true);
  }, 2000);

  const onCarouselPageChange = (page) => {
    setIsCarouselPage(page?.current);
    switch (page?.current) {
      case 1:
        setIsDisableBuyAnSellBtn(false);
        break;
      case 2:
        setIsDisableBuyAnSellBtn(false);
        break;
      case 3:
        setIsDisableBuyAnSellBtn(false);
        break;
    }
  };

  const renderItem = (data) => (
    <BlurView
      key={data?.idx}
      style={{
        width: wp("88%"),
        height: hp("20%"),
        // height: "auto",

        // elevation: 1.8,
        borderBlockColor: "#fff",
        borderStyle: "solid",
        overflow: "hidden",
        borderRadius: 25,
      }}
    >
      <Image
        source={data?.bannerImg}
        style={{ width: "100%", objectFit: "fill", height: hp("20%") }}
      />
    </BlurView>
  );
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;

  const data = [
    {
      "Bank Nifty": 42472.55078125,
      Bitcoin: 60962.71875,
      DAX: 18144.880859375,
      "Dow Jones": 39411.2109375,
      "EUR/INR": 89.47149658203125,
      Ethereum: 3364.50537109375,
      "FTSE 100": 8290.23046875,
      Gold: 2338.39990234375,
      Nasdaq: 17496.8203125,
      "Nifty 50": 23662.55078125,
      "S&P 500": 5447.8701171875,
      Sensex: 77792.5078125,
      Silver: 29.56999969482422,
      "USD/INR": 83.43499755859375,
    },
  ];

  const data1 = [
    {
      "Bank Nifty": 42472,
      Bitcoin: 60962,
      DAX: 18144.59375,
      "Dow Jones": 39411.2109375,
      "EUR/INR": 89.47149658203125,
      Ethereum: 3364.50537109375,
      "FTSE 100": 8290.23046875,
      Gold: 2338.39990234375,
      Nasdaq: 17496.8203125,
      "Nifty 50": 23662.55078125,
      "S&P 500": 5447.8701171875,
      Sensex: 77792.5078125,
      Silver: 29.56999969482422,
      "USD/INR": 83.43499755859375,
    },
  ];

  const compareValues = (data, data1) => {
    const keys = Object.keys(data[0]);
    return keys.map((key) => {
      const value1 = data[0][key];
      const value2 = data1[0][key];
      const difference = value2 - value1;
      return { key, difference };
    });
  };

  const [stocks, setStocks] = useState();

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await cronAPI();
    //     console.log("response:cronAPI ", response);
    //     if (response) {
    //       setStocks(response?.live[0]);
    //     }
    //   } catch (error) {
    //     console.log("error:cronAPI ", error);
    //   }
    // };
    // fetchData();
  }, []);

  const formatPrice = (price) => {
    return price.toFixed(2);
  };

  const getArrowAndText = (value) => {
    // console.log('value: ', value);
    if (value > 0) {
      return {
        arrow: ICONS.upArrowImg,
        text: value.toFixed(2),
        color: "green",
      };
    } else if (value < 0) {
      return {
        arrow: ICONS.downArrowImgImg,
        text: value.toFixed(2),
        color: "red",
      };
    } else {
      return {
        arrow: null,
        text: value.toFixed(2),
        color: "black",
      };
    }
  };
  const comparisons = compareValues(data, data1);
  return (
    <ScrollView className="bg-slate-300">
      <View className="flex-row justify-between items-center pt-8 px-5">
        <View>
          <Text className="font-bold text-xl">Lets make your </Text>
          <Text className="font-bold text-xl text-green-700">account!</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("signUp");
          }}
        >
          <Text className="font-medium">Login / Register?</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-center mt-3">
        <Carousel
          loop={true}
          pagination={PaginationLight}
          autoplayInterval={5000}
          autoplay={true}
          renderItem={renderItem}
          data={ADDS}
          onPage={onCarouselPageChange}
        />
      </View>

      {/* <View style={styles.container}>
        {comparisons.map(({ key, difference }) => (
          <Text key={key} style={styles.text}>
            {key}:{" "}
            {difference > 0
              ? "Increased"
              : difference < 0
              ? "Decreased"
              : "No Change"}{" "}
            ({difference.toFixed(6)})
          </Text>
        ))}
      </View> */}
      <ScrollView horizontal={true}>
        {data && (
          <>
            {Object.entries(data[0]).map(([key, value], idx) => {
              const { arrow, text, color } = getArrowAndText(value);
              return (
                <TouchableOpacity key={idx} style={styles.touchable}>
                  <BlurView blurAmount={0.5} style={styles.blurView}>
                    <View style={styles.header}>
                      <View style={styles.row}>
                        {arrow && <Image source={arrow} style={styles.icon} />}
                        <Text style={[styles.text, { color }]}>{text}</Text>
                      </View>
                    </View>
                    <View style={styles.centerContent}>
                      <Text style={styles.currentPrice}>
                        {formatPrice(value)}
                      </Text>
                      <Text style={styles.indexName}>{key}</Text>
                    </View>
                  </BlurView>
                </TouchableOpacity>
              );
            })}
          </>
        )}
      </ScrollView>

      {/* share list */}
      <View
        style={{
          height,
          width,
          backgroundColor: "#fff",
          borderTopRightRadius: 47,
          borderTopLeftRadius: 47,
          alignSelf: "center",
        }}
      >
        <View style={{ padding: 10 }}>
          <View style={{ alignSelf: "center" }}>
            <Image
              style={{ height: 6, width: 50, borderRadius: 30 }}
              source={ICONS?.swipeImg}
              fadeDuration={0}
            />
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <View style={{ marginVertical: "6%" }}>
              <Text
                style={{
                  marginLeft: "4%",
                  fontSize: 12,
                  fontWeight: "700",
                  color: "grey",
                }}
              >
                SHARES
              </Text>
            </View>
            {/* tesla */}
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{ height: 35, width: 35, borderRadius: 30 }}
                  source={ICONS.teslaImg}
                  fadeDuration={0}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "700",
                    padding: 6,
                    marginLeft: 10,
                  }}
                >
                  Tesla
                </Text>
              </View>

              <View>
                <Text style={{ fontSize: 12, fontWeight: "700" }}>
                  $29,850.15{" "}
                </Text>
                <Text
                  style={{ fontSize: 10, color: "#38B000", textAlign: "right" }}
                >
                  +3.04%{" "}
                </Text>
              </View>
            </View>
            {/* motogp */}
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{ height: 35, width: 35, borderRadius: 30 }}
                  source={ICONS.motogpImg}
                  fadeDuration={0}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "700",
                    padding: 6,
                    marginLeft: 10,
                  }}
                >
                  Moto GP
                </Text>
              </View>

              <View>
                <Text style={{ fontSize: 12, fontWeight: "700" }}>$17.04 </Text>
                <Text
                  style={{ fontSize: 10, color: "#F52419", textAlign: "right" }}
                >
                  +0.67%{" "}
                </Text>
              </View>
            </View>
            {/* pepsico */}
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{ height: 35, width: 35, borderRadius: 30 }}
                  source={ICONS.pepsicoImg}
                  fadeDuration={0}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "700",
                    padding: 6,
                    marginLeft: 10,
                  }}
                >
                  Pepsico
                </Text>
              </View>

              <View>
                <Text style={{ fontSize: 12, fontWeight: "700" }}>
                  $107.04{" "}
                </Text>
                <Text
                  style={{ fontSize: 10, color: "#38B000", textAlign: "right" }}
                >
                  +0.67%{" "}
                </Text>
              </View>
            </View>
            {/* hathway */}
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{ height: 35, width: 35, borderRadius: 30 }}
                  source={ICONS.hathwayImg}
                  fadeDuration={0}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "700",
                    padding: 6,
                    marginLeft: 10,
                  }}
                >
                  Hathway
                </Text>
              </View>

              <View>
                <Text style={{ fontSize: 12, fontWeight: "700" }}>$27.04 </Text>
                <Text
                  style={{ fontSize: 10, color: "#38B000", textAlign: "right" }}
                >
                  +1.67%{" "}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* table */}
        <View className="px-3">
          <View className="flex-row items-center gap-2 justify-center">
            <AntDesign name="doubleleft" size={20} color="blue" />

            <Text className="text-lg  text-black font-bold  py-5">
              Arbitration deals
            </Text>
            <AntDesign name="doubleright" size={20} color="blue" />
          </View>
          <DataTable className="rounded bg-slate-100">
            <DataTable.Header className="text-white">
              <DataTable.Title>
                <Text className="text-black font-bold text-center">Pair</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text className="text-black font-bold text-center">
                  Buying Price
                </Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text className="text-black font-bold text-center">
                  Selling Price
                </Text>
              </DataTable.Title>
            </DataTable.Header>

            {ARBITRATION_LIST?.map((d, idx) => (
              <DataTable.Row
                key={idx}
                style={{ width: "100%" }}
                onPress={toggleModal}
              >
                <DataTable.Cell>
                  <View className="flex-row items-center  gap-1 me-10 w-full">
                    <FontAwesome name="bitcoin" size={15} color="#e5f13e" />
                    <Text className="text-black font-bold text-center ">
                      {d?.name}
                    </Text>
                  </View>
                </DataTable.Cell>
                <DataTable.Cell>
                  <View className="flex-row  items-center justify-center gap-1 w-full text-center">
                    <FontAwesome name="dollar" size={15} color="green" />

                    <Text className="text-black font-bold text-left ">
                      {d?.buyingPrice}
                    </Text>
                  </View>
                </DataTable.Cell>
                <DataTable.Cell>
                  <View className="flex-row items-center justify-center  gap-1">
                    <FontAwesome name="dollar" size={15} color="red" />
                    <Text className="text-black font-bold text-center ">
                      {d?.sellingPrice}
                    </Text>
                  </View>
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
          {/* table end */}
        </View>
      </View>
      {/* share list end */}

      {/* Our features */}
      <View className="px-3 pb-6 bg-white">
        <View className="flex-row items-center gap-2 justify-center">
          <AntDesign name="doubleleft" size={20} color="blue" />

          <Text className="text-lg  text-black font-bold  py-5">
            Our features
          </Text>
          <AntDesign name="doubleright" size={20} color="blue" />
        </View>
        {OUR_FEATURES?.map((d, idx) => (
          <View
            key={idx}
            className="h-36 bg-slate-100 rounded-xl p-3 border-2 border-indigo-500 mb-5"
          >
            <View className="h-9 w-9  border-2 border-indigo-500 flex-row justify-center items-center rounded-3xl">
              <MaterialIcons name={d?.icon} size={24} color="blue" />
            </View>
            <Text className="text-center font-bold text-lg">{d?.name}</Text>
            <Text className="text-center  text-md">{d?.Description}</Text>
          </View>
        ))}
      </View>
      {/* Our features end */}

      {/* Modal start */}

      <View style={{ flex: 1 }}>
        <Modal
          className="bg-white rounded-xl"
          isVisible={isModalVisible}
          animationIn="jello"
          onBackdropPress={toggleModal}
        >
          <ScrollView style={{ flex: 1 }}>
            <View className="px-4 pt-3">
              <Text className="text-sm font-bold p-1">
                Live Market Snapshot
              </Text>
              {LIVE_MARKET_LIST?.map((d, idx) => (
                <View className="py-3" key={idx}>
                  <View className="flex-row justify-between">
                    <Text className="text-xs text-grey">{d?.todayOpen}</Text>
                    <Text className="text-xs text-grey">{d?.todayClose}</Text>
                  </View>

                  <View className="flex-row justify-between py-2">
                    <Text className="text-sm text-grey">{d?.lowPrice}</Text>
                    <Text className="text-sm text-grey">{d?.highPrice}</Text>
                  </View>
                </View>
              ))}
            </View>

            <React.Fragment>
              <Text className="text-sm font-bold py-4 px-4">
                Share PerFormance
              </Text>
              {isVisibleChart === "red" && (
                <LineChart
                  data={LINE_CHART_DATA_RED}
                  height={220}
                  width={Dimensions.get("window").width - 19}
                  chartConfig={LINE_CHART_CONFIG}
                  bezier
                  segments={5}
                  withVerticalLines={false}
                  withHorizontalLines={false}
                  withVerticalLabels={false}
                  withHorizontalLabels={false}
                />
              )}
              {isVisibleChart === "green" && (
                <LineChart
                  data={LINE_CHART_DATA_GREEN}
                  height={220}
                  width={Dimensions.get("window").width - 19}
                  chartConfig={LINE_CHART_CONFIG_GREEN}
                  bezier
                  segments={5}
                  withVerticalLines={false}
                  withHorizontalLines={false}
                  withHorizontalLabels={false}
                />
              )}
            </React.Fragment>

            <TouchableOpacity
              className="mt-24 mx-5 bg-slate-300 w-16 h-7 flex justify-center items-center rounded"
              onPress={toggleModal}
            >
              <Text className="font-bold">Close</Text>
            </TouchableOpacity>
          </ScrollView>
        </Modal>
      </View>

      {/* Modal end */}
    </ScrollView>
  );
};

const styles = StyleSheet.create(stocksStyle);

export default HomePage;
