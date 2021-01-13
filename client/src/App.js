import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login';
import Stats from './Components/Stats';
import Home from './Components/Home/Home';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  UserAddOutlined,
  LoginOutlined,
} from '@ant-design/icons';
import './App.css';
import 'antd/dist/antd.css';
import { AiOutlineLineChart } from 'react-icons/ai';

const { Header, Sider, Content, Footer } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Router>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'sticky',
            top: 0,
            left: 0,
          }}
        >
          <div className="logo">
            <Link to="/">Logo</Link>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <span> Home</span>
              <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2" icon={<UserAddOutlined />}>
              <span>Register</span>
              <Link to="/register" />
            </Menu.Item>
            <Menu.Item key="3" icon={<LoginOutlined />}>
              <span>Login</span>
              <Link to="/login" />
            </Menu.Item>
            <Menu.Item key="4" icon={<AiOutlineLineChart />}>
              <span>Stats</span>
              <Link to="/stats" />
            </Menu.Item>
          </Menu>
        </Sider>

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
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
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
          <Footer style={{ textAlign: 'center' }}>
            Assutech ©2020 Created by Ebou Touray
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
