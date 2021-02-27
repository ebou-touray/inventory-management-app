import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { AiOutlineLineChart } from 'react-icons/ai';

import {
  HomeOutlined,
  LoginOutlined,
  UserAddOutlined,
} from '@ant-design/icons';

import SidebarWrapper from './Sidebar.styles';

const { Sider } = Layout;

const Sidebar = ({ collapsed }) => {
  return (
    <SidebarWrapper>
      <Sider
        width={240}
        collapsible
        trigger={null}
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
          <Link to="/">Inventory Management System</Link>
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
    </SidebarWrapper>
  );
};

export default Sidebar;
