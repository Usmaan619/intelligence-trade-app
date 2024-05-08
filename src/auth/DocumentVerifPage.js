import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
  PermissionsAndroid,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { GradientHOC } from "../HOC/Gradient.hoc";
import { BlurView } from "expo-blur";
import { documentVerifPage } from "../styles/documentVerifStyle";
import CommonButton from "../components/CommonButton";

import DocumentScanner from "react-native-document-scanner-plugin";

const DocumentVerifPage = () => {
  const [scannedImage, setScannedImage] = useState();

  const scan = async () => {
    try {
      // prompt user to accept camera permission request if they haven't already
      if (
        Platform.OS === "android" &&
        (await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA
        )) !== PermissionsAndroid.RESULTS.GRANTED
      ) {
        Alert.alert(
          "Error",
          "User must grant camera permissions to use document scanner."
        );
        return;
      }

      // start the document scanner
      const { scannedImages } = await DocumentScanner.scanDocument();
      console.log("scannedImages: ", scannedImages);

      // get back an array with scanned image file paths
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: "10%" }}>
        <Text style={{ fontSize: 14, marginLeft: "8%", marginVertical: 10 }}>
          Front
        </Text>
        <View style={styles.miniCardSub}>
          <TouchableOpacity
            onPress={async () => {
              await scan();
            }}
          >
            <BlurView intensity={100} style={styles.miniCardBlurView}>
              <View style={{ flex: 1, justifyContent: "center" }}>
                {/* <CommonButton onPress={uploadDocument} title={"Upload Front"} /> */}
              </View>
            </BlurView>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create(documentVerifPage);

export default GradientHOC(DocumentVerifPage);
