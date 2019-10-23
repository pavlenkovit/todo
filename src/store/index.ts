import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

const reducer = combineReducers(reducers);
export const store = createStore(
  reducer,
  compose(applyMiddleware(thunk)),
);
