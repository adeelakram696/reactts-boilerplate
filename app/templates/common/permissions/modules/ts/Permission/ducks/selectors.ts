import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/rootState';

const selectDomain = (state: RootState) => state.permission;

export const selectPermission = createSelector(
  [selectDomain],
  (permissionState) => permissionState,
);
