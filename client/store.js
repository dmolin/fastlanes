import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const middlewares = [
  thunk
]

const enhancer = compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default function configureStore(history, initialState) {
  const store = createStore(reducers, initialState, enhancer );
  return store
};