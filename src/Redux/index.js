import {createStore} from 'redux';
import reducer from './Reducers';

const creatStore = () => {
    return createStore(reducer)
}
export default creatStore;