import React from 'react';
import { Menu, Dropdown } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { Translation, useTranslation } from 'react-i18next';
import { locales, languageLabels, changeLanguage } from 'locales/i18n';
import './style.less';

const langMenu = () => (
  <Translation>
    {(t, { i18n }) => (
      <Menu
        selectedKeys={[i18n.language]}
        onClick={({ key }) => {
          changeLanguage(i18n, `${key}`);
        }}
      >
        {locales.map((locale: string) => (
          <Menu.Item key={locale}>{languageLabels[locale]}</Menu.Item>
        ))}
      </Menu>
    )}
  </Translation>
);

const LanguageSelection = (): any => {
  const { i18n } = useTranslation();
  return (
    <>
      <Dropdown overlay={langMenu} overlayClassName="language-Selection">
        <a className="ant-dropdown-link" href="#" tabIndex={0} onClick={(e) => e.preventDefault()}>
          <GlobalOutlined /> {(i18n.language || 'en').toUpperCase()}
        </a>
      </Dropdown>
    </>
  );
};

export default LanguageSelection;
