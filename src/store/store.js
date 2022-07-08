import { applyMiddleware, compose, createStore } from 'redux';
import { Iterable } from 'immutable';
import {
  configureStore,
  createSerializableStateInvariantMiddleware,
  isPlain,
} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { rootReducer } from './rootReducer';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const isSerializable = (value) => Iterable.isIterable(value) || isPlain(value);

const getEntries = (value) =>
  Iterable.isIterable(value) ? value.entries() : Object.entries(value);

const serializableMiddleware = createSerializableStateInvariantMiddleware({
    isSerializable,
    getEntries,
  });

const middlewares = [process.env.NODE_ENV === 'development' && logger].filter(Boolean);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares,
  devTools: true
});

export const persistor = persistStore(store)
