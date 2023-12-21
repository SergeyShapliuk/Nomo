import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/authScreens/Login';
import Register from '../screens/authScreens/Register';
import HomeScreen from '../screens/HomeScreen';
import { AuthStackParamList } from '../types/types';
import Recovery from "../screens/authScreens/Recovery";

const AuthStack = createStackNavigator<AuthStackParamList>();

export function AuthNavigation() {
  // const { t } = useTranslation();
  return (
    <AuthStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        presentation: 'transparentModal',
        // cardStyle: {flex: 1, backgroundColor: 'transparent'},
        // gestureDirection: 'horizontal',
        // gestureEnabled: true,
        headerShown: false,
      }}
    >
      {/* <Stack.Screen */}
      {/*  name="welcome" */}
      {/*  component={AuthScreen} */}
      {/*  options={{headerShown: false}} */}
      {/* /> */}
      <AuthStack.Screen name="Home" component={HomeScreen} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Recovery" component={Recovery} />
    </AuthStack.Navigator>
  );
}
