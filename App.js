import React from 'react';
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./app/screens/01_Home/Home"

const App = props => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Home />
      </SafeAreaProvider>
    </View>
  );
};

export default App;