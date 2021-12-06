import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import getPermissions from './service';
import { PermissionState, defaults } from './types';

const initialState: PermissionState = {
  ...defaults,
};

export const permissionSlice = createSlice({
  name: 'permission',
  initialState,
  reducers: {
    getPermissionInProgress: (state: PermissionState) => ({ ...state, loading: true }),
    getPermissionSuccess: (state: PermissionState, action: PayloadAction<any>) => {
      return { ...state, loading: false, data: action.payload };
    },
    getPermissionFailure: (state: PermissionState, action: PayloadAction<any>) => {
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

export const fetchPermissions = (): any => async (dispatch: any) => {
  dispatch(getPermissionInProgress());
  try {
    const response = await getPermissions();
    dispatch(getPermissionSuccess(response.data));
  } catch (error) {
    dispatch(getPermissionFailure(error));
  }
};
