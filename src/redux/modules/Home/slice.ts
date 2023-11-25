import type { Draft, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { THomeState } from '.';

const initialState: THomeState = {};

export const slice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
});

// export const { setHome } = slice.actions;
export default slice.reducer;
