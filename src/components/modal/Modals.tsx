import React from 'react';

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Images } from '../../assets/Images';
import MemoArrow from '../../assets/svg/Arrow';
import MemoCheck from '../../assets/svg/Check';
import MemoCloseModal from '../../assets/svg/CloseModal';
import MemoError from '../../assets/svg/Error';
import MemoWallet from '../../assets/svg/Wallet';

import ModalWrapperComponent from './ModalWrapperComponent';

type ModalsPropsType = {
  openCongratulation: boolean;
  openErrorLogin: boolean;
  openErrorPersonalAccount: boolean;
  openActivateAccount: boolean;
  openCompletedCourse: boolean;
};
function Modals({
  openCongratulation,
  openErrorLogin,
  openErrorPersonalAccount,
  openActivateAccount,
  openCompletedCourse,
}: ModalsPropsType) {
  return (
    <>
      <ModalWrapperComponent open={openCongratulation}>
        <View style={styles.container}>
          <MemoCheck />
          <MemoCloseModal style={styles.closeModal} />
          <Text style={styles.title}>Congratulations!</Text>
          <Text style={styles.description}>
            Your tutor will soon contact you to check your homework! Meanwhile, proceed to the next lesson
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>Next lesson</Text>
            <MemoArrow />
          </TouchableOpacity>
        </View>
      </ModalWrapperComponent>
      <ModalWrapperComponent open={openErrorLogin}>
        <View style={styles.container}>
          <MemoError />
          <MemoCloseModal style={styles.closeModal} />
          <Text style={styles.title}>Error!</Text>
          <Text style={styles.description}>
            You made a mistake in your email or password. Please try to fill in the details again
          </Text>
          <Text style={[styles.linkText, { color: '#06122F' }]}>
            Forgot your password?<Text style={[styles.linkText, { color: '#0055FB' }]}> Regain access</Text>
          </Text>
        </View>
      </ModalWrapperComponent>
      <ModalWrapperComponent open={openErrorPersonalAccount}>
        <View style={styles.container}>
          <MemoError />
          <MemoCloseModal style={styles.closeModal} />
          <Text style={styles.title}>Error!</Text>
          <Text style={styles.description}>You didn't enter to personal account</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.linkText}>Login to your personal account</Text>
            <MemoArrow />
          </TouchableOpacity>
        </View>
      </ModalWrapperComponent>
      <ModalWrapperComponent open={openActivateAccount}>
        <View style={styles.container}>
          <MemoWallet />
          <MemoCloseModal style={styles.closeModal} />
          <Text style={styles.title}>Activate your account</Text>
          <Text style={styles.description}>Activate a brokerage account in Dotbig.</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.linkText}>Login to your personal account</Text>
            <MemoArrow />
          </TouchableOpacity>
        </View>
      </ModalWrapperComponent>
      <ModalWrapperComponent open={openCompletedCourse}>
        <View style={styles.container}>
          <Image source={Images.congratulation} style={styles.image} />
          <MemoCheck />
          <MemoCloseModal style={styles.closeModal} />
          <Text style={styles.title}>Congratulations!</Text>
          <Text style={styles.alternativeDescription}>You have completed the course.</Text>
          <Text style={styles.description}>
            A curator will contact you shortly to activate access to a special offer from nomo
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.linkText}>Login to your personal account</Text>
            <MemoArrow />
          </TouchableOpacity>
        </View>
      </ModalWrapperComponent>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 24,
    paddingVertical: 34,
    overflow: 'hidden',
  },
  closeModal: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  title: {
    color: '#06122F',
    fontSize: 29,
    fontWeight: '800',
    lineHeight: 36,
    marginTop: 10,
    textAlign: 'center',
  },
  description: {
    color: '#06122F',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
  alternativeDescription: {
    color: '#06122F',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 26,
    marginTop: 20,
    textAlign: 'center',
  },
  button: {
    height: 67,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#0055FB',
    paddingHorizontal: 24,
    gap: 12,
  },
  btnText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 24,
    textAlign: 'center',
  },
  linkText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19,
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '30%',
    resizeMode: 'cover',
    top: 0,
  },
});
export default Modals;
