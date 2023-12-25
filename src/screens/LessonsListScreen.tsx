import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import LessonsList from '../components/lessonsList/LessonsList';

function LessonsListScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.trainingCount}>
        <Text style={styles.text}>Training</Text>
        <Text style={styles.text}>2/7</Text>
      </View>
      <LessonsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#F5F7FA',
  },
  trainingCount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 27,
  },
});
export default LessonsListScreen;
