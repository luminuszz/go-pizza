import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@core/types/redux.type';

export type ThemeType = 'default' | 'dark';

const initialState: ThemeType = 'default';

const themeSlice = createSlice({
  name: 'theme',
  reducers: {
    toggleTheme: (themeState: string) => {
      themeState = themeState === 'default' ? 'dark' : 'default';
    },
  },
  initialState,
});

export const { toggleTheme } = themeSlice.actions;

export const getCurrentTheme = (state: RootState) => state.theme;

export default themeSlice.reducer;
