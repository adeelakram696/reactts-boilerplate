import { createSelector } from '@reduxjs/toolkit';

const selectDomain = (state) => state.permission;

export const selectPermission = createSelector(
  [selectDomain],
  (permissionState) => permissionState,
);
