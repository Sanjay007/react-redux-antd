import { createStore } from 'redux';
import middlewares from './middlewares/'
import rootReducer from './reducers/';

export default createStore(rootReducer, middlewares);