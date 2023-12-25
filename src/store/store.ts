import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// import { mainApi } from '../api/mainApi';

import { mainReducer } from './mainReducer/mainReducer';

export const rootReducer = combineReducers({
  mainReducer,
  // [mainApi.reducerPath]: mainApi.reducer,
});

// const loadStateFromAsyncStorage = async () => {
//   try {
//     const serializedState = await AsyncStorage.getItem('tap_cart');
//     if (serializedState !== null) {
//       return JSON.parse(serializedState);
//     }
//     return undefined;
//   } catch (error) {
//     console.log('Error loading state from AsyncStorage:', error);
//     return undefined;
//   }
// };

export const store = configureStore({
  reducer: rootReducer,

  // getDefaultMiddleware({
  //   immutableCheck: false,
  //   serializableCheck: false,
  // }).concat([mainApi]),
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// setupListeners(store.dispatch);
