import React from 'react';

import {
  HomeOutlined,
  TagsOutlined,
  UserSwitchOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';

const options = [
  {
    key: '',
    path: '',
    label: 'Dashboard',
    leftIcon: <HomeOutlined />,
  },
  {
    key: 'suppliers',
    path: '/suppliers',
    label: 'Suppliers',
    leftIcon: <ShoppingCartOutlined />,
  },
  {
    key: 'inventories',
    path: '/inventories',
    label: 'Inventories',
    leftIcon: <TagsOutlined />,
  },
  {
    key: 'users',
    path: '/users',
    label: 'Users',
    leftIcon:  <UserSwitchOutlined />,
  },
];

export default options;
