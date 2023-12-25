import React, { ReactNode } from 'react';

import { StyleProp, ViewStyle } from 'react-native';
import Modal from 'react-native-modal';

type ModalMessagePropsType = {
  open: boolean;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

function ModalWrapperComponent({ open, children, style }: ModalMessagePropsType) {
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
      style={style}
    >
      {children}
    </Modal>
  );
}

export default ModalWrapperComponent;
