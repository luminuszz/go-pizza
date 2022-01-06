import authReducer from '@features/auth/auth.slice';
import themeReducer from '@features/theme/theme.slice';
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

import productReducer from '../../features/product/product.slice';

const customMiddlewares: Middleware[] = [];
if (__DEV__) {
  customMiddlewares.push(createDebugger());
}

const Store = configureStore({
  reducer: {
    theme: withPersist(Collections.theme, themeReducer),
    auth: withPersist(Collections.users, authReducer),
    product: productReducer,
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
