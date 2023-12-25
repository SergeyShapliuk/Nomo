import React, { useCallback, useEffect, useState } from 'react';

import { StackActions, useFocusEffect } from '@react-navigation/native';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import Modal from 'react-native-modal';

import MemoArrow from '../../assets/svg/Arrow';
import MemoCloseModal from '../../assets/svg/CloseModal';
import { DEVICE_HEIGHT } from '../../common/constants';
import { useAuthAppNavigation } from '../../types/types';

function Register() {
  const navigation = useAuthAppNavigation();
  // const dispatch = useAppDispatch();
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [formattedValue, setFormattedValue] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);

  // const status = useAppSelector(state => state.authReducer.status);

  const handleBackPress = useCallback(() => {
    navigation.goBack();
    return true;
  }, [navigation]);
  const onLoginForm = () => {
    // navigation.dispatch(StackActions.replace('LoginScreen'));
    navigation.navigate('Login');
  };
  // useEffect(() => {
  //   BackHandler.addEventListener('hardwareBackPress', handleBackPress);
  //   return () => {
  //     BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
  //   };
  // }, [handleBackPress]);
  useFocusEffect(() => {
    setModal(true);
    return () => {
      setModal(false);
    };
  });

  // const validate = () => {
  //   if (!userName || userName.length === 0) {
  //     Alert.alert('', message.registerScreen.usernameEmpty);
  //     return false;
  //   }
  //   if (!email || email.length === 0) {
  //     Alert.alert('', message.registerScreen.emailEmpty);
  //     return false;
  //   }
  //   if (!password || password.length === 0) {
  //     Alert.alert('', message.registerScreen.passwordEmpty);
  //     return false;
  //   }
  //   if (!phone || phone.length === 0) {
  //     Alert.alert('', message.registerScreen.phoneEmpty);
  //     return false;
  //   }
  //   return true;
  // };

  // const onLogin = async () => {
  //   Keyboard.dismiss();
  //   if (!validate()) {
  //     return;
  //   }
  //   if (
  //     !validateUserName(userName) ||
  //     !validateEmail(email) ||
  //     !validatePhone(phone)
  //   ) {
  //     return;
  //   }
  //   const userNames = userName.replace(/^ +| +$|( ) +/g, '$1').split(' ');
  //   const paramsRegister: RegisterType = {
  //     first_name: userNames[0],
  //     last_name: userNames[1],
  //     username: email,
  //     email: email,
  //     phone: formattedValue,
  //     password: password,
  //   };
  //   dispatch(getRegister(paramsRegister));
  // };

  const onBack = () => {
    navigation.dispatch(StackActions.popToTop());
  };

  return (
    <Modal
      isVisible={modal}
      deviceHeight={DEVICE_HEIGHT + 50}
      backdropTransitionInTiming={0}
      backdropTransitionOutTiming={0}
      backdropOpacity={0.6}
      backdropColor="#06122F"
      style={styles.modal}
    >
      <KeyboardAvoidingView
        keyboardVerticalOffset={-110}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        contentContainerStyle={styles.container}
      >
        <View style={styles.headerModal}>
          <View style={styles.title}>
            <Text style={styles.titleText}>Registration</Text>
          </View>
          <TouchableOpacity
            style={styles.imgButton}
            onPress={onBack}
            hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
          >
            <MemoCloseModal />
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ paddingTop: 0 }}
        >
          <View style={styles.modalContainer}>
            {/* <Spinner visible={status === 'loading'} color="#A968A0" /> */}
            <View style={{ height: 292, marginHorizontal: 32, marginTop: 23, backgroundColor: '#FFFFFF' }}>
              <View style={{}}>
                <TextInput
                  value={userName}
                  placeholder="Name"
                  placeholderTextColor="#9E9E9E"
                  style={styles.textInput}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={value => setUserName(value)}
                />
                {/* {userName.length > 0 && <Image source={Images.icEnterUsername} style={styles.icEnter} />} */}
              </View>
              <View style={{ marginTop: 16 }}>
                <TextInput
                  placeholder="Email"
                  placeholderTextColor="#9E9E9E"
                  style={styles.textInput}
                  value={email}
                  onChangeText={value => setEmail(value)}
                />
                {/* {email.length > 0 && <Image source={Images.icEnterEmail} style={styles.icEnter} />} */}
              </View>
              <View style={{ marginTop: 16 }}>
                <TextInput
                  placeholder="Email"
                  placeholderTextColor="#9E9E9E"
                  style={styles.textInput}
                  value={email}
                  onChangeText={value => setEmail(value)}
                />
                {/* /!*<PhoneInput*!/ */}
                {/* /!*  // defaultValue={phone}*!/ */}
                {/* /!*  // defaultCode="IT"*!/ */}
                {/* /!*  // layout="first"*!/ */}
                {/* /!*  // // placeholder={message.registerScreen.phonePlaceholder}*!/ */}
                {/* /!*  // onChangeText={text => {*!/ */}
                {/*  //   setPhone(text); */}
                {/*  // }} */}
                {/*  // onChangeFormattedText={text => { */}
                {/*  //   setFormattedValue(text); */}
                {/*  // }} */}
                {/*  // renderDropdownImage={ */}
                {/*  //   <View style={{ position: 'absolute', left: 60, backgroundColor: 'red' }}> */}
                {/*  //     <Text>dsd</Text> */}
                {/*  //   </View> */}
                {/*  // } */}
                {/*  // countryPickerButtonStyle={ */}
                {/*  //   <View style={{ width: 25, height: 25, backgroundColor: 'red' }}> */}
                {/*  //     <Text style={{ color: 'red' }}>dsd</Text> */}
                {/*  //   </View> */}
                {/*  // } */}
                {/*  // // withDarkTheme */}
                {/*  // withShadow */}
                {/*  // codeTextStyle={{ */}
                {/*  //   fontSize: 16, */}
                {/*  //   fontWeight: '500', */}
                {/*  //   lineHeight: 19, */}
                {/*  //   // marginRight: 12, */}
                {/*  //   // marginLeft: -35, */}
                {/*  // }} */}
                {/*  // textInputStyle={{ */}
                {/*  //   height: 56, */}
                {/*  //   fontSize: 14, */}
                {/*  //   margin: -10, */}
                {/*  //   marginBottom: -11, */}
                {/*  // }} */}
                {/*  // containerStyle={styles.textInputPhone} */}
                {/* // /> */}
                {/* /!* {formattedValue.length > 0 && <Image source={Images.iconPhone} style={styles.icEnter} />} *!/ */}
              </View>
              <TouchableOpacity onPress={onLoginForm} style={styles.bigButton}>
                <Text style={styles.bigBtnText}>Sign up for the online course</Text>
                <MemoArrow style={{ transform: [{ scale: 0.8 }] }} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'center', paddingTop: 26, paddingHorizontal: 31 }}>
              <Text
                style={{
                  color: '#06122F',
                  fontFamily: 'Inter',
                  fontSize: 13,
                  lineHeight: 22,
                  fontWeight: '500',
                }}
              >
                Have you registered yet?
              </Text>
              <Text
                style={{
                  color: '#0055FB',
                  fontFamily: 'Inter',
                  fontSize: 13,
                  lineHeight: 22,
                  fontWeight: '500',
                }}
              >
                Go to entrance
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100%',
  },
  headerModal: {
    backgroundColor: '#F7F9FC',
    boxShadow: 'rgba(0, 0, 0, 0.40)',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  modalContainer: {
    backgroundColor: '#F7F9FC',
    boxShadow: 'rgba(0, 0, 0, 0.55)',
    paddingBottom: 20,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  imgButton: {
    position: 'absolute',
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'flex-end',
    // width: 22,
    // height: 22,
    // borderRadius: 50,
    // backgroundColor: '#0B1633',
    // resizeMode: 'contain',
    top: 20,
    right: 20,
  },
  textBottom: {
    marginTop: 2,
    fontSize: 13,
    lineHeight: 22,
    color: '#A363A1',
    fontFamily: 'Inter',
    fontWeight: '500',
    textAlign: 'center',
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  titleText: {
    // fontFamily: 'Inter',
    fontSize: 24,
    lineHeight: 41,
    fontWeight: '700',
    color: '#06122F',
    textAlign: 'center',
  },
  // viewInput: {
  //   color: '#000',
  //   backgroundColor: 'red',
  //   borderRadius: 6,
  //   marginBottom: 12,
  //   paddingHorizontal: 10,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   borderWidth: 2,
  //   borderColor: '#F3F3F3',
  // },
  textInput: {
    // flex: 1,
    height: 56,
    color: '#000',
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    borderWidth: 1,
    borderColor: '#E1E3E9',
    borderRadius: 8,
    backgroundColor: '#FFF',
    paddingLeft: 20,
  },
  textInputPhone: {
    height: 55,
    fontFamily: 'Inter',
    fontSize: 14,
    // marginHorizontal: -10,
    backgroundColor: '#FCFCFD',
  },
  icEnter: {
    width: 17,
    height: 17,
    resizeMode: 'contain',
    backgroundColor: '#FCFCFD',
  },
  iconBack: {
    resizeMode: 'contain',
  },
  linearGradient: {
    marginTop: 10,
    borderRadius: 6,
  },
  btnSubmit: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 49,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    borderRadius: 6,
  },
  txtSubmit: {
    fontFamily: 'Inter',
    fontSize: 15,
    lineHeight: 25,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  arrow: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
    color: '#EEF5F8',
  },
  txtQuestion: {
    marginTop: 12,
    fontFamily: 'Inter',
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  bigButton: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    // width: 311,
    height: 53,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    // paddingVertical: 6.25,
    paddingHorizontal: 14,
    borderRadius: 6,
    backgroundColor: '#0055FB',
    gap: 7,
    flexShrink: 0,
  },
  bigBtnText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 19,
    // paddingHorizontal:11
  },
});

export default Register;
