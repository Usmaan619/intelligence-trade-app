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
          style="auto"
        />
        {/* <LinearGradient colors={gradientProps.colors} style={styles.gradient}>
        </LinearGradient> */}
        <Image style={styles.gradient} source={ICONS.bgImg} />
        <Component {...props} />
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
    bottom: 0,
    height: "100%",
    width: "100%",
  },
});
