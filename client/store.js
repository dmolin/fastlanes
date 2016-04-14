import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

//import { syncReduxAndRouter } from 'redux-simple-router';

const middlewares = [
  thunk
]

const enhancer = compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

//console.log("reducers", reducers);
//const store = createStore(reducers, {}, enhancer );

export default function configureStore(history, initialState) {
  const store = createStore(reducers, initialState, enhancer );
  //syncReduxAndRouter(history, store, state => state.router)

  return store
};