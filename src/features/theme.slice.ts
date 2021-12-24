import { createSlice } from '@reduxjs/toolkit';
import themes from '@styles/themes';

import { RootState } from '@core/types/redux.type';

export type ThemeType = keyof typeof themes | string;

const initialState: ThemeType = 'default';

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (themeState) => {
      themeState = themeState === 'default' ? 'dark' : 'default';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const getCurrentTheme = (state: RootState) => state.theme;

export default themeSlice.reducer;
