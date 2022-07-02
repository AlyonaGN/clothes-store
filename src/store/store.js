import { applyMiddleware, compose, createStore } from 'redux';
import { Iterable } from 'immutable';
import {
  configureStore,
  createSerializableStateInvariantMiddleware,
  isPlain,
} from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

/* const middlewares = [logger];

const composedEnhancers = compose(applyMiddleware(...middlewares)); */

const isSerializable = (value) => Iterable.isIterable(value) || isPlain(value);

const getEntries = (value) =>
  Iterable.isIterable(value) ? value.entries() : Object.entries(value);

const serializableMiddleware = createSerializableStateInvariantMiddleware({
  isSerializable,
  getEntries,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [serializableMiddleware],
});
