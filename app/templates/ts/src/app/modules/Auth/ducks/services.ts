import axios from 'utils/axios';
import { BASE_URL } from 'configs';
import { CredsInterface, ForgotPasswordInterface, ResetPasswordInterface } from './types';

const AUTH_URL = `${BASE_URL}/auth`;

export const signIn = (credentials: CredsInterface): any | null =>
  new Promise((resolve, reject) => {
    axios({
      url: `${AUTH_URL}/login`,
      method: 'POST',
      credentials,
    })
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        if (error.response.data) {
          reject(error.response.data);
        }
      });
  });

export const signOut = (): any | null =>
  new Promise((resolve, reject) => {
    axios({
      url: `${AUTH_URL}/logout`,
      method: 'POST',
    })
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        if (error.response.data) {
          reject(error.response.data);
        }
      });
  });
export const getAuth = (): any | null =>
  new Promise((resolve, reject) => {
    axios({
      url: `${AUTH_URL}/user`,
      method: 'GET',
    })
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        if (error.response.data) {
          reject(error.response.data);
        }
      });
  });
export const forgotPassword = (data: ForgotPasswordInterface): any | null =>
  new Promise((resolve, reject) => {
    axios({
      url: `${AUTH_URL}/forgot`,
      method: 'POST',
      data,
    })
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        if (error.response.data) {
          reject(error.response.data);
        }
      });
  });
export const resetPassword = (data: ResetPasswordInterface): any | null =>
  new Promise((resolve, reject) => {
    axios({
      url: `${AUTH_URL}/forgot`,
      method: 'POST',
      data,
    })
      .then((response: any) => {
        resolve(response.data);
      })
      .catch((error) => {
        if (error.response.data) {
          reject(error.response.data);
        }
      });
  });
