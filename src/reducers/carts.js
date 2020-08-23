import * as types from '../constants/Types';

var data = JSON.parse(localStorage.getItem('carts'));
var initState = data ? data : [];
let index = -1;
var carts = (state = initState, action) => {
  switch(action.type) {
    case types.ADD_TO_CART:
      index = state.findIndex(item => {return action.product.id === item.product.id});
      if (index > -1)
        state[index].quantity += action.quantity
      else
        state.push({
          product: action.product,
          quantity: action.quantity
        });
      localStorage.setItem('carts', JSON.stringify(state));
      return [...state];
    case types.DELETE_FROM_CART:
      index = state.findIndex(item => {return action.id === item.product.id});
      if (index > -1)
        state.splice(index, 1);
      localStorage.setItem('carts', JSON.stringify(state));
      return [...state];
    case types.UPDATE_QUANTITY:
      index = state.findIndex(item => {return action.product.id === item.product.id});
      if (index > -1)
        state[index].quantity = action.quantity
      localStorage.setItem('carts', JSON.stringify(state));
      return [...state];
    default:
      return [...state]
  }
};

export default carts;