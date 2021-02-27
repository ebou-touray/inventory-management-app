import React from 'react';

import { Layout } from 'antd';

import TopbarWrapper from './Topbar.styles';

const { Content, Footer, Header } = Layout;

export default function Topbar() {
  const styling = {
    height: 60,
    width: '100%',
    position: 'fixed',
    background: '#fff'
  }
  return (
    <TopbarWrapper>
      <Header
        style={styling}
        className="inventoryTopbar"
      >
        {/* {React.createElement(
          collapsed ? MenuOutlined : MenuOutlined,
          {
            className: 'trigger',
            onClick: toggle,
          }
        )} */}
        <p>Hello</p>
      </Header>
    </TopbarWrapper>
  )
}