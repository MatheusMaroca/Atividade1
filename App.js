import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FlexBox from './src/FlexBox';

export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <FlexBox/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    margin: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
