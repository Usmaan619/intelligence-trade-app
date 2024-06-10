import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomePage from "../pages/WelcomePage";
import HomePage from "../with-out-login/HomePage";
import DocumentVerifPage from "../auth/DocumentVerifPage";
import DashbordRoute from "./DashbordRoute";
import { connect, useDispatch } from "react-redux";
import { useNetInfo } from "@react-native-community/netinfo";
import NetworkModalPage from "../pages/NetworkModalPage";
import { SetNetInfo, SetToken } from "../redux/actions/action";
import { getData } from "../services/Storage.service";
import SignInPage from "../auth/SignInPage";
import signUpPage from "../auth/signUpPage";
import { View } from "react-native-animatable";
import { Text } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

const Stack = createNativeStackNavigator();

const MainRoutes = ({ token, isNetConnected }) => {
  console.log("token: ", token);
  console.log("isNetConnected: ", isNetConnected);

  const dispatch = useDispatch();
  const netinfo = useNetInfo();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(SetNetInfo(netinfo.isConnected));
        const _token = await getData("token");
        if (_token) {
          dispatch(SetToken(_token || null));
        }
      } catch (error) {
        console.error("Failed to fetch data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, netinfo.isConnected]);

  if (loading) {
    /** Render a loading screen or a spinner until the initial data is fetched */
    return (
      <Spinner
        visible={loading}
        textContent={"Loading..."}
        textStyle={{ color: "#fff" }}
      />
    );
  }

  return (
    <React.Fragment>
      {!isNetConnected ? (
        <NetworkModalPage />
      ) : (
        <React.Fragment>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              animation: "slide_from_right",
            }}
          >
            <Stack.Screen name="Dashboard" component={DashbordRoute} />
            <Stack.Screen name="DocumentVerif" component={DocumentVerifPage} />
            <Stack.Screen name="signIn" component={SignInPage} />
            <Stack.Screen name="signUp" component={signUpPage} />
            <Stack.Screen name="home" component={HomePage} />
            <Stack.Screen name="WelcomePage" component={WelcomePage} />
          </Stack.Navigator>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  console.log("state: ", state);
  return {
    token: state.token,
    isNetConnected: state.isNetConnected,
  };
};

export default connect(mapStateToProps)(MainRoutes);
