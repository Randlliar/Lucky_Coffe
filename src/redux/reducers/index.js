import { combineReducers } from 'redux';

import filters from './filters';
import pizzas from './pizzas';
import cart from './cart';
import admin from './admin';
import orders from './orderList';

const rootReducer = combineReducers({
  filters,
  pizzas,
  cart,
  admin,
  orders,
});

export default rootReducer;
