/**
 *
 * Forgot Passwrod
 *
 */

import React, { ReactElement } from 'react';
import { Form, Col, Row, Button, Input, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { MailOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { selectAuth } from './ducks/selectors';
import { LOGIN_PAGE, validateMessages } from './constants';
import { authActions, forgotPassword } from './ducks/slice';

export function ForgotPassword(): ReactElement {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const auth = useSelector(selectAuth);
  const emailSent = () => {
    notification.success(t('auth.forgot.emailSent'));
  };
  const onFinish = (values: any) => dispatch(forgotPassword(values, emailSent));
  const backtoLogin = () => dispatch(authActions.changePage(LOGIN_PAGE));
  return (
    <Row justify="center" align="middle">
      <Col span={6} style={{ marginTop: '10%' }}>
        <h2>{t('auth.forgot.heading')}</h2>
        <Form
          name="normal_login"
          className="forgot-password-form"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            label={t('email')}
            name="email"
            rules={[
              {
                required: true,
                type: 'email',
                message: t('form.email.required'),
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder={t('form.email.placeholder')}
              type="email"
            />
          </Form.Item>
          <Form.Item>
            <Button type="link" htmlType="button" onClick={backtoLogin}>
              {t('back_to_login')}
            </Button>
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
