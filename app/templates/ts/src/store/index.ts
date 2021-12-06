import { configureStore, Store } from '@reduxjs/toolkit';
// We'll use redux-logger just as an example of adding another middleware
import logger from 'redux-logger';
// And use redux-batch as an example of adding enhancers
import { reduxBatch } from '@manaflair/redux-batch';
import thunk from 'redux-thunk';
import { InjectReducerParams } from 'utils/redux-injectors/types';
import { createReducer } from './rootReducers';

const asyncReducers: any = {};

export function createStoreInstance(): Store {
  const middlewares = [logger, thunk];
  const enhancers = [reduxBatch];
  const store = configureStore({
    reducer: createReducer(),
    devTools: process.env.NODE_ENV !== 'production',
    enhancers,
    middleware: (getDefaultMiddleware) => {
      return [...getDefaultMiddleware(), ...middlewares];
    },
  });
  return store;
}
const store = createStoreInstance();
// Create an inject reducer function
// This function adds the async reducer, and creates a new combined reducer
export const injectReducer = ({key, reducer}: InjectReducerParams<any>) => {
  asyncReducers[key] = reducer;
  store.replaceReducer(createReducer(asyncReducers));
};
export default store;
