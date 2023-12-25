// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { StyleSheet, TouchableOpacity, View } from 'react-native';
//
// import Lesson1 from '../screens/lessonScreen/Leeson1';
//
// import { LessonStackNavigation } from './LessonsStackNavigation';
//
// const Tab = createBottomTabNavigator<BottomParamList>();
// function MyTabBar({ state, descriptors, navigation }: any) {
//   const focusedOptions = descriptors[state.routes[state.index].key].options;
//   // console.log('MyTabBar', focusedOptions);
//   // const animatedValues = useRef(Array.from({ length: 20 }, () => new Animated.Value(1))).current;
//   //
//   // useEffect(() => {
//   //   const animations = animatedValues.map(value =>
//   //     Animated.loop(
//   //       Animated.sequence([
//   //         Animated.timing(value, {
//   //           toValue: 1,
//   //           duration: Math.random() * 1000 + 500, // случайная длительность
//   //           easing: Easing.linear,
//   //           useNativeDriver: false,
//   //         }),
//   //         Animated.timing(value, {
//   //           toValue: 0,
//   //           duration: Math.random() * 1000 + 500, // случайная длительность
//   //           easing: Easing.linear,
//   //           useNativeDriver: false,
//   //         }),
//   //       ]),
//   //     ),
//   //   );
//   //
//   //   animations.forEach(animation => animation.start());
//   //
//   //   return () => {
//   //     animations.forEach(animation => animation.stop());
//   //   };
//   // }, [animatedValues]);
//   //
//   // const lights = animatedValues.map((animatedValue, index) => (
//   //   <Animated.View
//   //     key={index}
//   //     style={[
//   //       styles.light,
//   //       {
//   //         marginLeft: Math.random() * 20,
//   //         opacity: animatedValue,
//   //         backgroundColor: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`, // случайный цвет
//   //       },
//   //     ]}
//   //   />
//   // ));
//   if (focusedOptions?.tabBarStyle?.display === 'none') {
//     return null;
//   }
//   return (
//     <View style={tabBar}>
//       {/* <View style={styles.containers}> */}
//       {/*  <View style={styles.wire} /> */}
//       {/*  <View style={styles.lights}>{lights}</View> */}
//       {/* </View> */}
//       {state.routes.map(
//         (route: { key: string | number; name: any; params: any }, index: React.Key | null | undefined) => {
//           const { options } = descriptors[route.key];
//
//           const label = options.tabBarLabel !== undefined ? options.tabBarLabel : route.name;
//           const badge = options.tabBarBadge !== undefined ? options.tabBarBadge : null;
//
//           const isFocused = state.index === index;
//           const icon = options.tabBarIcon !== undefined ? options.tabBarIcon({ focused: isFocused }) : null;
//
//           const onPress = () => {
//             const event = navigation.emit({
//               type: 'tabPress',
//               target: route.key,
//               canPreventDefault: true,
//             });
//
//             if (!isFocused && !event.defaultPrevented) {
//               navigation.navigate(route.name, route.params);
//             }
//           };
//           // console.log('route', badge);
//           const onLongPress = () => {
//             navigation.emit({
//               type: 'tabLongPress',
//               target: route.key,
//             });
//           };
//
//           return (
//             <TouchableOpacity
//               key={route.key}
//               activeOpacity={0.7}
//               accessibilityRole="button"
//               accessibilityState={isFocused ? { selected: true } : {}}
//               accessibilityLabel={options.tabBarAccessibilityLabel}
//               testID={options.tabBarTestID}
//               onPress={onPress}
//               onLongPress={onLongPress}
//             >
//               <View
//                 style={{
//                   position: 'relative',
//                   width: 60,
//                   height: 42,
//                   justifyContent: 'space-between',
//                   alignItems: 'center',
//                   // backgroundColor: 'red',
//                 }}
//               >
//                 {icon}
//                 {/* <Text style={isFocused ? styles.isActiveTextTabBarLabel : styles.unActiveTextTabBarLabel}>{label}</Text> */}
//                 {/* {route.name === 'ProfileComponent' && badge && badge !== 0 && ( */}
//                 {/*  <View */}
//                 {/*    style={{ */}
//                 {/*      position: 'absolute', */}
//                 {/*      width: 20, */}
//                 {/*      height: 20, */}
//                 {/*      justifyContent: 'center', */}
//                 {/*      alignItems: 'center', */}
//                 {/*      backgroundColor: '#59C057', */}
//                 {/*      borderRadius: 100, */}
//                 {/*      top: -3, */}
//                 {/*      right: 3, */}
//                 {/*    }} */}
//                 {/*  > */}
//                 {/*    <Text */}
//                 {/*      style={{ */}
//                 {/*        color: '#FFF', */}
//                 {/*        fontSize: 14, */}
//                 {/*        fontWeight: '500', */}
//                 {/*        lineHeight: 17, */}
//                 {/*      }} */}
//                 {/*    > */}
//                 {/*      {badge} */}
//                 {/*    </Text> */}
//                 {/*  </View> */}
//                 {/* )} */}
//               </View>
//             </TouchableOpacity>
//           );
//         },
//       )}
//     </View>
//   );
// }
// export const tabBar = {
//   position: 'absolute',
//   width: '100%',
//   height: 70,
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   backgroundColor: '#3A3A3A',
//   borderTopLeftRadius: 20,
//   borderTopRightRadius: 20,
//   borderTopWidth: 0,
//   bottom: 0,
//   elevation: 0,
//   paddingTop: 12,
//   paddingHorizontal: 16,
//   paddingBottom: 12,
//   // zIndex: 100,
// } as const;
//
// function BottomTabNavigation() {
//   // const navigation = useRootAppNavigation();
//   // const dispatch = useAppDispatch();
//   // const routes = useRoute();
//   // const { t } = useTranslation();
//   // const animationRef = useRef<LottieView>(null);
//   //
//   // // const tabRoutes = ['MapComponent', 'EventsComponent', 'OrdersComp', 'ProfileComponent'];
//   // const update = useAppSelector(state => state.authReducer.update);
//   // const press = useAppSelector(state => state.authReducer.tabPress);
//   // const titleCity = useAppSelector(state => state.restaurantReducer.titleCity);
//   // const badges = useAppSelector(state => state.restaurantReducer.badge);
//   // // const [snackBar, setSnackBar] = useState<boolean>(false);
//   // const [activeTab, setActiveTab] = useState<string>('Main' || 'EventsComponent');
//   // // const [update, setUpdate] = useState<boolean>(false);
//   // // const [chooseCity, setChooseCity] = useState<boolean>(false);
//
//   // const { data: city } = restaurantApi.useGetCityQuery('city_rest');
//   // console.log('BottomTabNavigator2', route);
//   //
//   // const routeName: string | undefined = getFocusedRouteNameFromRoute(routes);
//   //
//   // useEffect(() => {
//   //   // animationRef.current?.play();
//   //
//   //   // Or set a specific startFrame and endFrame with:
//   //   animationRef.current?.play(30, 220);
//   // }, []);
//   //
//   // const handleTabPress = (tabName: string) => {
//   //   if (activeTab === tabName) {
//   //     dispatch(setUpdate({ update: !update }));
//   //   } else {
//   //     setActiveTab(tabName);
//   //   }
//   // };
//
//   // console.log('2', city);
//   // console.log(`вкладка: ${activeTab}`);
//   const renderMain = (focused: boolean) => (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch' }}>
//       {focused ? <LottieComponent itemJson={Lottie.main} /> : <MemoHomeSvg testID="tabBarMainIcon" />}
//     </View>
//   );
//
//   const renderMap = (focused: boolean) => (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch' }}>
//       {focused ? <LottieComponent itemJson={Lottie.map} /> : <MemoMapSvg testID="tabBarisActiveMapIcon" />}
//     </View>
//   );
//   const renderEvent = (focused: boolean) => (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch' }}>
//       {focused ? <LottieComponent itemJson={Lottie.event} /> : <MemoEventsTabSvg testID="tabBarEventsIcon" />}
//     </View>
//   );
//
//   return (
//     <Tab.Navigator
//       id="TabBar"
//       initialRouteName="Main"
//       // detachInactiveScreens
//       // backBehavior="history"
//       // eslint-disable-next-line react/no-unstable-nested-components
//       tabBar={props => <MyTabBar {...props} />}
//       // sceneContainerStyle={{ backgroundColor: '#FFF' }}
//       screenOptions={{
//         // lazy: true,
//         tabBarStyle: tabBar,
//         headerShown: false,
//         tabBarHideOnKeyboard: true,
//       }}
//       // screenListeners={({ route: tabRoute }) => ({
//       //   // focus: e => console.log('eee', e),
//       //   tabPress: e => {
//       //     if (
//       //       ((routeName === 'Main' || !routeName) &&
//       //         Boolean(city?.find(item => item.id === titleCity?.id && +item.info.restaurants === 0))) ||
//       //       ((routeName === 'Main' || !routeName) && !titleCity)
//       //     ) {
//       //       // console.log('preventDefault');
//       //       dispatch(tabPress({ tabPress: !press }));
//       //       e.preventDefault();
//       //     } else {
//       //       handleTabPress(tabRoute.name);
//       //     }
//       //   },
//       // })}
//     >
//       <Tab.Screen
//         name="Main"
//         component={LessonStackNavigation}
//         options={{
//           tabBarLabel: t('tab_bar.main'),
//           // eslint-disable-next-line react/no-unstable-nested-components
//           // tabBarIcon: ({ color }) => <MemoHomeSvg testID="tabBarMainIcon" stroke={color} />,
//           tabBarIcon: ({ focused }) => renderMain(focused),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }
// const styles = StyleSheet.create({
//   isActiveTextTabBarLabel: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: '#59C057',
//   },
//   unActiveTextTabBarLabel: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: '#93979A',
//   },
//   // containers: {
//   //   width: '100%',
//   //   position: 'absolute',
//   //   flexDirection: 'row',
//   //   alignItems: 'center',
//   //   // marginTop: 20,
//   //   top: 5,
//   // },
//   // wire: {
//   //   width: 2,
//   //   height: '100%',
//   //   backgroundColor: 'red',
//   // },
//   // lights: {
//   //   flexDirection: 'row',
//   //   marginLeft: 5,
//   // },
//   // light: {
//   //   width: 10,
//   //   height: 10,
//   //   borderRadius: 5,
//   //   backgroundColor: 'yellow',
//   //   marginHorizontal: 2,
//   //   transform: [{ translateY: -5 }],
//   // },
// });
// export default BottomTabNavigation;
