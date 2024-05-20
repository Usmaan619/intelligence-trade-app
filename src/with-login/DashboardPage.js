import {
  View,
  Text,
  ScrollView,
  Dimensions,
  useWindowDimensions,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { GradientHOC } from "../HOC/Gradient.hoc";
import Header from "../components/CommonHeader.component";
import { PieChart, ProgressChart } from "react-native-chart-kit";
import {
  AMOUNTS_LIST,
  ARBITRATION_LIST,
  GIF,
  PIE_CHART,
  PIE_CHART_CONFIG,
  TRANDS_DATA,
} from "../constants/Contant";
import MarqueeText from "react-native-marquee";
import moment from "moment";
import { FontAwesome } from "@expo/vector-icons";
import { DataTable } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
const DashboardPage = () => {
  const screenWidth = useWindowDimensions().width;

  const handleSearch = () => {
    console.log("te");
  };

  return (
    <ScrollView style={{ flexGrow: 1 }}>
      <Header onSearch={handleSearch} />
      <View style={{ flex: 1 }}>
        <View className="h-56 w-full flex justify-center  rounded">
          <ProgressChart
            data={PIE_CHART}
            width={screenWidth}
            height={220}
            strokeWidth={16}
            radius={32}
            chartConfig={PIE_CHART_CONFIG}
            hideLegend={false}
          />
        </View>

        <View className="w-full mt-4">
          <MarqueeText
            style={style.marqueeMainContainer}
            speed={1}
            marqueeOnStart={true}
            loop={true}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry and typesetting industry.
          </MarqueeText>
        </View>

        <View className="flex-row justify-center items-center mt-4">
          <View className="flex-row gap-2">
            <View className="h-60 w-48 bg-slate-500 rounded">
              <View className="p-3">
                <Text className="font-bold text-center text-white">
                  Amounts
                </Text>
                <View className="flex-row justify-between items-center mt-3">
                  <Text className="text-white text-xs">Investment</Text>
                  <Text className="text-white text-xs">Current Values</Text>
                </View>
                {AMOUNTS_LIST?.map((d, idx) => (
                  <View
                    className="flex-row justify-between items-center mt-3"
                    key={idx}
                  >
                    <Text className="text-white text-xs">
                      {d?.investmentAmount}
                    </Text>
                    <Text className="text-white text-xs">
                      {d?.currentValue}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
            <View className="h-60  w-48 bg-slate-500 rounded">
              <View className="p-3">
                <Text className="font-bold text-center text-white">Time</Text>
                <View className="flex-row justify-between items-center mt-3">
                  <Text className="text-white text-xs">Investment</Text>
                  <Text className="text-white text-xs">Purchase</Text>
                </View>
                {AMOUNTS_LIST?.map((d, idx) => (
                  <View
                    className="flex-row justify-between items-center mt-3"
                    key={idx}
                  >
                    <Text className="text-white text-xs">
                      {d?.investmentAmount}
                    </Text>
                    <Text className="text-white text-xs">
                      {moment(d?.date).format("L")}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>

        <DataTable className="rounded bg-slate-500 my-3">
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

        {/* portfolio */}

        <View className="px-3 py-4">
          <View className="flex-row justify-between items-center ">
            <Text className="font-bold text-lg py-3 text-white">Portfolio</Text>
          </View>

          <View className=" flex-row grid-cols-2 grid-rows-2 gap-4">
            <View className="h-36 w-44 inline bg-slate-500 rounded-lg ">
              <View className="flex justify-center items-center my-auto">
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
              </View>
            </View>

            <View className="h-36 w-44 inline bg-slate-500 rounded-lg ">
              <View className="flex justify-center items-center my-auto">
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
              </View>
            </View>
          </View>
          <View className=" flex-row grid-cols-2 grid-rows-2 gap-4 mt-2">
            <View className="h-36 w-44 inline bg-slate-500 rounded-lg ">
              <View className="flex justify-center items-center my-auto">
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
              </View>
            </View>
            <View className="h-36 w-44 inline bg-slate-500 rounded-lg ">
              <View className="flex justify-center items-center my-auto">
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
              </View>
            </View>
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
            <View className="h-24 bg-slate-500 rounded-lg mt-2" key={idx}>
              <View className="flex-row justify-between items-center my-2 px-2">
                <View className="flex-row justify-center items-center gap-1 w-52 mt-1">
                  <View className="h-8 w-8 bg-slate-800 rounded-2xl flex-row justify-center items-center">
                    <Text className="font-semibold text-xs text-yellow-200 ">
                      {d?.title}
                    </Text>
                  </View>

                  <Text className="text-white font-semibold">
                    {d?.subTitle}
                  </Text>
                </View>
                <View className="flex-row items-center justify-center ">
                  <Text className="text-yellow-200 font-semibold ">
                    {d?.btn}
                    <AntDesign name="right" size={17} color="yellow" />
                  </Text>
                </View>
              </View>
              <Text className="text-gray-300 font-semibold text-xs px-2 py-2">
                {d?.openAnClose}
              </Text>
            </View>
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
            <View className="h-44 w-40  bg-slate-500 rounded-lg ">
              <View className="flex justify-center items-center my-auto">
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
              </View>
            </View>

            <View className="h-44 w-40  bg-slate-500 rounded-lg ">
              <View className="flex justify-center items-center my-auto">
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
              </View>
            </View>

            <View className="h-44 w-40  bg-slate-500 rounded-lg ">
              <View className="flex justify-center items-center my-auto">
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
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  marqueeMainContainer: {
    fontSize: 24,
    color: "#fff",
    height: 60,
    backgroundColor: "#08130D",
    textAlign: "center",
    lineHeight: 60,
  },
});

export default GradientHOC(DashboardPage);
