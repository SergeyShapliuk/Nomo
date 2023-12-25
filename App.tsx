/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import Main from './src/Main';
import { store } from './src/store/store';

function App() {
  // const navigation = useRef(null);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated backgroundColor="#F5F7FA" />
      <Provider store={store}>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </Provider>
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
