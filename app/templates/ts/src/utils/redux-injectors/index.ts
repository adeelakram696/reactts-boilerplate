import {
  injectReducer as useReducer,
} from 'redux-reducers-injector';
import {
  InjectReducerParams,
  RootStateKeyType,
} from './types';

/* Wrap redux-injectors with stricter types */

export function useInjectReducer<Key extends RootStateKeyType>(
  params: InjectReducerParams<Key>,
): void {
  return useReducer(params.key, params.reducer);
}
