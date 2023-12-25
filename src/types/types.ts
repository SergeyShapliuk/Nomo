import { NavigationProp, useNavigation } from '@react-navigation/native';

// export const ROUTES = {
//   Lesson1: 'Lessodn1',
// } as const;

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
  List: undefined;
};
// export type RootParamsList = {
//   Auth: AuthStackParamList;
//   Lessons: LessonStackParamList;
// };
// export type BottomParamList = {};
// export type PopUpRegProps = StackScreenProps<RootStackParamList, 'PopUpReg'>;
// type NavigationProp = StackNavigationProp<LessonStackParamList, keyof LessonStackParamList>;

type UseAuthNavigationType = NavigationProp<AuthStackParamList>;
type UseRootAppNavigationType = NavigationProp<LessonStackParamList>;

export const useAuthAppNavigation = () => useNavigation<UseAuthNavigationType>();
export const useLessonAppNavigation = () => useNavigation<UseRootAppNavigationType>();

// export const useLessonAppRoute = () => useRoute();
// declare global {
//   namespace ReactNavigation {
//     interface RootParamList extends LessonStackParamList {}
//   }
// }
