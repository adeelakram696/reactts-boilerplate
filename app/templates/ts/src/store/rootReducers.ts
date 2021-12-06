import { combineReducers } from '@reduxjs/toolkit';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(asyncReducers: any = {}): any {
  return combineReducers({
    ...asyncReducers
  })
}
