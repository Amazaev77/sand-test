import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import app from './ducks/app';
import products from './ducks/products';

const rootReducer = combineReducers({
  app,
  products
})

const logger = createLogger({
  collapsed: true,
  diff: true,
})

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export type RootState = ReturnType<typeof rootReducer>