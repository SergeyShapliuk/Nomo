import React from 'react';

import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Images } from '../assets/Images';
import MemoArrow from '../assets/svg/Arrow';
import MemoButton from '../assets/svg/Button';
import MemoElement_1 from '../assets/svg/Element_1';
import MemoElement_2 from '../assets/svg/Element_2';
import MemoNomoLogo from '../assets/svg/NomoLogo';
import { useAuthAppNavigation } from '../types/types';

function HomeScreen() {
  const navigation = useAuthAppNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MemoNomoLogo />
        <TouchableOpacity style={styles.smallButton}>
          <Text style={styles.smallBtnText}>Start training</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <View style={styles.description}>
          <Text style={styles.primaryText}>
            How to build{'\n'}
            <Text style={[styles.primaryText, { color: '#0055FB' }]}>$10,000 in 30 days</Text> with{'\n'}
            proven passive income copy trading techniques
          </Text>
          <Text style={styles.secondaryText}>
            In free practical course you will get your first extra income in just 8 lessons accompanied by your personal
            financial analyst.
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.bigButton}>
          <Text style={styles.bigBtnText}>Start training</Text>
          <MemoArrow />
        </TouchableOpacity>
        <Text style={styles.policyText}>
          By continuing, you agree to the
          <Text style={[styles.policyText, { color: '#0055FB' }]}> Terms of Use and Privacy Policy</Text>
        </Text>
      </View>
      <View style={styles.previewContainer}>
        <MemoElement_1 style={{ alignSelf: 'flex-start', bottom: 43 }} />
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
        <MemoElement_2 style={{ alignSelf: 'flex-end', top: 20 }} />
      </View>
      {/* <View */}
      {/*  style={{ */}
      {/*    position: 'absolute', */}
      {/*    bottom: 24, */}
      {/*    width: '100%', */}
      {/*    height: 261, */}
      {/*    justifyContent: 'space-between', */}
      {/*    alignItems: 'flex-start', */}
      {/*    // paddingTop: -100, */}
      {/*    alignSelf: 'stretch', */}
      {/*    backgroundColor: 'grey', */}
      {/*  }} */}
      {/* > */}

      {/* </View> */}
      {/* <LinearGradients */}
      {/* useAngle */}
      {/* angle={180} */}
      {/* angleCenter={{ x: 0.5, y: 0.5 }} */}
      {/* colors={['#F5F7FA', '#ffffff']} */}
      {/* style={{ flex: 1 }} */}
      {/* > */}
      {/* <Text /> */}
      {/* </LinearGradients> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    width: '100%',
    height: 66,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  main: { alignItems: 'center', paddingHorizontal: 32 },
  description: {
    justifyContent: 'center',
    // paddingLeft: 30.16,
    // paddingRight: 35.84,
    // width:'80%'
  },
  primaryText: {
    color: '#06122F',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 34,
    textAlign: 'center',
  },
  secondaryText: {
    color: '#7E8593',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 26,
    textAlign: 'center',
    marginTop: 6.89,
  },
  smallButton: {
    height: 40.368,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingVertical: 9.25,
    paddingHorizontal: 13.5,
    borderRadius: 8.41,
    backgroundColor: '#0055FB',
  },
  smallBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 19,
  },
  bigButton: {
    // width: 311,
    height: 65,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    // paddingVertical: 9.25,
    paddingHorizontal: 23,
    marginTop: 21,
    borderRadius: 9.74,
    backgroundColor: '#0055FB',
    gap: 11,
    flexShrink: 0,
  },
  bigBtnText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 21,
    // paddingHorizontal:11
  },
  policyText: {
    color: '#06122F',
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 22,
    textAlign: 'center',
    paddingTop: 30,
  },
  previewContainer: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
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

export default HomeScreen;
