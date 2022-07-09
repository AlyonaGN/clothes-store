import {
  configureStore
} from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { rootReducer } from './rootReducer';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
const isDevelopmentEnv = process.env.NODE_ENV === 'development';
const initializeMiddlwares = (getDefaultMiddleware) => {
  return isDevelopmentEnv ? getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }).concat(logger) : getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
};

export const store = configureStore({
  reducer: persistedReducer,
  middleware: initializeMiddlwares,
  devTools: isDevelopmentEnv ? true : false
});

export const persistor = persistStore(store)
