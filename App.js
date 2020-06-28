import React from "react";
// import { StyleSheet, Text, View } from 'react-native';
import colors from "./src/constants/colors";
import { SafeAreaView, View, Text } from "react-native";
import tailwind from "tailwind-rn";

export default function App() {
  return (
    <SafeAreaView style={tailwind("h-full")}>
      <View style={tailwind("pt-12 items-center")}>
        <View style={tailwind("bg-blue-200 px-3 py-1 rounded-full")}>
          <Text style={tailwind("text-blue-800 font-semibold")}>
            Rolling Exchange
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: colors.text
//   }
// });
