import { ReactChild } from 'react';

/* --- STATE --- */
export interface AuthState {
  user?: CurrenUser | null;
  activePage: string;
  loading: boolean;
  fetchLoading: boolean;
  forgotResponse: Status | null;
  resetResponse: Status | null;
  error: any;
}

export interface AuthProps {
  children?: ReactChild;
}

export interface CredsInterface {
  email: string;
  password: string;
}

export interface CurrenUser {
  id: number;
  username: string;
  changePasswordRequired: boolean;
}

export interface Status {
  status: boolean;
}
export interface ErrorResponse {
  status: string;
  message: string;
}

export interface ForgotPasswordInterface {
  email: string;
}
export interface ResetPasswordInterface {
  password: string;
  rePassword: string;
}

export type ModuleState = AuthState;

export type func = (param?: any) => any;
