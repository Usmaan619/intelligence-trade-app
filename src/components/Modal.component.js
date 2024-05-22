import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import * as Animatable from "react-native-animatable";
import { MaterialIcons } from "@expo/vector-icons";

const ModalComponent = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose} // Optional: for Android back button press
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text className="text-md font-semibold mb-2">Features</Text>
          <View className="flex justify-center my-auto">
            <View className="flex-row gap-1 mt-1">
              <View className="h-32 w-28 inline bg-slate-500 rounded-lg ">
                <View className="flex justify-center items-center my-auto">
                  <Animatable.Text
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite"
                    className="mb-3 border rounded-xl border-white p-2"
                  >
                    <MaterialIcons name="groups-2" size={30} color="white" />
                  </Animatable.Text>
                  <Text className="font-bold text-white text-md">
                    Highest Rated Funds
                  </Text>
                </View>
              </View>

              <View className="h-32 w-28 inline bg-slate-500 rounded-lg ">
                <View className="flex justify-center items-center my-auto">
                  <Animatable.Text
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite"
                    className="mb-3 border rounded-xl border-white p-2"
                  >
                    <MaterialIcons name="groups-2" size={30} color="white" />
                  </Animatable.Text>
                  <Text className="font-bold text-white text-md">
                    Highest Rated Funds
                  </Text>
                </View>
              </View>

              <View className="h-32 w-28 inline bg-slate-500 rounded-lg ">
                <View className="flex justify-center items-center my-auto">
                  <Animatable.Text
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite"
                    className="mb-3 border rounded-xl border-white p-2"
                  >
                    <MaterialIcons name="groups-2" size={30} color="white" />
                  </Animatable.Text>
                  <Text className="font-bold text-white text-md">
                    Highest Rated Funds
                  </Text>
                </View>
              </View>
            </View>

            <View className="flex-row gap-1 mt-1 mb-1 ">
              <View className="h-32 w-28 inline bg-slate-500 rounded-lg ">
                <View className="flex justify-center items-center my-auto">
                  <Animatable.Text
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite"
                    className="mb-3 border rounded-xl border-white p-2"
                  >
                    <MaterialIcons name="groups-2" size={30} color="white" />
                  </Animatable.Text>
                  <Text className="font-bold text-white text-md">
                    Highest Rated Funds
                  </Text>
                </View>
              </View>

              <View className="h-32 w-28 inline bg-slate-500 rounded-lg ">
                <View className="flex justify-center items-center my-auto">
                  <Animatable.Text
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite"
                    className="mb-3 border rounded-xl border-white p-2"
                  >
                    <MaterialIcons name="groups-2" size={30} color="white" />
                  </Animatable.Text>
                  <Text className="font-bold text-white text-md">
                    Highest Rated Funds
                  </Text>
                </View>
              </View>

              <View className="h-32 w-28 inline bg-slate-500 rounded-lg ">
                <View className="flex justify-center items-center my-auto">
                  <Animatable.Text
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite"
                    className="mb-3 border rounded-xl border-white p-2"
                  >
                    <MaterialIcons name="groups-2" size={30} color="white" />
                  </Animatable.Text>
                  <Text className="font-bold text-white text-md">
                    Highest Rated Funds
                  </Text>
                </View>
              </View>
            </View>

            <View className="flex-row gap-1 mt-1">
              <View className="h-32 w-28 inline bg-slate-500 rounded-lg ">
                <View className="flex justify-center items-center my-auto">
                  <Animatable.Text
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite"
                    className="mb-3 border rounded-xl border-white p-2"
                  >
                    <MaterialIcons name="groups-2" size={30} color="white" />
                  </Animatable.Text>
                  <Text className="font-bold text-white text-md">
                    Highest Rated Funds
                  </Text>
                </View>
              </View>

              <View className="h-32 w-28 inline bg-slate-500 rounded-lg ">
                <View className="flex justify-center items-center my-auto">
                  <Animatable.Text
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite"
                    className="mb-3 border rounded-xl border-white p-2"
                  >
                    <MaterialIcons name="groups-2" size={30} color="white" />
                  </Animatable.Text>
                  <Text className="font-bold text-white text-md">
                    Highest Rated Funds
                  </Text>
                </View>
              </View>

              <View className="h-32 w-28 inline bg-slate-500 rounded-lg ">
                <View className="flex justify-center items-center my-auto">
                  <Animatable.Text
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite"
                    className="mb-3 border rounded-xl border-white p-2"
                  >
                    <MaterialIcons name="groups-2" size={30} color="white" />
                  </Animatable.Text>
                  <Text className="font-bold text-white text-md">
                    Highest Rated Funds
                  </Text>
                </View>
              </View>
            </View>
          </View>
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

export default ModalComponent;
