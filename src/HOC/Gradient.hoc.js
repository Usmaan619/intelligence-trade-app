import { StatusBar, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const GradientHOC = (Component) => {
  const gradientProps = {
    // colors: [
    //   "#ffffff",
    //   "#fbe6ff" /** Pink */,
    //   "#fbe6ff" /** Pink */,
    //   "#fff3e6" /** Orange */,
    //   "#e6ffee" /** Green */,
    //   "#ffffff",
    // ],

    // colors: ["#7ED6DF", "#000000"],
    colors: ["#d3d3d3", "#fff"],
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
          end={{ x: 0.2, y: 0.8 }}
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
