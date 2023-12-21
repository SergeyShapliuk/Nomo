import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';

export type AuthStackParamList = {
  Home: undefined;
  Register: undefined;
  Login: undefined;
  Recovery: undefined;
};
export type LessonStackParamList = {
  Lesson1: undefined;
  Lesson2: undefined;
  Lesson3: undefined;
  Lesson4: undefined;
  Lesson5: undefined;
  Lesson6: undefined;
  Lesson7: undefined;
};
export type BottomParamList = {};
// export type PopUpRegProps = StackScreenProps<RootStackParamList, 'PopUpReg'>;

export type UseAuthNavigationType = NavigationProp<AuthStackParamList>;
export type UseLessonNavigationType = NavigationProp<LessonStackParamList>;

export const useAuthAppNavigation = () => useNavigation<UseAuthNavigationType>();
export const useLessonAppNavigation = () => useNavigation<UseLessonNavigationType>();

export const useLessonAppRoute = () => useRoute();
