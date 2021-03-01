import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

import SIDEBAR_MENU_OPTIONS from './Sidebar.navigations';

import SidebarWrapper from './Sidebar.styles';
import SidebarMenu from './SidebarMenu';

const { Sider } = Layout;



const Sidebar = ({ collapsed }) => {
  const styles = {
    sidebar: {
      height: '100vh',
      overflow: 'auto',
      position: 'sticky',
      top: 0,
      left: 0,
    },
    logo: {
      margin: '16px',
      color: '#fff',
      height: '32px',
    }
  };

  return (
    <SidebarWrapper>
      <Sider
        width={240}
        collapsible
        trigger={null}
        collapsed={collapsed}
        style={styles.sidebar}
      >
        <div style={styles.logo}>
          <Link to="/">Inventory Management</Link>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
        >
          {SIDEBAR_MENU_OPTIONS.map((option) => (
            <SidebarMenu
              item={option}
              key={option.key}
            />
          ))}
        </Menu>
      </Sider>
    </SidebarWrapper>
  );
};

export default Sidebar;
