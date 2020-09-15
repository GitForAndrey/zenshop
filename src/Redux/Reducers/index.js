import { combineReducers } from 'redux';
import products from './products';
import basketItem from './basket';
import login from './login';
import wishlist from './wishList';
import { firebaseReducer } from 'react-redux-firebase';

const appRedux = combineReducers({
  firebaseReducer,
  products,
  basketItem,
  login,
  wishlist,
});

const rootReducer = (state, action) => {
  return appRedux(state, action);
};

export default rootReducer;
