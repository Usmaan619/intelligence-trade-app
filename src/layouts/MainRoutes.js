import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomePage from "../pages/WelcomePage";
import signUpPage from "../auth/signUpPage";
import SignInPage from "../auth/SignInPage";
import HomePage from "../withoutlogin/HomePage";
import StocksList from "../components/StocksList.component";
import DocumentVerifPage from "../auth/DocumentVerifPage";

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


        {/* <Stack.Screen name="StocksList" component={StocksList} /> */}
        <Stack.Screen name="signIn" component={SignInPage} />
        <Stack.Screen name="DocumentVerif" component={DocumentVerifPage} />
        <Stack.Screen name="home" component={HomePage} />
        <Stack.Screen name="signUp" component={signUpPage} />


        <Stack.Screen name="WelcomePage" component={WelcomePage} />
      </Stack.Navigator>
    </React.Fragment>
  );
};

export default MainRoutes;
