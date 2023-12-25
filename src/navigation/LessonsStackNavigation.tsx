import React, { useCallback, useState } from 'react';

import { NavigationProp, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

import Header from '../components/header/Header';
import TabNavigation from '../components/TabNavigation';
import Lesson1 from '../screens/lessonScreen/Lesson1';
import Lesson2 from '../screens/lessonScreen/Lesson2';
import Lesson3 from '../screens/lessonScreen/Lesson3';
import Lesson4 from '../screens/lessonScreen/Lesson4';
import LessonsListScreen from '../screens/LessonsListScreen';
import { LessonStackParamList, useLessonAppNavigation } from '../types/types';

const LessonStack = createStackNavigator<LessonStackParamList>();

export function LessonStackNavigation() {
  const navigation = useLessonAppNavigation();
  // const { t } = useTranslation();
  const [openList, setOpenList] = useState<boolean>(false);

  const onChangeHandler = useCallback(() => {
    if (!openList) {
      setOpenList(true);
      navigation.navigate('List');
    } else {
      setOpenList(false);
      navigation.goBack();
    }
  }, [openList]);
  return (
    <View style={{ flex: 1, paddingBottom: openList ? 0 : 80, backgroundColor: '#F5F7FA' }}>
      <LessonStack.Navigator
        initialRouteName="Lesson1"
        screenOptions={{
          animationEnabled: false,
          // presentation: 'transparentModal',
          // cardStyle: {flex: 1, backgroundColor: 'transparent'},
          // gestureDirection: 'horizontal',
          // gestureEnabled: true,
          header: props => <Header open={openList} onChangeHandler={onChangeHandler} {...props} />,
        }}
      >
        {/* <Stack.Screen */}
        {/* name="welcome" */}
        {/* component={AuthScreen} */}
        {/* options={{headerShown: false}} */}
        {/* /> */}
        <LessonStack.Screen name="Lesson1" component={Lesson1} />
        <LessonStack.Screen name="Lesson2" component={Lesson2} />
        <LessonStack.Screen name="Lesson3" component={Lesson3} />
        <LessonStack.Screen name="Lesson4" component={Lesson4} />
        <LessonStack.Screen options={{ animationEnabled: false }} name="List" component={LessonsListScreen} />
      </LessonStack.Navigator>
      {!openList && <TabNavigation />}
    </View>
  );
}
