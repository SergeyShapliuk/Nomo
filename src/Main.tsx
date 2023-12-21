import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';

import Modals from './components/modal/Modals';
import { AuthNavigation } from './navigation/AuthNavigation';
import { LessonStackNavigation } from './navigation/LessonsStackNavigation';

function Main() {
  // if (!isInitialized) {
  //   return (
  //     <View style={styles.overlay}>
  //       <ActivityIndicator size="large" color="red" />
  //     </View>
  //   );
  // }

  return (
    <View style={styles.container}>
      {!true ? <AuthNavigation /> : <LessonStackNavigation />}
      <Modals open={!true}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  overlay: {
    // width: WIDTH,
    // height: HEIGHT,
    // backgroundColor: 'rgba(0, 0, 0, 0.4)',
    // alignItems: 'center',
    // justifyContent: 'center',
    // zIndex: 0,
    // ...StyleSheet.absoluteFillObject,
  },
});
export default Main;
