import React from 'react';

import LayoutWrapper from '../../components/utility/layoutWrapper';
import { DashboardWrapper } from './InventorySystemDashboard.styles';

export default function() {
  return (
    <LayoutWrapper>
      <DashboardWrapper className="imsLayoutContent">
        <p>Dashboard home page</p>
      </DashboardWrapper>
    </LayoutWrapper>
  );
};
