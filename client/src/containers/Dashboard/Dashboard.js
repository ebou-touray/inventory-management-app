import React, { useState } from 'react';

import { Layout } from 'antd';

import DashboardRoutes from './DashboardRoutes';
import Sidebar from '../../Components/Sidebar/Sidebar';

import { DashboardGlobalStyles, DashboardWrapper } from './Dashboard.styles';
import Topbar from '../Topbar/Topbar';

const { Content, Footer, Header } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const styles = {
    layout: {
      flexDirection: 'row',
      overflowX: 'hidden',
    },
    content: {
      flexShrink: 0,
      padding: '60px 0 0',
      background: '#f1f3f6',
    },
    footer: {
      background: '#fff',
      textAlign: 'center',
      borderTop: '1px solid #ededed',
    }
  }

  return (
    <DashboardWrapper>
      <DashboardGlobalStyles />
      <Layout>
        <Topbar />
        <Layout style={styles.layout}>
          <Sidebar />
          <Layout className="contentMainLayout">
            <Content
              style={styles.content}
            >
              <DashboardRoutes />
            </Content>
            <Footer style={styles.footer}>
              &copy; {new Date().getFullYear()} | Powered by Ebou Touray
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </DashboardWrapper>
  )
};

export default Dashboard;
