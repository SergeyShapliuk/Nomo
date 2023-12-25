import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface InitialStateType {
  routeName: string;
}
const initialState = { routeName: '' } as InitialStateType;

// type InitStateType = typeof initialState;

const mainSlice = createSlice({
  name: 'mainReducer',
  initialState,

  reducers: {
    addRouteName(state, action: PayloadAction<string>) {
      console.log(action.payload);
      state.routeName = action.payload;
    },
  },
  extraReducers: builder => {},
});

export const { addRouteName } = mainSlice.actions;
export const mainReducer = mainSlice.reducer;
