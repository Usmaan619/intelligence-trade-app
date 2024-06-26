import { Image, StatusBar, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ICONS } from "../constants/Contant";

export const GradientHOC = (Component) => {
  const gradientProps = {
    colors: ["#737373", "#737373", "#00ccef"],
  };

  return (props) => {
    return (
      <>
        <StatusBar
          networkActivityIndicatorVisible={true}
          translucent={true}
          backgroundColor="#000"
          style="auto"
        />
        <LinearGradient colors={gradientProps.colors} style={styles.gradient}>
          <Component {...props} />
        </LinearGradient>
        {/* <Image
          style={styles.gradient}
          source={ICONS.bgImg}
          resizeMode="contain"
        /> */}
      </>
    );
  };
};

const styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
});
