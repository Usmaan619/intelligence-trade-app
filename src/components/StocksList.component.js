import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { stocksStyle } from "../styles/stocksStyle";
import { COLOURS, ICONS, STOCKS_LIST } from "../constants/Contant";
import { useRoute } from "@react-navigation/native";
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const StocksList = ({ navigation }) => {
  const [isShowShimmerLoader, setIsShowShimmerLoader] = useState(false);
  const [stocksList, setStocksList] = useState(STOCKS_LIST);
  const onSearchStocks = (searchValue) => {
    let filteredList = stocksList.filter((s) =>
      s.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    if (!searchValue) {
      return setStocksList(STOCKS_LIST);
    }
    setStocksList(filteredList);
  };

  setTimeout(() => {
    setIsShowShimmerLoader(true);
  }, 2000);

  return (
    // <GestureHandlerRootView style={{ flex: 1 }}>
    <ScrollView style={{ flex: 1, flexGrow: 1 }}>
      <View style={styles.backIconContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack(null);
          }}
        >
          <Image
            style={styles.backIcon}
            source={ICONS.arrowImg}
            fadeDuration={0}
          />
        </TouchableOpacity>

        <View>
          <Text style={styles.stocksListTitle}>Stocks</Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          marginBottom: 10,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            elevation: 0.3,
            marginHorizontal: 20,
            alignSelf: "center",
            borderRadius: 9,
            overflow: "hidden",
            marginTop: "7%",
          }}
        >
          <BlurView
            intensity={100}
            style={{
              width: "100%",
              height: 48,
              overflow: "hidden",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              style={{ padding: 10, position: "relative", width: "100%" }}
              placeholder="Search"
              keyboardType="email-address"
              onChangeText={(v) => {
                onSearchStocks(v);
              }}
            />
            <Image
              style={{
                padding: 10,
                height: 24,
                width: 24,
                position: "absolute",
                right: 20,
                top: 13,
              }}
              source={ICONS.searchImg}
              fadeDuration={0}
            />
          </BlurView>
        </View>
        <List navigation={navigation} stocksList={stocksList} />
      </View>
    </ScrollView>
    // </GestureHandlerRootView>
  );
};

const List = ({ navigation, stocksList }) => {
  const route = useRoute();
  const stockName = route?.params;
  const [isShowShimmerLoader, setIsShowShimmerLoader] = useState(false);

  setTimeout(() => {
    setIsShowShimmerLoader(true);
  }, 2000);

  return stocksList.map((data) => {
    return (
      // <GestureHandlerRootView style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("StockDeposit", { data, stockName });
        }}
        key={data?.name}
      >
        <View style={{ paddingHorizontal: 25, paddingTop: 15 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",

              borderBottomWidth: 1,
              borderBottomColor: "#A39FB9",
            }}
          >
            <View style={{ flex: 1, flexDirection: "column", marginLeft: 8 }}>
              <ShimmerPlaceholder
                shimmerColors={COLOURS.STOCKS_SHIMMER_COLORS}
                visible={isShowShimmerLoader}
                shimmerStyle={{ borderRadius: 12, height: 15, width: 170 }}
              >
                <Text style={{ fontSize: 14, fontWeight: "700" }}>
                  {data?.name}
                </Text>
              </ShimmerPlaceholder>

              <ShimmerPlaceholder
                shimmerColors={COLOURS.STOCKS_SHIMMER_COLORS}
                visible={isShowShimmerLoader}
                shimmerStyle={{
                  borderRadius: 12,
                  height: 15,
                  width: 100,
                  marginTop: 5,
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    marginTop: 5,
                    color: "#A39FB9",
                    fontWeight: "600",
                  }}
                >
                  {data?.date}
                </Text>
              </ShimmerPlaceholder>
            </View>

            <ShimmerPlaceholder
              shimmerColors={COLOURS.STOCKS_SHIMMER_COLORS}
              visible={isShowShimmerLoader}
              shimmerStyle={{
                borderRadius: 12,
                height: 15,
                width: 80,
                marginTop: 14,
                marginRight: 9,
              }}
            >
              <View style={{ flex: 1, marginBottom: 18 }}>
                <Text
                  style={{
                    textAlign: "right",
                    marginRight: "15%",
                    marginTop: 14,
                    fontSize: 12,
                    fontWeight: "700",
                    color: "grey",
                  }}
                >
                  ${data?.stockRate}
                </Text>
              </View>
            </ShimmerPlaceholder>
          </View>
        </View>
      </TouchableOpacity>
      // </GestureHandlerRootView>
    );
  });
};

const styles = StyleSheet.create(stocksStyle);

export default StocksList;
