import { createSlice } from '@reduxjs/toolkit';
import { getFromLocal } from 'utils/cache';

export const directions = {
  en: 'ltr',
  ur: 'rtl',
};
// The initial state of the direction container
export const defaultLang = getFromLocal('i18nextLng', false) || 'en';
export const initialState = {
  language: defaultLang || 'en',
  direction: directions[defaultLang] || 'ltr',
};
const directionSlice = createSlice({
  name: 'direction',
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.language = action.payload || 'en'; // eslint-disable-line
      state.direction = directions[action.payload] || 'ltr'; // eslint-disable-line
    },
  },
});

export const {
  actions: directionActions,
  reducer,
  name: sliceKey,
} = directionSlice;
