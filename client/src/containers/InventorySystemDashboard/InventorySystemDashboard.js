import React from 'react';

import { Table } from 'antd';

import { DashboardWrapper } from './InventorySystemDashboard.styles';

import LayoutWrapper from '../../components/utility/layoutWrapper';
import DashboardStats from '../../components/DashboardStats/DashboardStats';

export default function() {
  const dataSource = [
    {
      key: '1',
      date: 'Mike',
      fullName: 32,
      address: '10 Downing Street',
      phoneNumber: '+220 394 3842'
    },
    {
      key: '2',
      date: 'John',
      fullName: 42,
      address: '10 Downing Street',
      phoneNumber: '+220 984 9823'
    },
  ];
  
  const columns = [
    {
      key: 'date',
      title: 'Date',
      dataIndex: 'date',
    },
    {
      key: 'fullName',
      title: 'Fullname',
      dataIndex: 'fullName',
    },
    {
      key: 'address',
      title: 'Address',
      dataIndex: 'address',
    },
    {
      key: 'phoneNumber',
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
    },
  ];

  return (
    <LayoutWrapper>
      <DashboardStats />
      <DashboardWrapper className="imsLayoutContent">
        <Table
          rowKey="id"
          columns={columns}
          dataSource={dataSource}
        />
      </DashboardWrapper>
    </LayoutWrapper>
  );
};
