import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomePage from "../pages/WelcomePage";
import signUpPage from "../auth/signUpPage";
import SignInPage from "../auth/SignInPage";
import HomePage from "../with-out-login/HomePage";
import StocksList from "../components/StocksList.component";
import DocumentVerifPage from "../auth/DocumentVerifPage";
import DashboardPage from "../with-login/DashboardPage";
import DashbordRoute from "./DashbordRoute";

const Stack = createNativeStackNavigator();

const MainRoutes = () => {
  return (
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
  );
};

export default MainRoutes;
