import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

type QuizQuestionPropsType = {
  question: string;
  isActive: boolean;
};
function QuizQuestion({ question, isActive }: QuizQuestionPropsType) {
  return (
    <View
      style={{
        flexDirection: 'row',
        minHeight: 180,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        backgroundColor: isActive ? '#E7FCD7' : '#efefef',
        paddingHorizontal: 20,
        paddingVertical: 36,
        gap: 16,
      }}
    >
      {!isActive ? (
        <View style={{ width: 24, height: 24, borderRadius: 50, borderWidth: 2, borderColor: '#CACDD8' }} />
      ) : (
        <View
          style={{
            width: 24,
            height: 24,
            borderRadius: 50,
            borderWidth: 6,
            borderColor: '#4ACC37',
            backgroundColor: '#FFF',
          }}
        />
      )}
      <Text style={styles.textQuestion}>{question}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textQuestion: {
    flex: 1,
    color: '#06122F',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 27,
  },
});

export default QuizQuestion;
