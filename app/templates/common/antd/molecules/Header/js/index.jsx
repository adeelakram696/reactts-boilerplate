import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined } from '@ant-design/icons';<% if (casl_react_package) { %>
import { useAbility } from '@casl/react';
import { AbilityContext } from 'app/atoms';<% } %>

const { Header } = Layout;
const HeaderWrap = ({
  collapsed,
  setCollapsed,
}) => {
  const { t } = useTranslation();
  const user = { name: 'John Doe' };<% if (casl_react_package) { %>
  const ability = useAbility(AbilityContext);<% } %>

  return (
    <Header style={{ padding: 0 }}>
      <Row justify="space-between">
        <Col>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => {
              setCollapsed(!collapsed);
            },
          })}
        </Col><% if (casl_react_package) { %>
        {!ability.can('manage', 'User') ? (<% } %>
          <Col>
            <Row align="middle">
              <Col pull={4}>
                <span className="header-icon">
                  <UserOutlined />
                </span>
                <span className="header-username">{(user || {}).name || t('Profile')}</span>
              </Col>
            </Row>
          </Col><% if (casl_react_package) { %>
        ) : null}<% } %>
      </Row>
    </Header>
  );
};
HeaderWrap.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  setCollapsed: PropTypes.func.isRequired,
};
export default HeaderWrap;
