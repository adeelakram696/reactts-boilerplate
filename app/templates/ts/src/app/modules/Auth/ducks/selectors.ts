import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'store/rootState';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.auth || initialState;

export const selectAuth = createSelector([selectDomain], (authState) => authState);
