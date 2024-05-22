import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { ICONS } from "../constant/constant";

// import { Logout } from "../services/Auth.service";
// import { useDispatch } from "react-redux";
// import { useDisconnect } from "wagmi";
import B from "./B.component";
import { dashboardStyle } from "../styles/dashboard.style";
import { ICONS } from "../constants/Contant";

CustomDrawerContent = (props) => {
  // const dispatch = useDispatch();
  // const { disconnectAsync } = useDisconnect();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{
              alignSelf: "center",
              flexDirection: "row",
              marginVertical: "auto",
              marginVertical: "5%",
            }}
          >
            <Image
              style={styles.cardBhaipayImg}
              source={ICONS.bhaiPayImg}
              fadeDuration={0}
            />
            <Image
              style={styles.BhaipayImgText}
              source={ICONS.bhaiPayText}
              fadeDuration={0}
            />
          </TouchableOpacity>
        </View>
        <DrawerItemList {...props} />
        <DrawerItem
          style={{ marginBottom: "20%", marginTop: "10%" }}
          label="Logout"
          labelStyle={{ fontWeight: "600" }}
          onPress={async () => {
            // await disconnectAsync();
            // await Logout(dispatch, props.navigation);
          }}
        />

        {/* // Powered by app */}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignSelf: "center",
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 10, margin: 1 }}>Powered by </Text>
          <Text style={{ fontSize: 12 }}>
            <B>app</B>
          </Text>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawerContent;
const styles = StyleSheet.create(dashboardStyle);
