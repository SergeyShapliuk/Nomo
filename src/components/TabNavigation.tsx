import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';

import BrokersIcon from '../assets/svg/BrokersIcon';
import DiagonalArrow from '../assets/svg/DiagonalArrow';
import { DEVICE_HEIGHT } from '../common/constants';
import { useAppSelector } from '../store/store';
import { useLessonAppNavigation } from '../types/types';

function TabNavigation() {
  const navigation = useLessonAppNavigation();

  const routeName = useAppSelector(state => state.mainReducer.routeName);

  console.log('TabNavigation', routeName);

  const onNextLessonHandle = () => {
    navigation.navigate(routeName);
  };
  return (
    <View
      style={{
        position: 'absolute',
        width: '100%',
        top: DEVICE_HEIGHT - 80,
        // bottom: 0,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        backgroundColor: '#0055FB',
        // paddingHorizontal: 32,
        paddingTop: 18,
        // gap: 23,
        flexShrink: 0,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          }
        }}
        style={{
          width: 80,
          height: 40,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 6,
          borderWidth: 1,
          borderColor: '#FFF',
          paddingLeft: 11,
          paddingRight: 7,
          paddingVertical: 8,
          gap: 5,
        }}
      >
        <DiagonalArrow style={{ transform: [{ rotate: '-90deg' }] }} />
        <Text style={{ color: '#FFF', fontSize: 11, fontWeight: '500', lineHeight: 12, textAlign: 'left' }}>
          Previous{'\n'}lesson
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 80,
          height: 40,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 6,
          borderWidth: 1,
          borderColor: '#FFF',
          paddingHorizontal: 10,
          paddingVertical: 8,
          gap: 5,
        }}
      >
        <BrokersIcon />
        <Text style={{ color: '#FFF', fontSize: 11, fontWeight: '500', lineHeight: 12, textAlign: 'left' }}>
          Broker's{'\n'}account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onNextLessonHandle}
        style={{
          width: 80,
          height: 40,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 6,
          borderWidth: 1,
          borderColor: '#FFF',
          paddingLeft: 11,
          paddingRight: 7,
          paddingVertical: 8,
          gap: 5,
        }}
      >
        <Text style={{ color: '#FFF', fontSize: 11, fontWeight: '500', lineHeight: 12, textAlign: 'left' }}>
          Next{'\n'}lesson
        </Text>
        <DiagonalArrow />
      </TouchableOpacity>
    </View>
  );
}
export default TabNavigation;
