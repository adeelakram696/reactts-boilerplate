import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  CurrenUser,
  ModuleState,
  Status,
  func,
  ErrorResponse,
  ForgotPasswordInterface,
  CredsInterface,
  ResetPasswordInterface,
} from './types';
import * as services from './services';

// The initial state of the Auth container
export const initialState: ModuleState = {
  user: null,
  activePage: '',
  loading: false,
  fetchLoading: false,
  forgotResponse: null,
  resetResponse: null,
  error: '',
};

// for async action follow blow link
// https://redux-toolkit.js.org/tutorials/advanced-tutorial#thinking-in-thunks
// OR
// https://redux-toolkit.js.org/api/createAsyncThunk

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changePage(state, action: PayloadAction<string>) {
      return { ...state, activePage: action.payload };
    },
    signInPending(state) {
      return { ...state, loading: true };
    },
    signInSuccess(state, action: PayloadAction<CurrenUser>) {
      return { ...state, loading: false, user: action.payload };
    },
    signInError(state, action: PayloadAction<ErrorResponse>) {
      return { ...state, loading: false, error: action.payload };
    },
    signOutPending(state) {
      return { ...state, loading: true };
    },
    signOutSuccess(state, action: PayloadAction<Status>) {
      return { ...state, loading: false, user: null };
    },
    signOutError(state, action: PayloadAction<ErrorResponse>) {
      return { ...state, loading: false, error: action.payload };
    },
    forgotPasswordPending(state) {
      return { ...state, loading: true };
    },
    forgotPasswordSuccess(state, action: PayloadAction<Status>) {
      return { ...state, loading: false, forgotResponse: action.payload };
    },
    forgotPasswordError(state, action: PayloadAction<ErrorResponse>) {
      return { ...state, loading: false, error: action.payload };
    },
    resetPasswordPending(state) {
      return { ...state, loading: true };
    },
    resetPasswordSuccess(state, action: PayloadAction<Status>) {
      return { ...state, loading: false, resetResponse: action.payload };
    },
    resetPasswordError(state, action: PayloadAction<ErrorResponse>) {
      return { ...state, loading: false, error: action.payload };
    },
    getAuthPending(state) {
      return { ...state, fetchLoading: true };
    },
    getAuthSuccess(state, action: PayloadAction<CurrenUser>) {
      return { ...state, fetchLoading: false, user: action.payload };
    },
    getAuthError(state, action: PayloadAction<ErrorResponse>) {
      return { ...state, fetchLoading: false, error: action.payload };
    },
  },
});

export const { actions: authActions, reducer, name: sliceKey } = authSlice;

// Define a thunk that dispatches those action creators
export const getAuth = (onSuccess?: func, onFailure?: func) => async (dispatch: any) => {
  dispatch(authSlice.actions.getAuthPending());
  try {
    const response = await services.getAuth();
    dispatch(authSlice.actions.getAuthSuccess(response.data));
    if (onSuccess) {
      onSuccess(response.data);
    }
  } catch (error) {
    const resp = (error.response || {}).data;
    dispatch(authSlice.actions.getAuthError(resp));
    if (onFailure) {
      onFailure(resp);
    }
  }
};
export const singIn = (credentials: CredsInterface, onSuccess?: func, onFailure?: func) => async (
  dispatch: any,
) => {
  dispatch(authSlice.actions.signInPending());
  try {
    const response = await services.signIn(credentials);
    dispatch(authSlice.actions.signInSuccess(response.data));
    if (onSuccess) {
      onSuccess(response.data);
    }
  } catch (error) {
    const resp = (error.response || {}).data;
    dispatch(authSlice.actions.signInError(resp));
    if (onFailure) {
      onFailure(resp);
    }
  }
};
export const singOut = (onSuccess?: func, onFailure?: func) => async (dispatch: any) => {
  dispatch(authSlice.actions.signOutPending());
  try {
    const response = await services.signOut();
    dispatch(authSlice.actions.signOutSuccess(response.data));
    if (onSuccess) {
      onSuccess(response.data);
    }
  } catch (error) {
    const resp = (error.response || {}).data;
    dispatch(authSlice.actions.signOutError(resp));
    if (onFailure) {
      onFailure(resp);
    }
  }
};
export const forgotPassword = (
  data: ForgotPasswordInterface,
  onSuccess?: func,
  onFailure?: func,
) => async (dispatch: any) => {
  dispatch(authSlice.actions.forgotPasswordPending());
  try {
    const response = await services.forgotPassword(data);
    dispatch(authSlice.actions.forgotPasswordSuccess(response.data));
    if (onSuccess) {
      onSuccess(response.data);
    }
  } catch (error) {
    const resp = (error.response || {}).data;
    dispatch(authSlice.actions.forgotPasswordError(resp));
    if (onFailure) {
      onFailure(resp);
    }
  }
};
export const resetPassword = (
  data: ResetPasswordInterface,
  onSuccess?: func,
  onFailure?: func,
) => async (dispatch: any) => {
  dispatch(authSlice.actions.resetPasswordPending());
  try {
    const response = await services.resetPassword(data);
    dispatch(authSlice.actions.resetPasswordSuccess(response.data));
    if (onSuccess) {
      onSuccess(response.data);
    }
  } catch (error) {
    const resp = (error.response || {}).data;
    dispatch(authSlice.actions.resetPasswordError(resp));
    if (onFailure) {
      onFailure(resp);
    }
  }
};
