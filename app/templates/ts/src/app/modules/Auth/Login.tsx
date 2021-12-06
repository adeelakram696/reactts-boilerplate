/**
 *
 * Auth
 *
 */

import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Checkbox, Col, Row, Button, Input, Alert } from 'antd';
import { useTranslation } from 'react-i18next';
import { selectAuth } from './ducks/selectors';
import { authActions, singIn } from './ducks/slice';
import { layout, tailLayout, validateMessages, FORGOT_PASSWORD_PAGE } from './constants';

export function Login(): ReactElement {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const auth = useSelector(selectAuth);
  const onFinish = (values: any) => dispatch(singIn(values));
  const onFinishFailed = (errorInfo: any) => errorInfo;
  const forgotPassword = () => dispatch(authActions.changePage(FORGOT_PASSWORD_PAGE));
  const renderForm = () => (
    <Form
      className="login-form"
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      validateMessages={validateMessages}
    >
      <Form.Item
        label={t('form.email.label')}
        name="email"
        rules={[
          {
            required: true,
            type: 'email',
            message: t('form.email.required'),
          },
        ]}
      >
        <Input type="email" />
      </Form.Item>
      <Form.Item
        label={t('form.password.label')}
        name="password"
        rules={[
          {
            required: true,
            message: t('form.password.required'),
          },
        ]}
      >
        <Input type="password" />
      </Form.Item>
      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>{t('login.remember_me')}</Checkbox>
        <Button type="link" htmlType="button" onClick={forgotPassword}>
          {t('forgot_password')}
        </Button>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" block>
          {t('submit')}
        </Button>
      </Form.Item>
    </Form>
  );

  return (
    <Row justify="center" align="middle" id="login-screen">
      <Col span={12} style={{ marginTop: '10%' }}>
        <Col span={24}>{auth.error && <Alert message={auth.error} type="error" />}</Col>
        <br />
        <Col span={24}>{renderForm()}</Col>
      </Col>
    </Row>
  );
}
