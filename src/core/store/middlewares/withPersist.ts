import { Reducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import { localStorageService } from '@core/services/localStorage';

export function withPersist<T extends Reducer<any, any>>(
  key: string,
  reducer: T,
) {
  const persistConfig = {
    key,
    storage: {
      getItem: localStorageService.get,
      setItem: localStorageService.set,
      removeItem: localStorageService.remove,
    },
  };

  return persistReducer(persistConfig, reducer) as T;
}
