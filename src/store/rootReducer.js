import { combineReducers } from 'redux';
import { cartReducer } from './cart/cartSlice';
import { categoriesReducer } from './categories/categoriesSlice';
import { userReducer } from './user/userSlice';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
