import { Platform } from 'react-native';
import LinearGradientAndroid from 'react-native-linear-gradient/index.android.js';
import LinearGradientIos from 'react-native-linear-gradient/index.ios.js';

const LinearGradients = Platform.OS === 'ios' ? LinearGradientIos : LinearGradientAndroid;

export default LinearGradients;
