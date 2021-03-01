import React from 'react';

import { Row, Col } from 'antd';

import {
  ImsWidget,
  ImsIconWrapper,
  ImsWidgetWrapper,
  DashboardStatsWrapper,
} from './DashboardStats.styles';

import { FaBeer } from 'react-icons/fa';

const styles = {
  rowStyles: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
  },
  colStyle: {
    marginBottom: '16px',
  },
}

export default function() {
  return (
    <DashboardStatsWrapper>
      <Row gutter={24} style={styles.rowStyles}>
        <div className="something">

        </div>
        <Col sm={6} style={styles.colStyle}>
          <ImsWidgetWrapper>
            <ImsIconWrapper background="#6C5DD3">
              <FaBeer size={20} color="#fff" />
            </ImsIconWrapper>
            <ImsWidget>
              <h3>Total Stock</h3>
              <span>D4,959</span>
            </ImsWidget>
          </ImsWidgetWrapper>
        </Col>
        <Col sm={6} style={styles.colStyle}>
          <ImsWidgetWrapper>
            <ImsIconWrapper background="#0049C6">
              <FaBeer size={20} color="#fff" />
            </ImsIconWrapper>
            <ImsWidget>
              <h3>Total Stock</h3>
              <span>D4,959</span>
            </ImsWidget>
          </ImsWidgetWrapper>
        </Col>
        <Col sm={6} style={styles.colStyle}>
          <ImsWidgetWrapper>
            <ImsIconWrapper background="#FFA2C0">
              <FaBeer size={20} color="#fff" />
            </ImsIconWrapper>
            <ImsWidget>
              <h3>Total Stock</h3>
              <span>D4,959</span>
            </ImsWidget>
          </ImsWidgetWrapper>
        </Col>
        <Col sm={6} style={styles.colStyle}>
          <ImsWidgetWrapper>
            <ImsIconWrapper background="#FFCE73">
              <FaBeer size={20} color="#fff" />
            </ImsIconWrapper>
            <ImsWidget>
              <h3>Total Stock</h3>
              <span>D4,959</span>
            </ImsWidget>
          </ImsWidgetWrapper>
        </Col>
      </Row>
    </DashboardStatsWrapper>  
  );
};
