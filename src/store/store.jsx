// This sets up the Redux store and applies redux-thunk middleware.
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

