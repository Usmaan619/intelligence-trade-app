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
