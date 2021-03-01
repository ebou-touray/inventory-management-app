import React from 'react';

import './App.css';
import 'antd/dist/antd.css';
import Routes from './router';
import AppProvider from './AppProvider'

const App = () => {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
};

export default App;
