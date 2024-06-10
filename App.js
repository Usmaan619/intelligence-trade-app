import { NavigationContainer } from "@react-navigation/native";
import MainRoutes from "./src/layouts/MainRoutes";
import { Provider } from "react-redux";
import store from "./src/redux/store/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer independent={true}>
          <MainRoutes />
        </NavigationContainer>
      </Provider>
    </>
  );
}
