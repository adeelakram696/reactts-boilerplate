/**
 *
 * Auth
 *
 */

import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { selectAuth } from './ducks/selectors';
import { AuthProps } from './ducks/types';
import { injectReducer } from 'store';
import { reducer, sliceKey } from './ducks/slice';
import { LOGIN_PAGE, FORGOT_PASSWORD_PAGE, RESET_PASSWORD_PAGE } from './constants';
import { Login } from './Login';
import { ForgotPassword } from './ForgotPassword';
import { ResetPassword } from './ResetPassword';

function AuthComponent(props: AuthProps): ReactElement {
  injectReducer({ key: sliceKey, reducer });
  const { children } = props;
  const auth = useSelector(selectAuth);
  const { activePage, user, fetchLoading } = auth;
  if (fetchLoading) return <div>Loading...</div>;
  if (activePage === FORGOT_PASSWORD_PAGE) return <ForgotPassword />;
  if (user?.changePasswordRequired || activePage === RESET_PASSWORD_PAGE) return <ResetPassword />;
  if (!user?.id || activePage === LOGIN_PAGE) return <Login />;

  return <>{children}</>;
}

export default AuthComponent;
