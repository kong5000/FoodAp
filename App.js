import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuNavigator from './navigation/AppNavigator'

export default function App() {
  return (
    <MenuNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
