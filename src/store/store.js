import { applyMiddleware, compose, createStore } from 'redux';
import { Iterable } from 'immutable';
import {
  configureStore,
  createSerializableStateInvariantMiddleware,
  isPlain,
} from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import logger from 'redux-logger';



const isSerializable = (value) => Iterable.isIterable(value) || isPlain(value);

const getEntries = (value) =>
  Iterable.isIterable(value) ? value.entries() : Object.entries(value);

const serializableMiddleware = createSerializableStateInvariantMiddleware({
    isSerializable,
    getEntries,
  });

const middlewares = [logger];

export const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});
