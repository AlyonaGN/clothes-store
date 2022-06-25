import { CART_ACTION_TYPES } from './cart.types';

const CART_INITIAL_STATE = {
  isOpen: false,
  cartItems: [],
  numberOfCartItems: 0,
  totalPrice: 0,
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_IS_OPEN:
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };

    default:
      return state;
  }
};
