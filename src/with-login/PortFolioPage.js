import React from "react";
import { View, Text, ScrollView } from "react-native";
import Header from "../components/CommonHeader.component";
import { GradientHOC } from "../HOC/Gradient.hoc";
import moment from "moment";
import { AntDesign } from "@expo/vector-icons";

import * as Animatable from "react-native-animatable";
import { BlurView } from "expo-blur";
const PortFolioPage = () => {
  const handleSearch = () => {};

  const EQUITY_DATA = [
    {
      name: "Equity",
      value: 30.45,
      color: "#1a73e8",
    },

    {
      name: "Sensex",
      value: 20.23,
      color: "#ff0000",
    },

    {
      name: "Equity",
      value: 33.23,
      color: "#ffd400",
    },
  ];

  const EQUITY_AND_STOCKS = [
    {
      title: "Current Amt:",
      subTitle: "Invested Amt:",
      titleValue: `100.45%`,
      subValue: `120.45%`,
      color: "#1a73e8",
    },

    {
      name: "Invested Amt:",
      value: "120.23%",
      color: "#ff0000",
    },

    {
      name: "1 Day P&L",
      value: `+ 10.70(+5.91%)`,
      color: "#ffd400",
    },
  ];

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <View className="mt-4">
          <Header onSearch={handleSearch} />
        </View>

        <View className="px-3 pt-2 pb-3">
          <BlurView
            className="h-44  rounded-md"
            blurAmount={0.5}
            style={{ overflow: "hidden" }}
          >
            <View className="p-3">
              <View className="flex-row justify-between items-center">
                <Text className="text-white font-normal text-xs">
                  Last Updated: {moment().format("lll")}
                </Text>

                <View className="flex-row border border-yellow-400 h-8 gap-1 px-1 rounded items-baseline">
                  <Text className="text-yellow-400 font-semibold">Analyse</Text>

                  <Animatable.View
                    animation="pulse"
                    iterationCount="infinite"
                    direction="alternate-reverse"
                    easing="linear"
                  >
                    <AntDesign name="right" size={14} color="#ffa500d1" />
                  </Animatable.View>
                </View>
              </View>

              <View className="pt-2">
                <Text className="font-normal text-md text-white">
                  Overall Portfolio
                </Text>
                <Text className="font-bold text-lg text-white">
                  ₹ 19,40,000
                </Text>
              </View>

              <View className="flex-row justify-between pt-2 items-center">
                <View className="grid gap-1">
                  <Text className="font-normal text-md text-white">
                    Total invest
                  </Text>
                  <Text className="font-bold text-base text-white">
                    ₹ 29,00,000
                  </Text>
                </View>

                <View className="grid gap-1">
                  <Text className="font-semibold text-md text-white text-right">
                    1 Day P&L
                  </Text>
                  <Text className="font-semibold text-md text-white text-right">
                    10.70(5.9%)
                  </Text>
                </View>
              </View>
            </View>
          </BlurView>
        </View>

        <ScrollView
          horizontal={true}
          className="px-2 py-2 flex-row gap-2 w-full"
        >
          {EQUITY_DATA?.map((d, idx) => (
            <BlurView
              intensity={100}
              blurType="light"
              blurAmount={0.5}
              key={idx}
              style={{
                borderLeftColor: d?.color,
                borderLeftWidth: 6,
                overflow: "hidden",
              }}
              className=" w-36  rounded  h-14 px-2 pt-1  flex-row"
            >
              <View className="grid gap-1">
                <Text className="text-white text-md">{d?.name}</Text>
                <Text className="text-white text-md">{d?.value} %</Text>
              </View>
            </BlurView>
          ))}
        </ScrollView>

        <View className="px-3 pt-3">
          {/* equity */}

          <BlurView
            blurAmount={0.5}
            className="h-36 rounded-md my-2"
            style={{ overflow: "hidden" }}
          >
            <View className="p-3">
              <View className="flex-row justify-between items-center ">
                <View className="flex-row gap-2 items-center">
                  <Animatable.View
                    animation="pulse"
                    iterationCount="infinite"
                    direction="alternate-reverse"
                    easing="linear"
                  >
                    <View className="h-10 w-10 bg-blue-600 rounded-3xl"></View>
                  </Animatable.View>
                  <Text className="text-white text-base font-normal">
                    Equity(30.45%)
                  </Text>
                </View>

                <View className="flex-row border border-yellow-400 h-6 w-6  rounded items-center justify-center">
                  <Animatable.View
                    animation="pulse"
                    iterationCount="infinite"
                    direction="alternate-reverse"
                    easing="linear"
                  >
                    <AntDesign name="right" size={14} color="#ffa500d1" />
                  </Animatable.View>
                </View>
              </View>

              <View className="flex-row justify-between pt-3 items-center">
                <View className="grid gap-2 items-start">
                  <Text className="font-normal text-md text-white">
                    Current Amt:
                  </Text>
                  <View className="grid gap-2 items-start">
                    <Text className="font-normal text-md text-white">
                      Invested Amt:
                    </Text>
                    {/* 
                    <Text className="font-normal text-md text-white">
                      1 Day P&L
                    </Text>

                    <Text className="font-normal text-md text-white">
                      Overall P&L
                    </Text> */}
                  </View>
                </View>

                <View className="grid gap-2 items-end">
                  <Text className="font-semibold text-md text-white text-right">
                    ₹ 13,70,000
                  </Text>
                  <View className="grid gap-2 items-end">
                    <Text className="font-semibold text-md text-white text-right">
                      ₹ 3,00,000
                    </Text>

                    {/* <Text className="font-semibold text-md text-white text-right">
                      + 10.70(+5.91%)
                    </Text>
                    <Text className="font-semibold text-md text-white text-right">
                      + 6.70(+5.91%)
                    </Text> */}
                  </View>
                </View>
              </View>
            </View>
          </BlurView>
          {/* Sensex */}

          <BlurView
            blurAmount={0.5}
            className="h-36  rounded-md mt-2 mb-6"
            style={{ overflow: "hidden" }}
          >
            <View className="p-3">
              <View className="flex-row justify-between items-center ">
                <View className="flex-row gap-2 items-center">
                  <Animatable.View
                    animation="pulse"
                    iterationCount="infinite"
                    direction="alternate-reverse"
                    easing="linear"
                  >
                    <View className="h-10 w-10 bg-red-600 rounded-3xl"></View>
                  </Animatable.View>
                  <Text className="text-white text-base font-normal">
                    Sensex(20.23%)
                  </Text>
                </View>

                <View className="flex-row border border-yellow-400 h-6 w-6  rounded items-center justify-center">
                  <Animatable.View
                    animation="pulse"
                    iterationCount="infinite"
                    direction="alternate-reverse"
                    easing="linear"
                  >
                    <AntDesign name="right" size={14} color="#ffa500d1" />
                  </Animatable.View>
                </View>
              </View>

              <View className="flex-row justify-between pt-3 items-center">
                <View className="grid gap-2 items-start">
                  <Text className="font-normal text-md text-white">
                    Current Amt:
                  </Text>
                  <View className="grid gap-2 items-start">
                    <Text className="font-normal text-md text-white">
                      Invested Amt:
                    </Text>

                    {/* <Text className="font-normal text-md text-white">
                      1 Day P&L
                    </Text>

                    <Text className="font-normal text-md text-white">
                      Overall P&L
                    </Text> */}
                  </View>
                </View>

                <View className="grid gap-2 items-end">
                  <Text className="font-semibold text-md text-white text-right">
                    ₹ 4.70,000
                  </Text>
                  <View className="grid gap-2 items-end">
                    <Text className="font-semibold text-md text-white text-right">
                      ₹ 3,20,000
                    </Text>

                    {/* <Text className="font-semibold text-md text-white text-right">
                      + 10.70(+5.91%)
                    </Text>
                    <Text className="font-semibold text-md text-white text-right">
                      + 6.70(+5.91%)
                    </Text> */}
                  </View>
                </View>
              </View>
            </View>
          </BlurView>
        </View>

        <View className="px-3 mb-24 ">
          <View className="flex-row justify-between items-center  mb-10">
            <Text className="font-bold text-lg text-white">
              Profit & Loss Summary
            </Text>
            <Text className="font-bold text-sm text-white">
              {moment().calendar()}
            </Text>
          </View>

          <BlurView
            blurAmount={0.5}
            className="h-32  rounded-md  mb-6"
            style={{ overflow: "hidden" }}
          >
            <View className="p-3">
              <View className="flex-row justify-between pt-3 items-center">
                <View className="grid gap-2 items-start ">
                  <Text className="font-normal text-base text-white">
                    Booked P/L
                  </Text>

                  <Text className="font-normal text-base text-white">
                    Short Term G/L
                  </Text>

                  <Text className="font-normal text-base text-white">
                    Long Term G/L
                  </Text>
                </View>

                <View className="grid gap-2 items-end">
                  <Text className="font-semibold text-base text-white text-right">
                    ₹ 23,70,000
                  </Text>

                  <Text className="font-semibold text-base text-white text-right">
                    ₹ 10,70,000
                  </Text>
                  <Text className="font-semibold text-base text-white text-right">
                    ₹ 6,70,000
                  </Text>
                </View>
              </View>
            </View>
          </BlurView>
        </View>
      </View>
    </ScrollView>
  );
};

export default GradientHOC(PortFolioPage);
