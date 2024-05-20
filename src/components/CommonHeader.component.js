import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { GradientHOC } from "../HOC/Gradient.hoc";
const Header = ({ onSearch }) => {
  return (
    <View style={styles.header}>
      <View style={styles.searchContainer}>
        <Feather name="search" size={24} color="white" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          onChangeText={onSearch}
          placeholderTextColor={"#fff"}
        />
      </View>
      <View style={styles.walletContainer}>
        <Fontisto name="wallet" size={24} color="#fff" />
      </View>

      <View style={styles.walletContainer}>
        <Text style={styles.profileTitle}>US</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    width: "100%",
    height: 100,
    backgroundColor: "#000",
    alignItems: "center",
    paddingTop: "10%",
    elevation: 5,
    paddingHorizontal: "3%",
    color: '#fff'
  },
  headerText: {
    color: "white",
    fontSize: 20,
    marginBottom: 10,

  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "white",
    borderRadius: 9,
    borderColor: "#fff",
    borderWidth: 1,
    paddingHorizontal: 15,
    width: "70%",
    height: 40,
    color: '#fff'
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    color: '#fff'
  },

  walletContainer: {
    height: 37,
    width: 37,
    // backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#fff",
    borderWidth: 1,
  },

  profileTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
});

export default GradientHOC(Header);
