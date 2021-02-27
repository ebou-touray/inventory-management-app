import React from 'react';

import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const SidebarMenu = ({ item, ...rest }) => {

  const { key, label, leftIcon } = item;

  return (
    <Menu.Item key={key} {...rest}>
      <Link to="/">
        <span>
          <span className="nav-text">
            <span>{leftIcon}</span>
            <span>{label}</span>
          </span>
        </span>
      </Link>
    </Menu.Item>
  )
};

export default SidebarMenu;
