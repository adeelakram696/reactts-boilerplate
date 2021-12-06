import { createSelector } from '@reduxjs/toolkit';

const selectDomain = (state) => state.direction;

export const selectDirection = createSelector(
  [selectDomain],
  directionState => directionState.direction,
);
