import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "../tab-navigation/TabsNavigation";
import { GradientHOC } from "../HOC/Gradient.hoc";
import CustomDrawerContent from "../components/CustomDrawer.component";
import MutualFundPage from "../pages/MutualFundPage";

const Drawer = createDrawerNavigator();

const DashboardLayout = () => {
  return (
    <NavigationContainer independent={true} swipeEnabled={true}>
      {
        <Drawer.Navigator
          screenOptions={{
            headerShown: false,
            swipeEdgeWidth: 0,
          }}
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name="Dashboard" component={TabNavigation} />
          <Drawer.Screen name="MutualFundPage" component={MutualFundPage} />
          {/* 
            <Drawer.Screen
              name="CongratulationsDashboard"
              component={congratulations}
              options={{drawerItemStyle: {display: 'none'}}}
            /> */}
        </Drawer.Navigator>
      }
    </NavigationContainer>
  );
};

export default DashboardLayout;
