/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import Main from './src/Main';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated backgroundColor="#F5F7FA" />
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F5F7FA',
  },
});

export default App;
