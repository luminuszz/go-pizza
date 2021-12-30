import { createSlice } from '@reduxjs/toolkit';
import themes from '@styles/themes';

import { RootState } from '@core/types/redux.type';

export type ThemeType = {
  currentTheme: keyof typeof themes;
};

const initialState: ThemeType = {
  currentTheme: 'default',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (themeState) => {
      themeState.currentTheme = 'default';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const getCurrentTheme = (state: RootState) => state.theme.currentTheme;

export default themeSlice.reducer;
