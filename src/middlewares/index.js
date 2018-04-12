import logger from 'redux-logger';
import webAPI from './webAPI';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

export default applyMiddleware(thunk, webAPI, logger);