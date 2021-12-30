import themeReducer from '@features/theme.slice';
import { configureStore, Middleware } from '@reduxjs/toolkit';
import createDebugger from 'redux-flipper';
import { persistStore } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist/es/constants';

import { Collections } from '@core/services/localStorage';
import { withPersist } from '@core/store/middlewares/withPersist';

import sessionReducer from '../../features/session/session.slice';

const customMiddlewares: Middleware[] = [];
if (__DEV__) {
  customMiddlewares.push(createDebugger());
}

const Store = configureStore({
  reducer: {
    theme: withPersist(Collections.theme, themeReducer),
    session: withPersist(Collections.users, sessionReducer),
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    ...customMiddlewares,
  ],
});

const persistor = persistStore(Store);

export { Store, persistor };
