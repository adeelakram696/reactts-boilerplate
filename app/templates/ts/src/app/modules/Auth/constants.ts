import { INVALID_EMAIL_MESSAGE, REQUIRED_FEILD, STRONG_PASSWORD_MESSAGE } from 'configs/constants';

export { PASSWORD_REGEX } from 'configs/regex';
export { ROOT } from 'configs/routeNames';
export { STRONG_PASSWORD_MESSAGE } from 'configs/constants';
export const LOGIN_PAGE = 'LOGIN';
export const FORGOT_PASSWORD_PAGE = 'FORGOT_PASSWORD_PAGE';
export const RESET_PASSWORD_PAGE = 'RESET_PASSWORD_PAGE';

export const validateMessages: any = {
  required: REQUIRED_FEILD,
  types: {
    email: INVALID_EMAIL_MESSAGE,
    password: STRONG_PASSWORD_MESSAGE,
  },
};

export const layout: any = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 12,
  },
};
export const tailLayout: any = {
  wrapperCol: {
    offset: 4,
    span: 12,
  },
};
