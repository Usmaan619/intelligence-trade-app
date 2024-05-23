import React from "react";
import { View, Text, ScrollView } from "react-native";
import Header from "../components/CommonHeader.component";
import { GradientHOC } from "../HOC/Gradient.hoc";
import moment from "moment";
import { AntDesign } from "@expo/vector-icons";
const PortFolioPage = () => {
  const handleSearch = () => {};

  const EQUITY_DATA = [
    {
      name: "Equity",
      value: 100.45,
      color: "#1a73e8",
    },

    {
      name: "Us Stocks",
      value: 100.23,
      color: "#ff0000",
    },

    {
      name: "Equity",
      value: 103.23,
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
        <Header onSearch={handleSearch} />

        <View className="px-3 py-3">
          <View
            className="h-44 bg-slate-500 rounded-md"
            style={{ elevation: 8 }}
          >
            <View className="p-3">
              <View className="flex-row justify-between items-center ">
                <Text className="text-white font-normal">
                  Last Updated:{moment().format("lll")}
                </Text>

                <View className="flex-row border border-yellow-400 h-7 w-24 px-2 rounded items-center justify-between">
                  <Text className="text-yellow-400 font-semibold">Analyse</Text>
                  <AntDesign name="right" size={14} color="#ffa500d1" />
                </View>
              </View>

              <View className="pt-2">
                <Text className="font-normal text-md text-white">
                  Overall Portfolio
                </Text>
                <Text className="font-bold text-lg text-white">$ 189.40</Text>
              </View>

              <View className="flex-row justify-between pt-2 items-center">
                <View className="grid gap-1">
                  <Text className="font-normal text-md text-white">
                    Total invest
                  </Text>
                  <Text className="font-bold text-base text-white">
                    $ 190.80
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
          </View>
        </View>

        <ScrollView
          horizontal={true}
          className="px-2 py-2 flex-row gap-2 w-full"
        >
          {EQUITY_DATA?.map((d, idx) => (
            <View
              key={idx}
              style={{ borderLeftColor: d?.color, borderLeftWidth: 6 }}
              className=" w-36 bg-slate-500 rounded  h-14 px-2 pt-1  flex-row"
            >
              <View className="grid gap-1">
                <Text className="text-white text-md">{d?.name}</Text>
                <Text className="text-white text-md">{d?.value} %</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        <View className="px-3 py-3">
          <View
            className="h-48 bg-slate-500 rounded-md my-2"
            style={{ elevation: 8 }}
          >
            <View className="p-3">
              <View className="flex-row justify-between items-center ">
                <View className="flex-row gap-2 items-center">
                  <View className="h-10 w-10 bg-blue-600 rounded-3xl"></View>
                  <Text className="text-white text-base font-normal">
                    Equity(100.00%)
                  </Text>
                </View>

                <View className="flex-row border border-yellow-400 h-6 w-6  rounded items-center justify-center">
                  <AntDesign name="right" size={14} color="#ffa500d1" />
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

                    <Text className="font-normal text-md text-white">
                      1 Day P&L
                    </Text>

                    <Text className="font-normal text-md text-white">
                      Overall P&L
                    </Text>
                  </View>
                </View>

                <View className="grid gap-2 items-end">
                  <Text className="font-semibold text-md text-white text-right">
                    $ 103.70
                  </Text>
                  <View className="grid gap-2 items-end">
                    <Text className="font-semibold text-md text-white text-right">
                      $ 133.70
                    </Text>

                    <Text className="font-semibold text-md text-white text-right">
                      + 10.70(+5.91%)
                    </Text>
                    <Text className="font-semibold text-md text-white text-right">
                      + 6.70(+5.91%)
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View
            className="h-48 bg-slate-500 rounded-md mt-2 mb-24"
            style={{ elevation: 8 }}
          >
            <View className="p-3">
              <View className="flex-row justify-between items-center ">
                <View className="flex-row gap-2 items-center">
                  <View className="h-10 w-10 bg-red-600 rounded-3xl"></View>
                  <Text className="text-white text-base font-normal">
                    Us Stocks(100.00%)
                  </Text>
                </View>

                <View className="flex-row border border-yellow-400 h-6 w-6  rounded items-center justify-center">
                  <AntDesign name="right" size={14} color="#ffa500d1" />
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

                    <Text className="font-normal text-md text-white">
                      1 Day P&L
                    </Text>

                    <Text className="font-normal text-md text-white">
                      Overall P&L
                    </Text>
                  </View>
                </View>

                <View className="grid gap-2 items-end">
                  <Text className="font-semibold text-md text-white text-right">
                    $ 103.70
                  </Text>
                  <View className="grid gap-2 items-end">
                    <Text className="font-semibold text-md text-white text-right">
                      $ 133.70
                    </Text>

                    <Text className="font-semibold text-md text-white text-right">
                      + 10.70(+5.91%)
                    </Text>
                    <Text className="font-semibold text-md text-white text-right">
                      + 6.70(+5.91%)
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default GradientHOC(PortFolioPage);
