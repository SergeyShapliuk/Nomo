import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import MemoArrowRight from '../../assets/svg/ArrowRight';
import MemoCheckBoxActive from '../../assets/svg/CheckBoxActive';
import LinearGradients from '../../common/LinearGradient/index';

type ItemListPropsType = {
  item: {
    complete: string;
    title: string;
    time: number;
    numberLesson: number;
    description: string;
  };
};
function ItemList({ item }: ItemListPropsType) {
  const cardStyle =
    item.complete === 'finish'
      ? ['#E8FFD6', '#F2FAEB']
      : item.complete === 'process'
        ? ['#C0D6FF', '#EAF1FF']
        : ['#efefef', '#efefef'];
  return (
    <TouchableOpacity>
      <LinearGradients
        useAngle
        angle={95}
        angleCenter={{ x: 0.5, y: 0.5 }}
        colors={cardStyle}
        style={styles.lessonContainer}
      >
        <View style={styles.lessonTitle}>
          <Text style={styles.textLessonTitle}>{item.title}</Text>
          <Text style={styles.textTime}>{item.time} min</Text>
        </View>
        <Text style={styles.textLessonNumber}>Lesson {item.numberLesson}</Text>
        <View style={styles.lessonDescription}>
          <Text style={styles.textDescription}>{item.description}</Text>
          {item.complete === 'finish' ? <MemoCheckBoxActive /> : <MemoArrowRight />}
        </View>
      </LinearGradients>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  lessonContainer: {
    paddingHorizontal: 30,
    paddingVertical: 24,
    borderRadius: 21,
    backgroundColor: '#efefef',
    gap: 11,
  },
  lessonTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textLessonTitle: {
    flex: 1,
    color: '#06122F',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 19,
    marginRight: 16,
  },
  textTime: {
    color: '#06122F',
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 22,
  },
  textLessonNumber: {
    color: '#7E8593',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 27,
  },
  lessonDescription: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textDescription: {
    flex: 1,
    color: '#06122F',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    marginRight: 40,
    marginTop: 11,
  },
});
export default ItemList;
