import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet, Text, Button, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootNavigation from './src/navigation/RootNavigation';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={'#00796B'}
        barStyle={'light-content'}
      />
      <RootNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
