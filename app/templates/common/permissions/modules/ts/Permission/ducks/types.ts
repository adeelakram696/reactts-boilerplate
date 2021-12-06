import { RouteProps } from 'react-router-dom';
import React from 'react';

export type PropType = {
  match?: RouteProps;
};

export interface Permission {
  action: string;
  subject: string;
}

export const defaults: PermissionState = {
  loading: false,
  error: '',
  data: null,
};

export interface PermissionState {
  loading: boolean;
  error: any;
  data: Permission[] | null;
}

export interface PermissionPropTypes {
  children: React.ReactElement;
}
