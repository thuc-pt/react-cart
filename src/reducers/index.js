import {combineReducers} from 'redux';
import products from './products';
import carts from './carts';
import message from './message';

const MyReducer = combineReducers({
  products,
  carts,
  message
});

export default MyReducer;