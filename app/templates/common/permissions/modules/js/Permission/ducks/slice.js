import { createSlice } from '@reduxjs/toolkit';
import getPermissions from './service';

const initialState = {
  loading: false,
  error: '',
  data: null,
};

export const permissionSlice = createSlice({
  name: 'permission',
  initialState,
  reducers: {
    getPermissionInProgress: (state) => ({ ...state, loading: true }),
    getPermissionSuccess: (state, action) => ({ ...state, loading: false, data: action.payload }),
    getPermissionFailure: (state, action) => {
      const { error } = action.payload;
      return { ...state, loading: false, error };
    },
  },
});

export const { actions: permissionActions, reducer, name: sliceKey } = permissionSlice;

const {
  getPermissionInProgress,
  getPermissionSuccess,
  getPermissionFailure,
} = permissionSlice.actions;

export const fetchPermissions = () => async (dispatch) => {
  dispatch(getPermissionInProgress());
  try {
    const response = await getPermissions();
    dispatch(getPermissionSuccess(response.data));
  } catch (error) {
    dispatch(getPermissionFailure(error));
  }
};
