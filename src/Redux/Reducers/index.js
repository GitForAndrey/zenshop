import { combineReducers } from 'redux';
import products from './products';
import basketItem from './basket';
import login from './login';

const appRedux = combineReducers({
  products,
  basketItem,
  login,
});

const reducer = (state, action) => {
  return appRedux(state, action);
};

export default reducer;
