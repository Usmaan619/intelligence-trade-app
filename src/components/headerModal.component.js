import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";

const HeaderModal = ({ visible, onClose }) => {
  return (
    <Modal
      //   animationType="fade"
      animationType="slide"
      animationIn="bounceInRight"
      animationOut="slideOutDown"
      backdropTransitionInTiming={500}
      backdropTransitionOutTiming={500}
      visible={visible}
      onRequestClose={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose} // Optional: for Android back button press
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text className="text-md font-semibold mb-2">Features</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    width: 365,
    height: 550,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default HeaderModal;
