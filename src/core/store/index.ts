import { configureStore, Middleware } from '@reduxjs/toolkit';

const customMiddlewares: Middleware[] = [];

export const Store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    ...customMiddlewares,
  ],
});
