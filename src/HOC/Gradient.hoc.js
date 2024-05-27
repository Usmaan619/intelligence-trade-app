import { StatusBar, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const GradientHOC = (Component) => {
  const gradientProps = {
    colors: [
      "#006548",
      "#000",
      "#000",
      "#000",
      "#000",
      "#006548",
      "#000",
      "#000",
    ],
  };
  // "#16142a",

  return (props) => {
    return (
      <>
        <StatusBar
          networkActivityIndicatorVisible={true}
          translucent={true}
          backgroundColor="#000"
        />
        <LinearGradient
          colors={gradientProps.colors}
          style={styles.gradient}
          end={{ x: 0.0, y: 0.9 }}
        />
        <Component {...props} />
      </>
    );
  };
};

const styles = StyleSheet.create({
  gradient: {
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
  },
});
