import React, { useState } from 'react';
import { Layout, Menu } from 'antd';

import './App.css';
import 'antd/dist/antd.css';

import { ThemeProvider } from 'styled-components';

const theme = {
  color: '#333',
};

const App = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default App;
