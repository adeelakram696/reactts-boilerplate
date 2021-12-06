import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// We'll use redux-logger just as an example of adding another middleware
import logger from 'redux-logger';
// And use redux-batch as an example of adding enhancers
import { reduxBatch } from '@manaflair/redux-batch';
import thunk from 'redux-thunk';
import rootReducer from './rootReducers';

export function createStoreInstance() {
  const middlewares = [logger, thunk];

  const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    enhancers: [reduxBatch],
    middleware: [...getDefaultMiddleware(), ...middlewares],
  });
  return store;
}

const store = createStoreInstance();
export default store;
