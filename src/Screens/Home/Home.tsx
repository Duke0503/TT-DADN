import { i18n, LocalizationKey } from "@/Localization";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MainNavigator } from "@/Navigation/Main";
import { NativeBaseProvider } from "native-base";

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Lan Anh is a chicken</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});