import React, { useState } from 'react';
import { Layout, Drawer } from 'antd';
import { ReactComponent as Logo } from 'assets/logo.svg';
import Header from '../Header';
import SideMenu from '../SideMenu';
import { DashboardProps } from './types';
import './dashboard.less';

const { Sider, Content } = Layout;
const DashboardLayout: React.FC<DashboardProps> = (props: DashboardProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { children } = props;
  return (
    <Layout id="dashboard-layout">
      <Sider trigger={null} width={260} collapsible collapsed={collapsed} className="sidebar">
        <div className="nav-logo-container">
          <div>
            <Logo width={50} />
          </div>
        </div>
        <SideMenu />
      </Sider>
      <Drawer
        placement="left"
        closable={false}
        onClose={() => {
          setCollapsed(!collapsed);
        }}
        visible={collapsed}
      >
        <div className="nav-logo-container">
          <div>
            <Logo width={50} />
          </div>
        </div>
        <SideMenu />
      </Drawer>
      <Layout className="site-layout">
        <Header setCollapsed={setCollapsed} collapsed={collapsed} />
        <Content
          className="site-layout-background main-body-outer"
          style={{
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
