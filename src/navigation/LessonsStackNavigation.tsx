import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Text, TouchableOpacity, View } from 'react-native';

import { DEVICE_HEIGHT } from '../common/constants';
import TabNavigation from '../components/TabNavigation';
import Lesson1 from '../screens/lessonScreen/Leeson1';
import Lesson2 from '../screens/lessonScreen/Leeson2';
import Lesson3 from '../screens/lessonScreen/Leeson3';
import Lesson4 from '../screens/lessonScreen/Leeson4';
import { LessonStackParamList } from '../types/types';

const LessonStack = createStackNavigator<LessonStackParamList>();

export function LessonStackNavigation() {
  // const { t } = useTranslation();
  return (
    <LessonStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        presentation: 'transparentModal',
        // cardStyle: {flex: 1, backgroundColor: 'transparent'},
        // gestureDirection: 'horizontal',
        // gestureEnabled: true,
        header: props => <TabNavigation {...props} />,
      }}
    >
      {/* <Stack.Screen */}
      {/*  name="welcome" */}
      {/*  component={AuthScreen} */}
      {/*  options={{headerShown: false}} */}
      {/* /> */}
      {/* <LessonStack.Screen name="Lesson1" component={Lesson1} /> */}
      {/* <LessonStack.Screen name="Lesson2" component={Lesson2} /> */}
      {/* <LessonStack.Screen name="Lesson3" component={Lesson3} /> */}
      <LessonStack.Screen name="Lesson4" component={Lesson4} />
    </LessonStack.Navigator>
  );
}
