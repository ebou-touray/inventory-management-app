import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login';
import Stats from './Components/Stats';
import Home from './Components/Home/Home';
import {
  MenuOutlined,
  HomeOutlined,
  UserAddOutlined,
  LoginOutlined,
} from '@ant-design/icons';

import './App.css';
import 'antd/dist/antd.css';

import Sidebar from './Components/Sidebar/Sidebar';

const { Header, Content, Footer } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Router>
      <Layout>
        <Sidebar collapsed={collapsed} />

        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
              overflow: 'auto',
              position: 'sticky',
              top: 0,
              left: 0,
            }}
          >
            {React.createElement(
              collapsed ? MenuOutlined : MenuOutlined,
              {
                className: 'trigger',
                onClick: toggle,
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: '280px',
            }}
          >
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/stats" component={Stats} />
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>
            &copy; {new Date().getFullYear()} | Powered by Ebou Touray
          </Footer> */}
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
