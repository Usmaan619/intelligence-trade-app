import {
  View,
  Text,
  ScrollView,
  Dimensions,
  useWindowDimensions,
  Styleheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { GradientHOC } from "../HOC/Gradient.hoc";
import Header from "../components/CommonHeader.component";
import { PieChart, ProgressChart } from "react-native-chart-kit";
import {
  AMOUNTS_LIST,
  ARBITRATION_LIST,
  GIF,
  ICONS,
  INVEST_BEST_DATA,
  NEWS_DATA,
  PIE_CHART,
  PIE_CHART_CONFIG,
  TRANDS_DATA,
} from "../constants/Contant";
import MarqueeText from "react-native-marquee";
import moment from "moment";
import { FontAwesome } from "@expo/vector-icons";
import { DataTable, Icon } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
const DashboardPage = ({ navigation }) => {
  const screenWidth = useWindowDimensions().width;

  const cardWidth = screenWidth * 0.44; // 40% of the screen width
  const cardHeight = cardWidth * 1.36; // maintaining the aspect ratio based on original dimensions

  const handleSearch = () => {
    console.log("te");
  };

  const SOCIAL_DATA = [
    {
      name: "Indian indices",
      icon: ICONS?.NFTS1Img,
    },

    {
      name: "US Stocks",
      icon: ICONS?.NFTS1Img,
    },

    {
      name: "Crypto",
      icon: ICONS?.NFTS1Img,
    },

    {
      name: "International Market",
      icon: ICONS?.NFTS1Img,
    },

    {
      name: "Currency",
      icon: ICONS?.NFTS1Img,
    },

    {
      name: "Commodity",
      icon: ICONS?.NFTS1Img,
    },
  ];

  const InfoCard = ({
    title,
    headers,
    data,
    renderData,
    cardWidth,
    cardHeight,
  }) => {
    return (
      <BlurView
        style={[style.card, { width: cardWidth, height: cardHeight }]}
        blurAmount={0.5}
      >
        <LinearGradient
          colors={["#1A684B", "#1A684B"]}
          end={{ x: 0.1, y: 0.9 }}
        >
          <View style={style.cardContent}>
            <Text style={style.title}>{title}</Text>
            <View style={style.headerRow}>
              {headers.map((header, idx) => (
                <Text key={idx} style={style.text}>
                  {header}
                </Text>
              ))}
            </View>
            {data?.map((d, idx) => (
              <View key={idx} style={style.dataRow}>
                {renderData(d)}
              </View>
            ))}
          </View>
        </LinearGradient>
      </BlurView>
    );
  };

  return (
    <ScrollView style={{ flexGrow: 1 }}>
      <Header onSearch={handleSearch} />

      <View className="px-3 py-2">
        <ScrollView
          horizontal={true}
          contentContainerStyle={{ paddingHorizontal: 10 }}
        >
          {SOCIAL_DATA?.map((item, idx) => (
            <View
              key={idx}
              style={{ alignItems: "center", marginLeft: 1, marginRight: 10 }}
            >
              <View className="h-16 w-16 rounded-full overflow-hidden mb-2">
                <Image
                  source={ICONS?.NFTS1Img}
                  className="h-16 w-16 "
                  resizeMode="contain"
                />
              </View>
              <Text className="text-white w-20 text-center text-sm">
                {item.name}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Portfolio");
          }}
          className="h-56 w-full flex justify-center  rounded py-4"
        >
          <ProgressChart
            data={PIE_CHART}
            width={screenWidth}
            height={220}
            strokeWidth={16}
            radius={32}
            chartConfig={PIE_CHART_CONFIG}
            hideLegend={false}
          />
        </TouchableOpacity>

        <View className="w-full py-4">
          <MarqueeText
            style={style.marqueeMainContainer}
            speed={1}
            marqueeOnStart={true}
            loop
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry and typesetting industry.
          </MarqueeText>
        </View>
        <View className="px-3 py-4 w-full">
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 16,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 8,
              }}
            >
              <InfoCard
                title="Amounts"
                headers={["Investment", "Current Values"]}
                data={AMOUNTS_LIST}
                renderData={(d) => (
                  <>
                    <Text style={style.text}>{d?.investmentAmount}</Text>
                    <Text style={style.text}>{d?.currentValue}</Text>
                  </>
                )}
                cardWidth={cardWidth}
                // cardHeight={cardHeight}
              />
              <InfoCard
                title="Time"
                headers={["Investment", "Purchase"]}
                data={AMOUNTS_LIST}
                renderData={(d) => (
                  <>
                    <Text style={style.text}>{d?.investmentAmount}</Text>
                    <Text style={style.text}>
                      {moment(d?.date).format("L")}
                    </Text>
                  </>
                )}
                cardWidth={cardWidth}
                // cardHeight={cardHeight}
              />
            </View>
          </View>

          <DataTable className="rounded  mt-10">
            <DataTable.Header className="text-white">
              <DataTable.Title>
                <Text className="text-white font-bold text-center">Pair</Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text className="text-white font-bold text-center">
                  Buying Price
                </Text>
              </DataTable.Title>
              <DataTable.Title>
                <Text className="text-white font-bold text-center">
                  Selling Price
                </Text>
              </DataTable.Title>
            </DataTable.Header>

            {ARBITRATION_LIST?.map((d, idx) => (
              <DataTable.Row key={idx} style={{ width: "100%" }}>
                <DataTable.Cell>
                  <View className="flex-row items-center  gap-1 me-10 w-full">
                    <FontAwesome name="bitcoin" size={15} color="#e5f13e" />
                    <Text className="text-white font-bold text-center ">
                      {d?.name}
                    </Text>
                  </View>
                </DataTable.Cell>
                <DataTable.Cell>
                  <View className="flex-row  items-center justify-center gap-1 w-full text-center">
                    <FontAwesome name="dollar" size={15} color="green" />

                    <Text className="text-white font-bold text-left ">
                      {d?.buyingPrice}
                    </Text>
                  </View>
                </DataTable.Cell>
                <DataTable.Cell>
                  <View className="flex-row items-center justify-center  gap-1">
                    <FontAwesome name="dollar" size={15} color="red" />
                    <Text className="text-white font-bold text-center ">
                      {d?.sellingPrice}
                    </Text>
                  </View>
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </View>
        {/* portfolio */}

        <View className="px-3 py-4">
          <View className="flex-row justify-between items-center ">
            <Text className="font-bold text-lg py-3 text-white">Portfolio</Text>
          </View>

          <View className=" flex-row  gap-2 items-center">
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Portfolio");
              }}
            >
              {/* <BlurView
                className="h-36 w-44 inline  rounded-lg "
                blurAmount={0.5}
                style={{ overflow: "hidden" }}
              > */}
              <LinearGradient
                colors={["#006548", "#079b07"]}
                end={{ x: 0.1, y: 0.9 }}
                className="flex justify-center items-center my-auto h-36 w-44   rounded-lg"
              >
                {/* Test */}
                <Animatable.Text
                  animation="pulse"
                  easing="ease-out"
                  iterationCount="infinite"
                  className="mb-3 border rounded-xl border-white p-2"
                >
                  <MaterialIcons name="groups-2" size={30} color="white" />
                </Animatable.Text>
                <Text className="font-bold text-white text-md">
                  Highest Rated Funds
                </Text>
              </LinearGradient>
              {/* </BlurView> */}
            </TouchableOpacity>
            {/* <BlurView
              className="h-36 w-44  rounded-lg "
              blurAmount={0.5}
              style={{ overflow: "hidden" }}
            > */}
            <LinearGradient
              colors={["#006548", "#079b07"]}
              end={{ x: 0.1, y: 0.9 }}
              className="flex justify-center items-center my-auto h-36 w-44  rounded-lg"
            >
              <Animatable.Text
                animation="pulse"
                easing="ease-out"
                iterationCount="infinite"
                className="mb-4 border rounded-xl border-white p-2"
              >
                <FontAwesome6 name="sack-dollar" size={30} color="white" />
              </Animatable.Text>
              <Text className="font-bold text-white text-md">
                Highest Rated Funds
              </Text>
            </LinearGradient>
            {/* </BlurView> */}
          </View>
          <View className=" flex-row   gap-2 items-center mt-1">
            {/* <BlurView
              className="h-36 w-44  rounded-lg "
              blurAmount={0.5}
              style={{ overflow: "hidden" }}
            > */}
            <LinearGradient
              colors={["#006548", "#079b07"]}
              end={{ x: 0.1, y: 0.9 }}
              className="h-36 w-44  rounded-lg  flex justify-center items-center my-auto "
            >
              <Animatable.Text
                animation="pulse"
                easing="ease-out"
                iterationCount="infinite"
                className="mb-4 border rounded-xl border-white p-2"
              >
                <MaterialCommunityIcons
                  name="credit-card-refund"
                  size={30}
                  color="white"
                />
              </Animatable.Text>
              <Text className="font-bold text-white text-md">
                Highest Rated Funds
              </Text>
            </LinearGradient>
            {/* </BlurView> */}
            {/* <BlurView
              className="h-36 w-44  rounded-lg "
              blurAmount={0.5}
              style={{ overflow: "hidden" }}
            > */}
            <LinearGradient
              colors={["#006548", "#079b07"]}
              end={{ x: 0.1, y: 0.9 }}
              className="h-36 w-44  rounded-lg flex justify-center items-center my-auto"
            >
              <Animatable.Text
                animation="pulse"
                easing="ease-out"
                iterationCount="infinite"
                className="mb-4 border rounded-xl border-white p-2"
              >
                <MaterialIcons name="recommend" size={30} color="white" />
              </Animatable.Text>
              <Text className="font-bold text-white text-md">
                MO Recommended
              </Text>
            </LinearGradient>
            {/* </BlurView> */}
          </View>
        </View>
        {/* portfolio end */}

        {/* market trands */}
        <View className="px-3 py-4">
          <View className="flex-row justify-between items-center my-3">
            <View>
              <Text className="font-bold text-lg  text-white">
                New Market trends
              </Text>
              <Text className="font-medium text-sm text-gray-400">
                Get early on a promising new
              </Text>
              <Text className="font-medium text-xs text-gray-400">
                investment funds opportunity
              </Text>
            </View>
            <Image
              source={GIF.marketTranGif}
              className="h-14 w-14"
              resizeMode="cover"
            />
          </View>
          {TRANDS_DATA?.map((d, idx) => (
            <BlurView
              className="h-24 rounded-lg mt-2"
              key={idx}
              blurAmount={0.5}
              style={{ overflow: "hidden" }}
            >
              <View className="flex-row justify-between items-center my-2 px-2">
                <View className="flex-row justify-center items-center gap-1 w-52 mt-1">
                  <View className="h-8 w-8 bg-slate-800 rounded-2xl flex-row justify-center items-center">
                    <Text className="font-semibold text-xs text-yellow-200 ">
                      {d?.title}
                    </Text>
                  </View>

                  <Text className="text-white font-semibold text-sm">
                    {d?.subTitle}
                  </Text>
                </View>
                <View className="flex-row items-center justify-center ">
                  <Text className="text-yellow-200 font-semibold text-xs">
                    {d?.btn}
                    <AntDesign name="right" size={12} color="yellow" />
                  </Text>
                </View>
              </View>
              <Text className="text-gray-300 font-semibold text-xs px-2 py-2">
                {d?.openAnClose}
              </Text>
            </BlurView>
          ))}
        </View>
        {/* market trands end */}

        <View className="px-3 py-4">
          <View className="flex-row justify-between items-center mt-3 mb-10">
            <View>
              <Text className="font-bold text-lg  text-white">
                New Mutual Funds Offering(NFO)
              </Text>
              <Text className="font-medium text-sm text-gray-400">
                Get early on a promising new
              </Text>
              <Text className="font-medium text-xs text-gray-400">
                investment funds opportunity
              </Text>
            </View>
            <Image
              source={GIF.mutualFunds}
              className="h-14 w-14"
              resizeMode="cover"
            />
          </View>

          <ScrollView
            horizontal={true}
            className="flex-row grid-cols-2 grid-rows-2 gap-4"
          >
            {/* <BlurView
              className="h-44 w-40   rounded-lg "
              blurAmount={0.5}
              style={{ overflow: "hidden" }}
            > */}

            <LinearGradient
              colors={["#006548", "#079b07"]}
              end={{ x: 0.1, y: 0.9 }}
              className="flex justify-center items-center my-auto h-44 w-40   rounded-lg "
            >
              <Animatable.Text
                animation="pulse"
                easing="ease-out"
                iterationCount="infinite"
                className="mb-3 border rounded-xl border-white p-2"
              >
                <FontAwesome name="heartbeat" size={30} color="white" />
              </Animatable.Text>
              <Text className="font-bold text-white text-md">
                health insurance
              </Text>
            </LinearGradient>
            {/* </BlurView> */}

            <LinearGradient
              colors={["#006548", "#079b07"]}
              end={{ x: 0.1, y: 0.9 }}
              className="flex justify-center items-center my-auto h-44 w-40   rounded-lg "
            >
              <Animatable.Text
                animation="pulse"
                easing="ease-out"
                iterationCount="infinite"
                className="mb-3 border rounded-xl border-white p-2"
              >
                <FontAwesome5
                  name="hand-holding-heart"
                  size={30}
                  color="white"
                />
              </Animatable.Text>
              <Text className="font-bold text-white text-md">
                health insurance
              </Text>
            </LinearGradient>
            <LinearGradient
              colors={["#006548", "#079b07"]}
              end={{ x: 0.1, y: 0.9 }}
              className="flex justify-center items-center my-auto h-44 w-40   rounded-lg "
            >
              <Animatable.Text
                animation="pulse"
                easing="ease-out"
                iterationCount="infinite"
                className="mb-3 border rounded-xl border-white p-2"
              >
                <FontAwesome6 name="sack-dollar" size={30} color="white" />
              </Animatable.Text>
              <Text className="font-bold text-white text-md">
                health insurance
              </Text>
            </LinearGradient>
          </ScrollView>
        </View>

        {/* best invest */}
        <View className="px-3 py-4">
          <View className="flex-row justify-between items-center mt-3 mb-10">
            <View>
              <Text className="font-bold text-lg  text-white">
                See How Best Invest
              </Text>
              <Text className="font-medium text-sm text-gray-400">
                Get access to the top investors Holdings,
              </Text>
              <Text className="font-medium text-xs text-gray-400">
                Net Worth and Company History.
              </Text>
            </View>
            <Image
              source={GIF.bestTrads}
              className="h-28 w-20  "
              resizeMode="cover"
            />
          </View>
          <ScrollView className="flex-row  gap-4 h-52" horizontal={true}>
            {INVEST_BEST_DATA?.map((d, idx) => (
              // <BlurView
              //   className="h-40 w-28   rounded-lg relative "
              //   blurAmount={0.5}
              //   // style={{ overflow: "hidden" }}
              //   key={idx}
              // >
              <LinearGradient
                key={idx}
                colors={["#006548", "#079b07"]}
                end={{ x: 0.1, y: 0.9 }}
                className="flex justify-center items-center my-auto h-40 w-28   rounded-lg relative"
              >
                <View className="flex justify-center items-center my-auto">
                  <Animatable.Text
                    animation="pulse"
                    easing="ease-in-out-expo"
                    iterationCount="infinite"
                    className=" rounded-3xl bg-white p-2 absolute -top-[78px] h-10 w-10  text-center"
                    style={{ elevation: 8 }}
                  >
                    <Text className=" font-semibold text-center">
                      {d?.name}
                    </Text>
                  </Animatable.Text>
                  <Text className="font-bold text-white text-md flex justify-center items-center w-16 text-center truncate">
                    {d?.fullName}
                  </Text>

                  <View className="h-8 w-8 bg-slate-900 rounded-2xl flex justify-center items-center absolute -bottom-20">
                    <Animatable.Text
                      animation="pulse"
                      easing="ease-in-out-circ"
                      iterationCount="infinite"
                      style={{ elevation: 8 }}
                    >
                      <AntDesign name="right" size={18} color="white" />
                    </Animatable.Text>
                  </View>
                </View>
              </LinearGradient>
            ))}
          </ScrollView>
        </View>
        {/* best invest  end*/}

        {/* news */}
        <View className="px-3 py-4">
          <View className="flex-row justify-between items-center mt-3 mb-10">
            <View>
              <Text className="font-bold text-lg  text-white">News</Text>
              <Text className="font-medium text-sm text-gray-400">
                Stays informed with the latest news
              </Text>
              <Text className="font-medium text-xs text-gray-400">
                froms the financial market
              </Text>
            </View>
            <Image
              source={GIF.newsGif}
              className="h-20 w-24 "
              resizeMode="cover"
            />
          </View>

          <View className="flex-row my-3">
            <ScrollView horizontal={true}>
              {NEWS_DATA?.map((d, idx) => (
                <View
                  key={idx}
                  className="border border-yellow-400 p-2 rounded-3xl text-center flex-row mx-1 overflow-hidden"
                >
                  <Text className="text-white">{d?.name}</Text>
                </View>
              ))}
            </ScrollView>
          </View>

          <View className="flex gap-3 items-center mb-14">
            {NEWS_DATA?.map((d, idx) => (
              <BlurView
                className="h-32 w-full  rounded-lg"
                key={idx}
                //
                //
                blurAmount={0.5}
                style={{ overflow: "hidden" }}
              >
                <View className="flex-row justify-between">
                  <Text
                    className="truncate w-60 pt-4 text-base font-semibold text-white"
                    style={{ paddingStart: 14 }}
                  >
                    {d?.title}
                  </Text>
                  <View className="p-2">
                    <Image
                      className="h-20 w-20"
                      source={ICONS?.coinBaseImg}
                      resizeMode="cover"
                    />
                  </View>
                </View>
                <Text
                  className="text-gray-300 font-semibold text-xs"
                  style={{ paddingStart: 12 }}
                >
                  {moment().format("LLL")}
                </Text>
              </BlurView>
            ))}
          </View>
        </View>
        {/* news end */}
      </View>
    </ScrollView>
  );
};

const style = {
  marqueeMainContainer: {
    fontSize: 24,
    color: "#fff",
    height: 60,
    backgroundColor: "#08130D",

    textAlign: "center",
    lineHeight: 60,
  },

  card: {
    borderRadius: 8,
    marginHorizontal: 8,
    overflow: "hidden",
    elevation: 12,
    // backgroundColor: "#006548",
  },
  cardContent: {
    padding: 12,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  dataRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  text: {
    color: "#fff",
    fontSize: 12,
  },
};

export default GradientHOC(DashboardPage);
