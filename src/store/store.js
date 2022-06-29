import { applyMiddleware, compose, createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { rootReducer } from './rootReducer';
import { combineReducers } from 'redux';
import { cartReducer } from './cart/cart.reducer';
import { categoryReducer } from './categories/category.reducer';
import { userReducer } from './user/user.reducer';

const middlewares = [logger];

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = configureStore({
  reducer: {
    user: userReducer,
    categories: categoryReducer,
    cart: cartReducer,
  },
});
