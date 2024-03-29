import React from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { RootScreens } from "@/Screens";

import { HomeContainer } from "@/Screens/Home";

export type RootStackParamList = {
  [RootScreens.HOME]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name={RootScreens.HOME}
          component={HomeContainer}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export { ApplicationNavigator };