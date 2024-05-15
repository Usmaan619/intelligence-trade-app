

import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import Header from "../components/CommonHeader.component";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import Carousel, { PaginationLight } from "react-native-x-carousel";
import { ARBITRATION_LIST, ICONS, LINE_CHART_CONFIG, LINE_CHART_CONFIG_GREEN, LINE_CHART_DATA, LINE_CHART_DATA_GREEN, LINE_CHART_DATA_RED, LIVE_MARKET_LIST, OUR_FEATURES } from "../constants/Contant";
import { stocksStyle } from "../styles/stocksStyle";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DataTable } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Modal from "react-native-modal";
import { LineChart } from "react-native-chart-kit";
import { MaterialIcons } from '@expo/vector-icons';
import { GradientHOC } from "../HOC/Gradient.hoc";
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
const screenWidth = Dimensions.get("window").width;
const HomePage = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isShowShimmerLoader, setIsShowShimmerLoader] = useState(false);
  const [isDisableBuyAnSellBtn, setIsDisableBuyAnSellBtn] = useState(false);
  const [isCarouselPage, setIsCarouselPage] = useState("");
  const [isVisibleChart, setVisibleChart] = useState('green');

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
      bannerImg: ICONS.bannerImg,
      idx: 1,
    },
    {
      bannerImg: ICONS.bannerImg,
      idx: 2,
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
      <View
        className='flex-row justify-center'
      >
        <Carousel
          loop={true}
          pagination={PaginationLight}
          autoplayInterval={2000}
          autoplay={true}
          renderItem={renderItem}
          data={ADDS}
          onPage={onCarouselPageChange}
        />
      </View>

      <ScrollView horizontal={true}>
        {DATA.map((data, idx) => (
          <TouchableOpacity
            key={idx}
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

              <View >
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
        <View className='px-3'>
          <View className='flex-row items-center gap-2 justify-center'>
            <AntDesign name="doubleleft" size={20} color="blue" />

            <Text className='text-lg  text-black font-bold  py-5'>
              Arbitration deals
            </Text>
            <AntDesign name="doubleright" size={20} color="blue" />


          </View>
          <DataTable className='rounded bg-slate-100'>
            <DataTable.Header className='text-white'>
              <DataTable.Title >
                <Text className='text-black font-bold text-center'>
                  Pair
                </Text>
              </DataTable.Title>
              <DataTable.Title >
                <Text className='text-black font-bold text-center'>
                  Buying Price
                </Text>

              </DataTable.Title>
              <DataTable.Title >
                <Text className='text-black font-bold text-center'>
                  Selling Price
                </Text>
              </DataTable.Title>
            </DataTable.Header>

            {ARBITRATION_LIST?.map((d, idx) => (
              <DataTable.Row key={idx} style={{ width: '100%' }} onPress={toggleModal}>
                <DataTable.Cell >
                  <View className='flex-row items-center  gap-1 me-10 w-full'>

                    <FontAwesome name="bitcoin" size={15} color="#e5f13e" />
                    <Text className='text-black font-bold text-center '>
                      {d?.name}
                    </Text>
                  </View>
                </DataTable.Cell>
                <DataTable.Cell>

                  <View className='flex-row  items-center justify-center gap-1 w-full text-center'>

                    <FontAwesome name="dollar" size={15} color="green" />

                    <Text className='text-black font-bold text-left '>
                      {d?.buyingPrice}
                    </Text>
                  </View>

                </DataTable.Cell>
                <DataTable.Cell>
                  <View className='flex-row items-center justify-center  gap-1'>
                    <FontAwesome name="dollar" size={15} color="red" />
                    <Text className='text-black font-bold text-center '>
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

      {/* Modal start */}

      <View style={{ flex: 1 }}>
        <Modal className='bg-white rounded-xl' isVisible={isModalVisible} animationIn='jello'
          onBackdropPress={toggleModal}
        >
          <ScrollView style={{ flex: 1 }} >
            <View className='px-4 pt-3'>


              <Text className='text-sm font-bold p-1'>Live Market Snapshot</Text>
              {LIVE_MARKET_LIST?.map((d, idx) => (

                <View className='py-3' key={idx}>
                  <View className='flex-row justify-between'>
                    <Text className='text-xs text-grey'>{d?.todayOpen}</Text>
                    <Text className='text-xs text-grey'>{d?.todayClose}</Text>
                  </View>

                  <View className='flex-row justify-between py-2'>
                    <Text className='text-sm text-grey'>{d?.lowPrice}</Text>
                    <Text className='text-sm text-grey'>{d?.highPrice}</Text>
                  </View>
                </View>
              ))}
            </View>

            <React.Fragment>
              <Text className='text-sm font-bold py-4 px-4' >Share PerFormance</Text>
              {isVisibleChart === 'red' &&
                <LineChart
                  data={LINE_CHART_DATA_RED}
                  height={220}
                  width={Dimensions.get('window').width - 19}
                  chartConfig={LINE_CHART_CONFIG}
                  bezier
                  segments={5}
                  withVerticalLines={false}
                  withHorizontalLines={false}
                  withVerticalLabels={false}
                  withHorizontalLabels={false}

                />
              }
              {isVisibleChart === 'green' &&
                <LineChart
                  data={LINE_CHART_DATA_GREEN}
                  height={220}
                  width={Dimensions.get('window').width - 19}
                  chartConfig={LINE_CHART_CONFIG_GREEN}
                  bezier
                  segments={5}
                  withVerticalLines={false}
                  withHorizontalLines={false}
                  withHorizontalLabels={false}
                />
              }
            </React.Fragment>
          </ScrollView>
        </Modal>
      </View>

      {/* Modal end */}


      <View className='px-3 pb-6 bg-white'>
        <View className='flex-row items-center gap-2 justify-center'>
          <AntDesign name="doubleleft" size={20} color="blue" />

          <Text className='text-lg  text-black font-bold  py-5'>
            Our features
          </Text>
          <AntDesign name="doubleright" size={20} color="blue" />
        </View>
        {OUR_FEATURES?.map((d, idx) =>
          <View key={idx} className='h-36 bg-slate-100 rounded-xl p-3 border-2 border-indigo-500 mb-5'>
            <View className='h-9 w-9  border-2 border-indigo-500 flex-row justify-center items-center rounded-3xl'>
              <MaterialIcons name={d?.icon} size={24} color="blue" />
            </View>
            <Text className='text-center font-bold text-lg'>{d?.name}</Text>
            <Text className='text-center  text-md'>{d?.Description}</Text>
          </View>
        )}
      </View>


    </ScrollView>
  );
};

const styles = StyleSheet.create(stocksStyle);

export default HomePage;
