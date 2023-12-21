import React, { useCallback, useState } from 'react';

import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

import { Images } from '../../assets/Images';
import MemoButton from '../../assets/svg/Button';
import MemoNomoLogo from '../../assets/svg/NomoLogo';
import { DEVICE_HEIGHT } from '../../common/constants';
import Complete from '../../components/complete/Complete';
import Quiz from '../../components/quiz/Quiz';

function Lesson3() {
  const [quizStart, setQuizStart] = useState<boolean>(false);

  const onOpenQuizHandel = useCallback(() => {
    setQuizStart(true);
  }, [quizStart]);
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 66,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          alignSelf: 'stretch',
          backgroundColor: '#E2F0FF',
        }}
      >
        <MemoNomoLogo />
        <View
          style={{
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 2,
            paddingHorizontal: 4,
            borderRadius: 8,
            backgroundColor: '#F5F7FA',
          }}
        >
          <TouchableOpacity style={{ gap: 2.5, flexShrink: 0 }}>
            <View style={{ width: 16, height: 2, backgroundColor: '#06122F' }} />
            <View style={{ width: 16, height: 2, backgroundColor: '#06122F' }} />
            <View style={{ width: 16, height: 2, backgroundColor: '#06122F' }} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.content}>
          <View style={styles.title}>
            <Text style={styles.textLesson}>Lesson 3</Text>
            <Text style={styles.textTitle}>How to become a millionaire through investments</Text>
            <Text style={styles.textDescription}>
              How to create a personal financial plan. Types of investment instruments
            </Text>
          </View>
          <View style={styles.stepContent}>
            <Text style={styles.textStepTitle}>
              Step 1:<Text style={[styles.textStepTitle, { color: '#06122F' }]}> Watch the video</Text>
            </Text>
            <View style={styles.previewContainer}>
              <Image source={Images.preview} style={[styles.imgVideoPreview, { transform: [{ scale: 0.95 }] }]} />
              {/* <TouchableWithoutFeedback> */}
              <View style={styles.buttonContainer}>
                <View style={styles.rectangle} />
                <TouchableOpacity>
                  <MemoButton />
                </TouchableOpacity>

                {/* <Button style={{ position: 'absolute', top: -12 }} /> */}
              </View>
              {/* </TouchableWithoutFeedback> */}
            </View>
            <Text style={[styles.textDescription, { lineHeight: 27, marginTop: 110 }]}>
              To proceed to <Text style={[styles.textDescription, { color: '#0055FB' }]}>Lesson 3</Text>, you need to{' '}
              complete 2 simple steps
            </Text>
            <Complete />
            <Text style={styles.textStepTitle}>
              Step 2:<Text style={[styles.textStepTitle, { color: '#06122F' }]}> Complete quiz</Text>
            </Text>
            <Text style={[styles.textTitle, { marginTop: 20 }]}>Quiz</Text>

            <Quiz startQuiz={quizStart} onOpenQuizHandel={onOpenQuizHandel} />

            <Complete />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: DEVICE_HEIGHT - 80,
    backgroundColor: '#F5F7FA',
  },
  content: {
    paddingHorizontal: 31,
  },
  title: {
    paddingTop: 15,
    gap: 14,
  },
  textLesson: {
    color: '#0055FB',
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 34,
  },
  textTitle: {
    color: '#0B1633',
    fontSize: 34,
    fontWeight: '800',
    lineHeight: 41,
  },
  textDescription: {
    color: '#7E8593',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 26,
  },
  stepContent: {
    paddingTop: 18,
  },
  textStepTitle: {
    color: '#0055FB',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 27,
  },
  previewContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: 110,
    // zIndex: 100,
    // backgroundColor: 'red',
  },
  imgVideoPreview: {
    position: 'absolute',
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'stretch',
    // height: 190,
    resizeMode: 'cover',
    zIndex: 1,

    // top: 0,
  },
  rectangle: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
    // top: -31,
    borderRadius: 50,
    // borderWidth: 1,
    backgroundColor: 'white',
    opacity: 0.4,
    // borderColor: '#FFF',
  },
  buttonContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
    // top: 95,
  },
});
export default Lesson3;