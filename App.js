import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import ListResults from './src/components/ListRestults';
import Search from "./src/components/Search";

export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar barstyle={'light-content'}></StatusBar>
      <Search />
      <ListResults/>
    </View>
  );
}
