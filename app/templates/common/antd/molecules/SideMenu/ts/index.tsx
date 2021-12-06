import React, { useState, ReactElement } from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { AppstoreOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { ROOT } from 'configs/routeNames';

const { SubMenu } = Menu;

const SideMenu = (): ReactElement => {
  const [openKeys, setOpenKeys] = useState(['']);
  const { pathname } = useLocation();
  const [, selectedKeys] = pathname.split('/');
  const { t } = useTranslation();
  const onOpenChange = (key: any) => {
    setOpenKeys(key);
  };
  return (
    <Menu
      className="side-menu"
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      defaultSelectedKeys={[ROOT]}
      selectedKeys={[`${ROOT}${selectedKeys}`]}
    >
      <Menu.Item key={`${ROOT}`} icon={<AppstoreOutlined />} title={t('Dashboard')}>
        <Link to={`${ROOT}`}>{t('Dashboard')}</Link>
      </Menu.Item>
      <SubMenu
        key="settings"
        title={
          <span>
            <AppstoreOutlined />
            <span>{t('Settings')}</span>
          </span>
        }
      >
        <Menu.Item key={`${ROOT}profile`} title={t('Profile')}>
          <AppstoreOutlined />
          <span>
            <Link to={`${ROOT}profile`}>{t('Profile')}</Link>
          </span>
        </Menu.Item>
        <Menu.Item key={`${ROOT}admin`} title={t('Admin')}>
          <AppstoreOutlined />
          <span>
            <Link to={`${ROOT}admin`}>{t('Admin')}</Link>
          </span>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};
export default SideMenu;
