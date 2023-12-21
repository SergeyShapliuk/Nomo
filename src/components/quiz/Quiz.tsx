import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import MemoArrow from '../../assets/svg/Arrow';
import MemoClock from '../../assets/svg/Clock';
import MemoLevel from '../../assets/svg/Level';
import MemoQuestion from '../../assets/svg/Question';
import MemoStopWatch from '../../assets/svg/StopWatch';

import QuizQuestion from './QuizQestion';

type QuizpropsType = {
  startQuiz: boolean;
  onOpenQuizHandel: () => void;
};
function Quiz({ startQuiz, onOpenQuizHandel }: QuizpropsType) {
  return !startQuiz ? (
    <View style={styles.container}>
      <Text textBreakStrategy="balanced" style={[styles.textDescription, { marginTop: 20 }]}>
        iLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident.
      </Text>
      <View style={styles.quiz}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <MemoQuestion />
          <Text style={[styles.textStepTitle, { color: '#0B1633', fontWeight: '400' }]}>
            Questions:<Text style={[styles.textStepTitle, { color: '#0B1633' }]}> 13</Text>
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <MemoClock />
          <Text style={[styles.textStepTitle, { color: '#0B1633', fontWeight: '400' }]}>
            Duration:<Text style={[styles.textStepTitle, { color: '#0B1633' }]}> 00:40:00</Text>
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <MemoLevel />
          <Text style={[styles.textStepTitle, { color: '#0B1633', fontWeight: '400' }]}>
            Passing grade:<Text style={[styles.textStepTitle, { color: '#0B1633' }]}> 60%</Text>
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={onOpenQuizHandel} style={styles.button}>
        <Text style={styles.btnText}>Start</Text>
        <MemoArrow />
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.container}>
      <View style={styles.question}>
        <Text style={[styles.textDescription, { color: '#06122F' }]}>
          Question 1<Text> of 13</Text>
        </Text>
        <View style={styles.timeContainer}>
          <MemoStopWatch />
          <Text style={[styles.textDescription, { color: '#06122F' }]}>39:45</Text>
        </View>
        <TouchableOpacity style={styles.btnFinish}>
          <Text style={styles.btnText}>Finish quiz</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.quizDescription}>
        <Text style={styles.textTitle}>1. Questions 12</Text>
        <Text textBreakStrategy="simple" style={styles.textDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat?
        </Text>
      </View>
      <View style={styles.questionContainer}>
        <QuizQuestion question=" Prope tueretur ineleganter revocat parvi p captum obsecro comparatur persem" />
        <QuizQuestion question=" Philosophos rei fugiam putat vestris interrete honestius non istis caecitas memini" />
        <QuizQuestion
          question="Congressu vetant opponitur socrates summis audire reiciendam quaerere advesperascit post simul sua quaerimus ubi"
          isActive
        />
      </View>
      <View style={{ flexDirection: 'row', gap: 7 }}>
        <View
          style={{
            width: 44,
            height: 44,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#65A3FD',
          }}
        >
          <Text style={[styles.textPagination, { color: '#65A3FD' }]}>1</Text>
        </View>
        <View
          style={{
            width: 44,
            height: 44,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#CACDD8',
          }}
        >
          <Text style={[styles.textPagination, { color: '#CACDD8' }]}>...</Text>
        </View>
        <View
          style={{
            width: 44,
            height: 44,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#CACDD8',
          }}
        >
          <Text style={[styles.textPagination, { color: '#CACDD8' }]}>13</Text>
        </View>
        <View
          style={{
            height: 44,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#7E8593',
            paddingHorizontal: 17,
          }}
        >
          <Text style={styles.textPagination}>Next</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 20,
    gap: 36,
  },
  quiz: {
    gap: 16,
  },
  quizDescription: {
    gap: 16,
  },
  textStepTitle: {
    color: '#0055FB',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 27,
  },
  textTitle: {
    color: '#06122F',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 34,
  },
  textDescription: {
    color: '#7E8593',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 26,
  },
  button: {
    width: 113,
    height: 67,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#0055FB',
    gap: 12,
  },
  timeContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  btnText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
  },
  btnFinish: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    borderRadius: 10,
    backgroundColor: '#65A3FD',
  },
  question: {
    width: 260,
    height: 211,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 36,
    marginTop: 20,
    borderRadius: 21,
    backgroundColor: '#E2F0FF',
    gap: 24,
  },
  questionContainer: {
    gap: 12,
  },
  textPagination: {
    color: '#7E8593',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 27,
  },
});
export default Quiz;
