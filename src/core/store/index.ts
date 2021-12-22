import { configureStore, Middleware } from '@reduxjs/toolkit';

import themeReducer from '../features/theme.slice';

const customMiddlewares: Middleware[] = [];

export const Store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    ...customMiddlewares,
  ],
});
