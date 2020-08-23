import * as types from '../constants/Types';

export const addToCart = (product, quantity) => {
  return {
    type: types.ADD_TO_CART,
    product,
    quantity
  }
};

export const changeMessage = (message) => {
  return {
    type: types.CHANGE_MESSAGE,
    message
  }
};

export const deleteProductFromCart = (id) => {
  return {
    type: types.DELETE_FROM_CART,
    id
  }
};

export const updateQuantityCart = (product, quantity) => {
  return {
    type: types.UPDATE_QUANTITY,
    product,
    quantity
  }
};