import {
  Text,
  View,
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DocumentVerifPage from "../auth/DocumentVerifPage";
import SignInPage from "../auth/SignInPage";
import WelcomePage from "../pages/WelcomePage";
import { ICONS } from "../constants/Contant";
import HomePage from "../with-out-login/HomePage";
import DashboardPage from "../with-login/DashboardPage";
import { Octicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { useState } from "react";
import ModalComponent from "../components/Modal.component";
import PortFolioPage from "../with-login/PortFolioPage";

const Tab = createBottomTabNavigator();
const COLORS = {
  primary: "#13678A",
  white: "#FFFFFF",
  gray: "#ECF0F4",
};
const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,

  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    // background: "#FFFFFF",
    unmountOnBlur: true,
    backgroundColor: "#0f0c29db",
    // transparent
  },
};

export default function TabNavigation() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={DashboardPage}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.tabAlignCenter}>
                  <Image
                    style={styles.tabImg}
                    source={focused ? ICONS.ActiveHomeImg : ICONS.homeImg}
                    fadeDuration={0}
                  />
                  <Text
                    style={
                      focused ? styles.homeTabActive : styles.homeTabInActive
                    }
                  >
                    Home
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Mutual Fund"
          component={DocumentVerifPage}
          /**
           * disabled tab
           * */
          listeners={{
            tabPress: (e) => {
              // Prevent default action
              e.preventDefault();
            },
          }}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.tabAlignCenter}>
                  <Image
                    style={styles.tabImg}
                    source={focused ? ICONS.mutualFundImg : ICONS.mutualFundImg}
                    fadeDuration={0}
                  />
                  <Text
                    style={
                      focused ? styles.stockTabActive : styles.stockTabInActive
                    }
                  >
                    Mutual Fund
                  </Text>
                </View>
              );
            },
          }}
        />

        <Tab.Screen
          name="More"
          component={WelcomePage}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View>
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#ffa500",
                      height: Platform.OS === "ios" ? 70 : 65,
                      width: Platform.OS === "ios" ? 70 : 65,
                      top: Platform.OS === "ios" ? -20 : -30,
                      borderRadius: Platform.OS === "ios" ? 35 : 32,
                      borderColor: "grey",
                      borderWidth: 5,
                      elevation: 10,
                    }}
                  >
                    <Animatable.Text
                      animation="pulse"
                      easing="ease-out"
                      iterationCount="infinite"
                    >
                      <Octicons name="search" size={24} color={COLORS?.white} />
                    </Animatable.Text>
                  </View>
                  <Text className="text-white bottom-6 text-center font-semibold text-xs">
                    More
                  </Text>
                </View>
              );
            },
            tabBarButton: (props) => (
              <TouchableOpacity {...props} onPress={toggleModal} />
            ),
          }}
        />

        <Tab.Screen
          name="US stocks"
          component={SignInPage}
          /**
           * disabled tab
           * */
          listeners={{
            tabPress: (e) => {
              // Prevent default action
              e.preventDefault();
            },
          }}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.tabAlignCenter}>
                  <Image
                    style={styles.tabImg}
                    source={focused ? ICONS.stockImg : ICONS.stockImg}
                    fadeDuration={0}
                  />
                  <Text
                    style={
                      focused
                        ? styles.cryptoTabActive
                        : styles.cryptoTabInActive
                    }
                  >
                    US stocks
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Portfolio"
          component={PortFolioPage}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.tabAlignCenter}>
                  <Image
                    style={styles.tabImg}
                    source={focused ? ICONS.portfolioImg : ICONS.portfolioImg}
                    fadeDuration={0}
                  />
                  <Text
                    style={
                      focused ? styles.nftTabActive : styles.nftTabInActive
                    }
                  >
                    Portfolio
                  </Text>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
      <ModalComponent visible={isModalVisible} onClose={toggleModal} />
    </>
  );
}

const tabsStyles = {
  tabAlignCenter: { alignItems: "center", justifyContent: "center" },

  homeTabActive: { fontSize: 12, color: "#FFF", fontWeight: "600" },
  homeTabInActive: { fontSize: 12, color: "#FFF" },

  tabImg: { height: 20, width: 20 },

  stockTabActive: { fontSize: 12, color: "#FFF", fontWeight: "600" },
  stockTabInActive: { fontSize: 12, color: "#FFF" },

  cryptoTabActive: { fontSize: 12, color: "#FFF", fontWeight: "600" },
  cryptoTabInActive: { fontSize: 12, color: "#FFF" },

  nftTabActive: { fontSize: 12, color: "#FFF", fontWeight: "600" },
  nftTabInActive: { fontSize: 12, color: "#FFF" },
};

const styles = StyleSheet.create(tabsStyles);
