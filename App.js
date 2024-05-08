import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainRoutes from "./src/layouts/MainRoutes";
export default function App() {
  return (
    <>
      <NavigationContainer independent={true}>
        <MainRoutes />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
