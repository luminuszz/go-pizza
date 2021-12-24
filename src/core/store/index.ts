import themeReducer from '@features/theme.slice';
import { configureStore, Middleware } from '@reduxjs/toolkit';
import createDebugger from 'redux-flipper';

import sessionReducer from '../../features/session/session.slice';

const customMiddlewares: Middleware[] = [];
if (__DEV__) {
  customMiddlewares.push(createDebugger());
}

export const Store = configureStore({
  reducer: {
    theme: themeReducer,
    session: sessionReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ serializableCheck: false }),
    ...customMiddlewares,
  ],
});
