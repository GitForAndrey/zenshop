import {createStore} from 'redux';
import reducer from './Reducers';

const creatStore = () => {
    return createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}
export default creatStore;