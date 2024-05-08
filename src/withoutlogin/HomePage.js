// import { View, Text, StyleSheet, Image } from "react-native";
// import React, { useState } from "react";
// import Carousel, { Pagination } from "react-native-x-carousel";
// import { homeStyle } from "../styles/homeStyle";
// import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
// import moment from "moment";
// import { BlurView } from "expo-blur";
// import { LinearGradient } from "expo-linear-gradient";
// import { ICONS, constant } from "../constants/Contant";
// import { GradientHOC } from "../HOC/Gradient.hoc";
// import Header from "../components/CommonHeader.component";
// import StocksListComponent from "../components/StocksList.component";

// const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

// const HomePage = () => {
//   const [isShowShimmerLoader, setIsShowShimmerLoader] = useState(true);

//   const handleSearch = () => {};

//   const DATA = [
//     {
//       name: "Days on the market",
//       cornerLabelText: "1",
//       upValue: "23.0%",
//       downValue: "0.89%",
//       count: 1839,
//       downImg: ICONS.downArrowImgImg,
//       upImg: ICONS.upArrowImg,
//     },

//     {
//       name: "Members",
//       cornerLabelText: "2",
//       upValue: "23.0%",
//       downValue: "0.89%",
//       count: 5812,
//       downImg: ICONS.downArrowImgImg,
//       upImg: ICONS.upArrowImg,
//     },

//     {
//       name: "Arbitrage pools",
//       cornerLabelText: "3",
//       upValue: "23.0%",
//       downValue: "0.89%",
//       count: "$374 103",
//       downImg: ICONS.downArrowImgImg,
//       upImg: ICONS.upArrowImg,
//     },

//     {
//       name: "Total paid",
//       cornerLabelText: "9",
//       upValue: "23.0%",
//       downValue: "0.89%",
//       count: "$100 812",
//       downImg: ICONS.downArrowImgImg,
//       upImg: ICONS.upArrowImg,
//     },
//   ];

//   const renderCarousel = (data) => (
//     <View
//       key={data.cornerLabelText}
//       style={{ padding: 6, marginHorizontal: 10 }}
//     >
//       <BlurView intensity={90} style={styles.subTitle}>
//         <View
//           style={{
//             flexDirection: "row",
//             justifyContent: "space-between",
//             width: "100%",
//             alignItems: "baseline",
//           }}
//         >
//           <View style={{ flexDirection: "row" }}>
//             <Image source={data?.upImg} style={{ height: 20, width: 20 }} />
//             <Text style={{ color: "green" }}>{data?.upValue}</Text>
//           </View>
//           <View style={{ flexDirection: "row" }}>
//             <Image source={data?.downImg} style={{ height: 20, width: 20 }} />
//             <Text style={{ color: "red" }}>{data?.downValue}</Text>
//           </View>
//         </View>
//         <View
//           style={{
//             justifyContent: "center",
//             alignItems: "center",
//             position: "absolute",
//             top: 0,
//             bottom: 0,
//             left: 0,
//             right: 0,
//           }}
//         >
//           <Text style={{ fontSize: 22, fontWeight: "500" }}>{data?.count}</Text>
//           <Text style={{ fontSize: 16, color: "grey" }}>{data?.name}</Text>
//         </View>
//       </BlurView>
//     </View>
//   );

//   return (
//     <View style={{ flex: 1 }}>
//       <Header onSearch={handleSearch} />

//       <View style={{ marginTop: "4%", paddingHorizontal: 20 }}>
//         <Text style={{ color: "#000", fontSize: 14, fontWeight: "500" }}>
//           Market Indices
//         </Text>
//         <View style={{ alignSelf: "center", overflow: "hidden" }}>
//           <Carousel
//             loop={true}
//             autoplay={true}
//             autoplayInterval={2000}
//             pagination={Pagination}
//             renderItem={renderCarousel}
//             data={DATA}
//             style={{ overflow: "hidden" }}
//           />
//         </View>
//         <Text
//           style={{
//             color: "#000",
//             fontSize: 15,
//             fontWeight: "500",
//             marginVertical: "10%",
//           }}
//         >
//           Arbitration deals
//         </Text>
//         {/* <StocksListComponent /> */}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create(homeStyle);

// export default GradientHOC(HomePage);

import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import Header from "../components/CommonHeader.component";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import Carousel, { PaginationLight } from "react-native-x-carousel";
import { ICONS } from "../constants/Contant";
import { stocksStyle } from "../styles/stocksStyle";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const HomePage = ({ navigation }) => {
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
      bannerImg: ICONS.bannerImg,
      idx: 1,
    },
  ];

  const [isShowShimmerLoader, setIsShowShimmerLoader] = useState(false);

  const [isDisableBuyAnSellBtn, setIsDisableBuyAnSellBtn] = useState(false);

  const [isCarouselPage, setIsCarouselPage] = useState("");

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

  const onBuyStocks = () => {
    switch (isCarouselPage) {
      case 2:
        navigation.navigate("StockList", "Robinhood");
        break;
      case 3:
        navigation.navigate("StockList", "Fidelity");
        break;
    }
  };

  // const renderItem = (data) => (
  //   <View
  //     key={data?.cornerLabelText}
  //     style={{ padding: 6, marginHorizontal: 10 }}
  //   >
  //     <BlurView intensity={90} style={styles.subTitle}>
  //       <View
  //         style={{
  //           flexDirection: "row",
  //           justifyContent: "space-between",
  //           width: "100%",
  //           alignItems: "baseline",
  //         }}
  //       >
  //         <View style={{ flexDirection: "row" }}>
  //           <Image source={data?.upImg} style={{ height: 20, width: 20 }} />
  //           <Text style={{ color: "green" }}>{data?.upValue}</Text>
  //         </View>
  //         <View style={{ flexDirection: "row" }}>
  //           <Image source={data?.downImg} style={{ height: 20, width: 20 }} />
  //           <Text style={{ color: "red" }}>{data?.downValue}</Text>
  //         </View>
  //       </View>
  //       <View
  //         style={{
  //           justifyContent: "center",
  //           alignItems: "center",
  //           position: "absolute",
  //           top: 0,
  //           bottom: 0,
  //           left: 0,
  //           right: 0,
  //         }}
  //       >
  //         <Text style={{ fontSize: 22, fontWeight: "500" }}>{data?.count}</Text>
  //         <Text style={{ fontSize: 16, color: "grey" }}>{data?.name}</Text>
  //       </View>
  //     </BlurView>
  //   </View>
  // );

  const renderItem = (data) => (
    <BlurView key={data?.idx} intensity={90} style={styles.subTitle}>
      <Image
        source={data?.bannerImg}
        style={{ width: "100%", objectFit: "fill", height: hp("20%") }}
      />
    </BlurView>
  );
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;

  const handleSearch = () => {
    console.log();
  };
  return (
    <ScrollView>
      <Header onSearch={handleSearch} />
      {/* <Text style={styles.mainTitle}>Welcome, Jorge.</Text> */}

      <View style={{ alignSelf: "center", overflow: "hidden" }}>
        <Carousel
          loop
          pagination={PaginationLight}
          // autoplayInterval={2700}
          renderItem={renderItem}
          data={ADDS}
          style={{ overflow: "hidden" }}
          onPage={onCarouselPageChange}
        />
      </View>

      <ScrollView horizontal={true}>
        {DATA.map((data, i) => (
          <TouchableOpacity
            key={data?.i}
            style={{
              overflow: "hidden",
              marginLeft: 10,
            }}
          >
            <BlurView
              style={{
                backgroundColor: "#fff",
                height: 80,
                width: 150,
                borderRadius: 12,
                overflow: "hidden",
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "baseline",
                  marginBottom: "auto",
                  marginTop: "10%",
                }}
              >
                <View style={{ flexDirection: "row", marginLeft: 7 }}>
                  <Image
                    source={data?.upImg}
                    style={{ height: 20, width: 20 }}
                  />
                  <Text style={{ fontSize: 10, color: "green" }}>
                    {data?.upValue}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", marginRight: 7 }}>
                  <Image
                    source={data?.downImg}
                    style={{ height: 20, width: 20 }}
                  />
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {data?.downValue}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                }}
              >
                <Text style={{ fontSize: 11, fontWeight: "500" }}>
                  {data?.count}
                </Text>
                <Text style={{ fontSize: 10, color: "grey" }}>
                  {data?.name}
                </Text>
              </View>
            </BlurView>
          </TouchableOpacity>
        ))}
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create(stocksStyle);

export default HomePage;
