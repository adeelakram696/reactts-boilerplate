/**
 *
 * Forgot Password
 *
 */

import React, { ReactElement } from 'react';
import { Form, Col, Row, Button, Input, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectAuth } from './ducks/selectors';
import { resetPassword } from './ducks/slice';
import { validateMessages, PASSWORD_REGEX } from './constants';

export function ResetPassword(): ReactElement {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const auth = useSelector(selectAuth);
  const onSuccessChange = () => {
    notification.success(t('auth.reset.success'));
  };
  const onFinish = (values: any) => dispatch(resetPassword(values, onSuccessChange));
  return (
    <Row justify="center" align="middle">
      <Col span={6} style={{ marginTop: '10%' }}>
        <h2>{t('auth.reset.heading')}</h2>
        <Form
          name="normal_login"
          className="forgot-password-form"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            label={t('password')}
            name="password"
            rules={[
              {
                required: true,
                pattern: PASSWORD_REGEX,
                message: t('STRONG_PASSWORD_MESSAGE'),
              },
            ]}
          >
            <Input type="password" />
          </Form.Item>
          <Form.Item
            label={t('confirmPassword')}
            name="rePassword"
            rules={[
              {
                required: true,
                pattern: PASSWORD_REGEX,
                message: t('STRONG_PASSWORD_MESSAGE'),
              },
            ]}
          >
            <Input type="password" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
              loading={auth.loading}
            >
              <span>{t('submit')}</span>
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
