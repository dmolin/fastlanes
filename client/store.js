import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import rootSaga from './actions/sagas'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [
  thunk,
  sagaMiddleware
]

const enhancer = compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

let store; //singleton

export default function configureStore(history, initialState) {
  store = createStore(reducers, initialState, enhancer );
  //start saga middleware
  //console.log("starting saga middleware")
  sagaMiddleware.run(rootSaga)
  console.log("done")
  return store
}

export function getStore() {
  return store; 
}