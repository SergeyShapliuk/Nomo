import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';

import MemoArrow from '../../assets/svg/Arrow';
import MemoCheck from '../../assets/svg/Check';
import MemoCloseModal from '../../assets/svg/CloseModal';

type ModalsPropsType = {
  open: boolean;
};
function Modals({ open }: ModalsPropsType) {
  return (
    <Modal
      isVisible={open}
      animationIn="slideInDown"
      animationOut="slideOutDown"
      backdropTransitionInTiming={0}
      backdropTransitionOutTiming={0}
      backdropOpacity={0.6}
      backdropColor="#06122F"
      useNativeDriver
      useNativeDriverForBackdrop
    >
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
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 24,
    paddingVertical: 24,
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
  },
  description: {
    color: '#06122F',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    textAlign: 'center',
    marginVertical: 20,
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
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
  },
});
export default Modals;
