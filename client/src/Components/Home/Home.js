import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Space, Typography } from 'antd';
const { Title } = Typography;

const Home = () => {
    return (
      <section style={{ textAlign: 'center' }}>
        <div className="dark-overlay">
          <div className="landing-inner">
            <Title>Inventory Management App</Title>
            <p className="lead">
              Use this app to add, edit, delete and search items in the
              inventory
            </p>
            <Space>
              <Button type="primary">
                <Link to="/register">Register</Link>
              </Button>
              <Button type="primary">
                <Link to="/login">Login</Link>
              </Button>
            </Space>
          </div>
        </div>
      </section>
    );
}

export default Home
