import {combineReducers} from 'redux';
import products from './products';
import basketItem from './basket';

const appRedux = combineReducers ({
    products, basketItem
})

const reducer = (state , action) => {
    return appRedux(state , action)
}

export default reducer;